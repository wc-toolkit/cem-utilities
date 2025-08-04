import {
  getComponentPublicMethods,
  getComponentPublicProperties,
} from "./cem-utils";
import { deepMerge } from "./deep-merge";
import type {
  Attribute,
  Component,
  CssCustomProperty,
  CssCustomState,
  CssPart,
  ComponentEvent,
  Method,
  Property,
  Slot,
  AttributeAndProperty,
} from "./types";

/** A generic type for creating customized docs for components APIs */
export type ComponentApiOptions<T = unknown> = {
  /** The section heading for the API */
  heading?: string;
  /** Additional section description for the API */
  description?: string;
  /** A template for rendering the API documentation */
  template?: (api?: T[]) => string;
};

/** Available options for setting the order of the docs APIs */
export type ApiOrderOption =
  | "attributes"
  | "properties"
  | "attrsAndProps"
  | "propsOnly"
  | "events"
  | "methods"
  | "slots"
  | "cssProps"
  | "cssParts"
  | "cssState";

/** Available options for configuring the way the components description is rendered */
export type ComponentDescriptionOptions = {
  /**
   * The order in which the documentation for each of the APIs will be rendered
   * If a key is not provided, it will not be rendered
   * @default ["attrsAndProps", "events", "slots", "methods", "cssProps", "cssParts", "cssState"]
   */
  order?: ApiOrderOption[];
  /**
   * The property name of the component description.
   * If not provided, it will default to the `summary` then to the `description` property.
   * If you have created a custom description property, you can provide the name here.
   * @default "description"
   */
  descriptionSrc?: "description" | "summary" | (string & {});
  /**
   * The type of the component description
   * @deprecated This is unused will be removed in the next major version
   * @default "parsedType"
   */
  altType?: string;
  /**
   * The options for each component API
   */
  apis?: {
    attributes?: ComponentApiOptions<Attribute>;
    properties?: ComponentApiOptions<Property>;
    attrsAndProps?: ComponentApiOptions<Attribute>;
    propsOnly?: ComponentApiOptions<Property>;
    events?: ComponentApiOptions<ComponentEvent>;
    methods?: ComponentApiOptions<Method>;
    slots?: ComponentApiOptions<Slot>;
    cssProps?: ComponentApiOptions<CssCustomProperty>;
    cssParts?: ComponentApiOptions<CssPart>;
    cssState?: ComponentApiOptions<CssCustomState>;
  };
  /** The section heading level to use for the component details sections */
  sectionHeadingLevel?: number;
};

/**
 * Gets the template for a component's description based on the options provided.
 * @param {Component} component CEM component/declaration object
 * @param {ComponentDescriptionOptions} options ComponentDescriptionOptions
 * @param {boolean} isJsDoc prepares comment to be inserted into a multiline JS comment
 * @returns {string} The component description and API details
 */
export function getComponentDetailsTemplate(
  component?: Component,
  options?: ComponentDescriptionOptions,
  isJsDoc?: boolean
) {
  if (!component) {
    throw new Error("Component is required");
  }

  const apiOptions = deepMerge<ComponentDescriptionOptions>(
    defaultDescriptionOptions,
    options
  );

  let description = getMainComponentDescription(
    component,
    apiOptions.descriptionSrc
  );

  const headingLevel = createMarkdownHeading(
    apiOptions.sectionHeadingLevel || 2
  );

  apiOptions.order?.forEach((key) => {
    const componentContent = getApiByOrderOption(component, key);
    const api = apiOptions.apis ? apiOptions.apis[key] : undefined;
    
    if (api && componentContent?.length) {
      description += `\n\n${headingLevel} ${api.heading}`;
      description += api.description ? `\n\n${api.description}` : "";
      description += api.template
        ? // @ts-expect-error componentContent takes many shapes
          `\n\n${api.template(componentContent)}`
        : "";
    }
  });

  if (isJsDoc) {
    description = description
      .split("\n")
      .map((x) => ` * ${x}`)
      .join("\n");
  }

  return description;
}

/**
 * Gets the API details based on the order option provided.
 * @param {Component} component CEM component/declaration object
 * @param {ApiOrderOption} api The API to return
 * @returns {Attribute[] | Property[] | ComponentEvent[] | Method[] | Slot[] | CssCustomProperty[] | CssPart[] | CssCustomState[] | AttributeAndProperty[]} An array of the API details
 */
