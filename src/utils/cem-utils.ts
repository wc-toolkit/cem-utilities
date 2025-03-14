import type * as cem from "custom-elements-manifest";
import type { Component, ComponentEvent, Method, Property, Mixin } from "./types";

export const JS_TYPES = new Set([
  "any",
  "bigint",
  "boolean",
  "never",
  "null",
  "number",
  "string",
  "Symbol",
  "undefined",
  "unknown",
]);

export const DOM_EVENTS = new Set([
  "AnimationEvent",
  "BeforeUnloadEvent",
  "ClipboardEvent",
  "DragEvent",
  "Event",
  "FocusEvent",
  "HashChangeEvent",
  "InputEvent",
  "KeyboardEvent",
  "MessageEvent",
  "MouseEvent",
  "MutationObserver",
  "PageTransitionEvent",
  "PointerEvent",
  "PopStateEvent",
  "ProgressEvent",
  "StorageEvent",
  "TouchEvent",
  "TransitionEvent",
  "UIEvent",
  "WebGLContextEvent",
  "WheelEvent",
]);

/**
 * Gets a list of all components from a Custom Elements Manifest object
 * @param customElementsManifest
 * @param exclude an array of component names to exclude
 * @returns {Array<Component>} an array of components
 */
export function getAllComponents<T extends Component>(
  customElementsManifest: unknown,
  exclude: string[] = []
): T[] {
  return (
    ((customElementsManifest as cem.Package).modules
      ?.map((mod) => mod.declarations
        ?.filter((d) => (d as cem.CustomElement).customElement)
        ?.flat()
      )
      ?.flat() || []
    ).filter((x) => x && !exclude?.includes(x.name)) as unknown as T[]);
}

/**
 * Gets a list of all mixins from a Custom Elements Manifest object
 * @param customElementsManifest
 * @param exclude an array of component names to exclude
 * @returns {Array<Mixin>} an array of components
 */
export function getAllMixins<T extends Mixin>(
  customElementsManifest: unknown,
  exclude: string[] = []
): T[] {
  return (
    ((customElementsManifest as cem.Package).modules
      ?.map((mod) => mod.declarations
        ?.filter((d) => (d as cem.Declaration).kind === "mixin")
        ?.flat()
      )
      ?.flat() || []
    ).filter((x) => x && !exclude?.includes(x.name)) as unknown as T[]);
}

/**
 * Gets a component from a CEM object based on the class name
 * @param customElementsManifest CEM object
 * @param exclude and array of component names to exclude
 * @returns {Component}
 */
export function getComponentByClassName<T extends Component>(
  customElementsManifest: unknown,
  className?: string
): T | undefined {
  return getAllComponents<T>(customElementsManifest).find(
    (c) => c?.name === className
  );
}

/**
 * Gets a component from a CEM object based on the tag name
 * @param customElementsManifest CEM object
 * @param exclude and array of component names to exclude
 * @returns {Component}
 */
export function getComponentByTagName<T extends Component>(
  customElementsManifest: unknown,
  tagName?: string
): T | undefined {
  return getAllComponents<T>(customElementsManifest).find(
    (c) => c?.tagName === tagName
  );
}

/**
 * Gets a list of public properties from a CEM component
 * @param component CEM component/declaration object
 * @returns {Array<Property>} an array of public properties for a given component
 */
export function getComponentPublicProperties<T extends Property>(component: Component) {
  return (component?.members?.filter(
    (member) =>
      member.kind === "field" &&
      member.privacy !== "private" &&
      member.privacy !== "protected" &&
      !member.static &&
      !member.name.startsWith("#")
  ) || []) as T[];
}

/**
 * Get all public methods for a component
 * @param component CEM component/declaration object
 * @returns {Array<Method>} an array of methods for a given component
 */
export function getComponentPublicMethods<T extends Method>(
  component: Component
): T[] {
  const getParameter = (p: cem.Parameter) =>
    p.name + getParamType(p) + getParamDefaultValue(p);
  const getParamType = (p: cem.Parameter) =>
    p.type?.text ? `${p.optional ? "?" : ""}: ${p.type?.text}` : "";
  const getParamDefaultValue = (p: cem.Parameter) =>
    p.default ? ` = ${p.default}` : "";

  return (
    // filter to return only public methods
    (
      component?.members?.filter(
        (member) =>
          member.kind === "method" &&
          member.privacy !== "private" &&
          member.privacy !== "protected" &&
          !member.name.startsWith("#")
      ) as Method[]
    )?.map((m) => {
      // reconstruct method type
      m.type = {
        text: `${m.name}(${m.parameters?.map((p) => getParameter(p)).join(", ") || ""}) => ${m.return?.type?.text || "void"}`,
      };

      return m;
    })
  ) as T[];
}

/** The type used to define the configuration options for the `getComponentEventsWithType` function */
export type EventOptions = {
  /** The name of the property where custom detail type is stored */
  customEventDetailTypePropName?: string;
  /** Overrides the event type from `CustomEvent` to the type specified in the event type in the CEM */
  overrideCustomEventType?: boolean;
};

/**
 * Get all events for a component with the complete event type
 * @param component CEM component/declaration object
 * @param {EventOptions} options options for custom event detail type and custom event type
 * @returns {Array<ComponentEvent>} an array of events for a given component
 */
export function getComponentEventsWithType<T extends ComponentEvent>(
  component: cem.CustomElement,
  options: EventOptions = {}
): T[] {
  const events = component?.events?.map((e) => {
    const type: string =
      (e as unknown as Record<string, cem.Type>)[
        `${options.customEventDetailTypePropName}`
      ]?.text || e.type?.text;

    const eventType = options.overrideCustomEventType
      ? type || "CustomEvent"
      : DOM_EVENTS.has(type)
        ? type
        : type && type !== "CustomEvent"
          ? `CustomEvent<${type}>`
          : "CustomEvent";

    return {
      ...e,
      type: {
        text: eventType,
      },
    };
  });

  return (events || []) as T[];
}

/**
 * Gets a list of event detail types for a given component.
 * This is used for generating a list of event names for an import in a type definition file.
 * If the event detail type is not a named type, custom type, or a generic, it will not be included in the list.
 * @param {Component} component The component you want to get the event types for
 * @param {string[]} excludedTypes Any types you want to exclude from the list
 * @returns {string[]} A string array of event types for a given component
 */
export function getCustomEventDetailTypes(
  component: Component,
  excludedTypes?: string[]
): string[] {
  const types =
    component?.events
      ?.map((e) => {
        const eventType = e.type?.text
          .replace("[]", "")
          .replace(" | undefined", "");
        return eventType &&
          !excludedTypes?.includes(eventType) &&
          !JS_TYPES.has(eventType) &&
          !DOM_EVENTS.has(eventType) &&
          !eventType.includes("<") &&
          !eventType.includes(">") &&
          !eventType.includes(`{`) &&
          !eventType.includes("'") &&
          !eventType.includes(`"`)
          ? eventType
          : undefined;
      })
      ?.filter((e) => e !== undefined && !e?.startsWith("HTML")) || [];

  return (types?.length ? [...new Set(types)] : []) as string[];
}