export function getApiByOrderOption(
  component?: Component,
  api?: ApiOrderOption
):
  | Attribute[]
  | Property[]
  | ComponentEvent[]
  | Method[]
  | Slot[]
  | CssCustomProperty[]
  | CssPart[]
  | CssCustomState[]
  | AttributeAndProperty[] {
  if (!component || !api) {
    return [];
  }

  switch (api) {
    case "attributes":
      return component.attributes || ([] as Attribute[]);
    case "properties":
      return getComponentPublicProperties(component) || ([] as Property[]);
    case "attrsAndProps": {
      return getAttrsAndProps(component);
    }
    case "propsOnly": {
      return getPropertyOnlyFields(component);
    }
    case "events":
      return component.events || ([] as ComponentEvent[]);
    case "methods":
      return getComponentPublicMethods(component) as Method[];
    case "slots":
      return component.slots || ([] as Slot[]);
    case "cssProps":
      return component.cssProperties || ([] as CssCustomProperty[]);
    case "cssParts":
      return component.cssParts || ([] as CssPart[]);
    case "cssState":
      return component.cssStates || ([] as CssCustomState[]);
    default:
      return [];
  }
}

/**
 * Gets the description from a CEM based on a specified source.
 * If no source is provided, it will default to the `summary` then to the `description` property.
 * @param component CEM component/declaration object
 * @param descriptionSrc property name of the description source
 * @returns string
 */
export function getMainComponentDescription(
  component?: Component,
  descriptionSrc?: "description" | "summary" | (string & {})
): string {
  if (!component) {
    return "";
  }

  let description =
    (descriptionSrc
      ? (component[descriptionSrc] as string)
      : component.summary || component.description
    )?.replace(/\\n/g, "\n") || "";

  if (component.deprecated) {
    const deprecation =
      typeof component.deprecated === "string"
        ? `@deprecated ${component.deprecated}`
        : "@deprecated";
    description = `${deprecation}\n\n${description}`;
  }

  return description;
}

/**
 * Gets a combined list of attributes and public properties (including those not associated with an attribute) for a component.
 * @param {Component} component
 * @returns {AttributeAndProperty[]} An array of attributes and properties
 */
export function getAttrsAndProps(component?: Component): AttributeAndProperty[] {
  if (!component) {
    return [];
  }

  const attributes =
    component.attributes?.map((attr) => {
      return {
        attrName: attr.name,
        propName: attr.fieldName,
        summary: attr.summary,
        description: attr.description,
        inheritedFrom: attr.inheritedFrom,
        type: attr.type,
        default: attr.default,
        deprecated: attr.deprecated,
        static: false,
        source: undefined,
        readonly: false,
      };
    }) || [];
  const properties = getComponentPublicProperties(component)
    .filter((prop) => {
      return !attributes?.map((attr) => attr.propName).includes(prop.name);
    })
    .map((prop) => {
      return {
        attrName: undefined,
        propName: prop.name,
        summary: prop.summary,
        description: prop.description,
        inheritedFrom: prop.inheritedFrom,
        type: prop.type,
        default: prop.default,
        deprecated: prop.deprecated,
        static: prop.static,
        source: prop.source,
        readonly: prop.readonly,
      };
    });
  return [...attributes, ...properties];
}

/**
 * Returns a list of public properties that do not have an associated attribute.
 * @param component CEM component/declaration object
 * @returns {Property[]} An array of properties
 */
export function getPropertyOnlyFields(component?: Component): Property[] {
  if (!component) {
    return [];
  }

  const props = getComponentPublicProperties(component) || [];
  const attrs = component.attributes?.map((attr) => attr.name) || [];
  return props?.filter(
    (prop) => !attrs.includes(prop.name) || []
  ) as Property[];
}

/**
 * Gets the description for a member based on the description and deprecated properties.
 * If the member is deprecated, it will prepend the description with the deprecation message and the `@deprecated` JSDoc tag.
 * @param description The description of the member from the CEM
 * @param deprecated The deprecation message or boolean value
 * @returns
 */
export function getMemberDescription(
  description?: string,
  deprecated?: boolean | string
) {
  if (!deprecated) {
    return description || "";
  }

  const desc = description ? `- ${description}` : "";

  return typeof deprecated === "string"
    ? `@deprecated ${deprecated} ${desc}`
    : `@deprecated ${desc}`;
}

/**
 * Default options for rendering component descriptions
 * @type {ComponentDescriptionOptions}
 */
export const defaultDescriptionOptions: ComponentDescriptionOptions = {
  order: [
    "attrsAndProps",
    "events",
    "slots",
    "methods",
    "cssProps",
    "cssParts",
    "cssState",
  ],
  descriptionSrc: "description",
  apis: {
    attributes: {
      heading: "Attributes",
      description: "HTML attributes that can be applied to this element.",
      template: (api?: Attribute[]) =>
        api
          ?.map((attr) => {
            const getName = (attr: Attribute) =>
              attr.name === attr.fieldName || !attr.fieldName
                ? `\`${attr.name}\``
                : `\`${attr.name}\`/\`${attr.fieldName}\``;

            return `- ${getName(attr)}: ${attr.description}`;
          })
          .join("\n") || "",
    },
    properties: {
      heading: "Properties",
      description:
        "Properties that can be applied to this element using JavaScript.",
      template: (api?: Property[]) =>
        api
          ?.map(
            (prop) =>
              `- \`${prop.name}\`: ${prop.readonly ? "(readonly) " : ""}${prop.description}`
          )
          .join("\n") || "",
    },
    attrsAndProps: {
      heading: "Attributes & Properties",
      description:
        "Component attributes and properties that can be applied to the element or by using JavaScript.",
      template: (api?: AttributeAndProperty[]) =>
        api
          ?.map((prop) => {
            const getName = (prop: AttributeAndProperty) =>
              prop.attrName === prop.propName || !prop.attrName
                ? `\`${prop.propName}\``
                : `\`${prop.attrName}\`/\`${prop.propName}\``;
            return `- ${getName(prop)}: ${prop.description} ${
              !prop.attrName ? "(property only)" : ""
            }${prop.readonly ? " (readonly)" : ""}`;
          })
          .join("\n") || "",
    },
    propsOnly: {
      heading: "Properties",
      description:
        "Properties that can be applied to this element using JavaScript.",
      template: (api?: Property[]) =>
        api
          ?.map(
            (prop) =>
              `- \`${prop.name}\`: ${prop.readonly ? "(readonly) " : ""}${prop.description}`
          )
          .join("\n") || "",
    },
    events: {
      heading: "Events",
      description: "Events that will be emitted by the component.",
      template: (api?: ComponentEvent[]) =>
        api
          ?.map((event) => `- \`${event.name}\`: ${event.description}`)
          .join("\n") || "",
    },
    methods: {
      heading: "Methods",
      description:
        "Methods that can be called to access component functionality.",
      template: (api?: Method[]) =>
        api
          ?.map((method) => `- \`${method.type.text}\`: ${method.description}`)
          .join("\n") || "",
    },
    slots: {
      heading: "Slots",
      description: "Areas where markup can be added to the component.",
      template: (api?: Slot[]) =>
        api
          ?.map(
            (slot) => `- \`${slot.name || "(default)"}\`: ${slot.description}`
          )
          .join("\n") || "",
    },
    cssProps: {
      heading: "CSS Custom Properties",
      description: "CSS variables available for styling the component.",
      template: (api?: CssCustomProperty[]) =>
        api
          ?.map(
            (cssProp) =>
              `- \`${cssProp.name}\`: ${cssProp.description} (default: \`${cssProp.default}\`)`
          )
          .join("\n") || "",
    },
    cssParts: {
      heading: "CSS Parts",
      description:
        "Custom selectors for styling elements within the component.",
      template: (api?: CssPart[]) =>
        api
          ?.map((cssPart) => `- \`${cssPart.name}\`: ${cssPart.description}`)
          .join("\n") || "",
    },
    cssState: {
      heading: "CSS States",
      description:
        "These can be used to apply styling when a component is in a given state.",
      template: (api?: CssCustomState[]) =>
        api
          ?.map((cssState) => `- \`${cssState.name}\`: ${cssState.description}`)
          .join("\n") || "",
    },
  },
};

/**
 * Returns a Markdown heading string for the given level and text.
 * @param level The heading level (1-6)
 * @param text The heading text
 * @returns {string} The Markdown heading
 */
export function createMarkdownHeading(level: number): string {
  const safeLevel = Math.min(Math.max(level, 1), 6);
  return "#".repeat(safeLevel);
}