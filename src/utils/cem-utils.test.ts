import { describe, expect, test } from "vitest";
import {
  getAllComponents,
  getComponentByClassName,
  getComponentByTagName,
  getComponentEventsWithType,
  getComponentPublicMethods,
  getComponentPublicProperties,
  getCustomEventDetailTypes,
  isPrivateMember,
  preferParsedLiteralUnion,
} from "./cem-utils";
import { shoelaceCem } from "./__MOCKS__/shoelace-cem" with { type: "json" };
import { guiCem } from "./__MOCKS__/gui-cem" with { type: "json" };
import type { Component } from "./types";

describe("getAlComponents", () => {
  test("should return one component from `guiCem`", () => {
    // Arrange

    // Act
    const components = getAllComponents(guiCem);

    // Assert
    expect(components.length).toEqual(1);
  });

  test("should return an array of all components from `shoelaceCem`", () => {
    // Arrange

    // Act
    const components = getAllComponents(shoelaceCem);

    // Assert
    expect(components.length).toEqual(58);
  });

  test("should ignore modules without declarations", () => {
    // Arrange
    const cemWithoutDeclarations = {
      schemaVersion: "2.1.0",
      modules: [
        {
          kind: "javascript-module",
          path: "./index.js",
          exports: [
            {
              kind: "custom-element-definition",
              name: "my-button",
              declaration: {
                name: "MyButton",
                module: "./button.js",
              },
            },
          ],
        },
        {
          kind: "javascript-module",
          path: "./button.js",
          declarations: [
            {
              kind: "class",
              name: "MyButton",
              customElement: true,
              tagName: "my-button",
            },
          ],
        },
      ],
    };

    // Act
    const components = getAllComponents(cemWithoutDeclarations);

    // Assert
    expect(components).toHaveLength(1);
    expect(components[0]?.name).toBe("MyButton");
  });
});

describe("getComponentByClassName", () => {
  test("should return icon component from `guiCem`", () => {
    // Arrange

    // Act
    const component = getComponentByClassName(guiCem, "GuiIcon");

    // Assert
    expect(component).toBeDefined();
  });

  test("should return `undefined` when component is not found", () => {
    // Arrange

    // Act
    const component = getComponentByClassName(guiCem, "GuiIcon2");

    // Assert
    expect(component).toBeUndefined();
  });

  test("should return icon component from `shoelaceCem`", () => {
    // Arrange

    // Act
    const component = getComponentByClassName(shoelaceCem, "SlIcon");

    // Assert
    expect(component).toBeDefined();
  });

  test("should return `undefined` when component is not found", () => {
    // Arrange

    // Act
    const component = getComponentByClassName(shoelaceCem, "SlIcon2");

    // Assert
    expect(component).toBeUndefined();
  });

  test("should return resolve module paths for a component", () => {
    // Arrange

    // Act
    const component = getComponentByClassName(shoelaceCem, "SlAlert");

    // Assert
    expect(component?.modulePath).toBe(
      "dist/components/alert/alert.component.js"
    );
    expect(component?.typeDefinitionPath).toBe(
      "dist/components/alert/alert.component.d.ts"
    );
    expect(component?.definitionPath).toBe("dist/components/alert/alert.js");
  });
});

describe("getComponentByTagName", () => {
  test("should return icon component from `guiCem`", () => {
    // Arrange

    // Act
    const component = getComponentByTagName(guiCem, "gui-icon");

    // Assert
    expect(component).toBeDefined();
  });

  test("should return `undefined` when component is not found", () => {
    // Arrange

    // Act
    const component = getComponentByTagName(guiCem, "gui-icon2");

    // Assert
    expect(component).toBeUndefined();
  });

  test("should return icon component from `shoelaceCem`", () => {
    // Arrange

    // Act
    const component = getComponentByTagName(shoelaceCem, "sl-icon");

    // Assert
    expect(component).toBeDefined();
  });

  test("should return `undefined` when component is not found", () => {
    // Arrange

    // Act
    const component = getComponentByTagName(shoelaceCem, "sl-icon2");

    // Assert
    expect(component).toBeUndefined();
  });
});

describe("getComponentPublicProperties", () => {
  test("should return 2 public properties for `GuiIcon`", () => {
    // Arrange
    const component = getComponentByClassName(guiCem, "GuiIcon");

    // Act
    const props = getComponentPublicProperties(component!);

    // Assert
    expect(props.length).toEqual(2);
  });
});

describe("getPublicMethods", () => {
  test("should return 2 public methods for `SlAlert`", () => {
    // Arrange
    const component = getComponentByClassName(shoelaceCem, "SlAlert");

    // Act
    const methods = getComponentPublicMethods(component!);

    // Assert
    expect(methods.length).toEqual(5);
  });

  test("should omit the return clause when the manifest records no return type", () => {
    // Arrange
    const component = getComponentByClassName(shoelaceCem, "SlButton");

    // Act
    const methods = getComponentPublicMethods(component!);
    const validityEvent = methods.find((m) => m.name === "setCustomValidity");

    // Assert
    expect(validityEvent?.type.text).toEqual("setCustomValidity(message: string)");
  });
});

describe("getters do not mutate their input", () => {
  const component = {
    name: "X",
    tagName: "x-y",
    customElement: true as const,
    members: [
      {
        kind: "method",
        name: "focus",
        privacy: "public",
        return: { type: { text: "void" } },
      },
      {
        kind: "field",
        name: "size",
        privacy: "public",
        type: { text: "Size" },
        parsedType: { text: "'sm' | 'lg'" },
      },
    ],
  } as unknown as Component;

  test("getComponentPublicMethods leaves the input untouched and derives the signature on a copy", () => {
    // Arrange
    const before = structuredClone(component);

    // Act
    const methods = getComponentPublicMethods(component);

    // Assert
    expect(component).toEqual(before);
    expect(methods[0]?.type.text).toBe("focus() => void");
  });

  test("getComponentPublicProperties leaves the input untouched and applies `altType` on a copy", () => {
    // Arrange
    const before = structuredClone(component);

    // Act
    const props = getComponentPublicProperties(component, "parsedType");

    // Assert
    expect(component).toEqual(before);
    expect(props[0]?.type?.text).toBe("'sm' | 'lg'");
  });

  test("getAllComponents leaves the manifest untouched and resolves module paths on copies", () => {
    // Arrange
    const before = structuredClone(shoelaceCem);

    // Act
    const components = getAllComponents(shoelaceCem);
    const alert = components.find((c) => c.name === "SlAlert");

    // Assert
    expect(shoelaceCem).toEqual(before);
    expect(alert?.modulePath).toBe(
      "dist/components/alert/alert.component.js"
    );
    expect(alert?.typeDefinitionPath).toBe(
      "dist/components/alert/alert.component.d.ts"
    );
  });
});

describe("getComponentEventsWithType", () => {
  test("should return 4 events for `SlAlert`", () => {
    // Arrange
    const component = getComponentByClassName(shoelaceCem, "SlAlert");

    // Act
    const events = getComponentEventsWithType(component!);

    // Assert
    expect(events.length).toEqual(4);
    expect(events[0].type.text).toEqual("CustomEvent<SlShowType>");
    expect(events[1].type.text).toEqual("CustomEvent");
  });

  test("should override event names for `SlAlert`", () => {
    // Arrange
    const component = getComponentByClassName(shoelaceCem, "SlAlert");

    // Act
    const events = getComponentEventsWithType(component!, {
      overrideCustomEventType: true,
    });

    // Assert
    expect(events[0].type.text).toEqual("SlShowType");
    expect(events[1].type.text).toEqual("CustomEvent");
  });

  test("should override event type for `SlAlert`", () => {
    // Arrange
    const component = getComponentByClassName(shoelaceCem, "SlAlert");

    // Act
    const events = getComponentEventsWithType(component!, {
      customEventDetailTypePropName: "parsedType",
    });

    // Assert
    expect(events[1].type.text).toEqual(
      "CustomEvent<'value 1' | 'value 2' | 'value 3' | 'value 4'>"
    );
  });
});

describe("getCustomEventDetailTypes", () => {
  test("should return 2 custom event detail types for `SlAlert`", () => {
    // Arrange
    const component = getComponentByClassName(shoelaceCem, "SlAlert");

    // Act
    const eventTypes = getCustomEventDetailTypes(component!);

    // Assert
    expect(eventTypes?.length).toEqual(2);
  });
});

describe("preferParsedLiteralUnion", () => {
  test("should prefer `parsedType` when it is a union of quoted string literals", () => {
    // Arrange
    const member = {
      type: { text: "ZdControlSize" },
      parsedType: { text: "'default' | 'small'" },
    };

    // Act
    const result = preferParsedLiteralUnion(member);

    // Assert
    expect(result).toBe("'default' | 'small'");
  });

  test("should return `undefined` for boolean literal unions", () => {
    // Arrange
    const member = {
      type: { text: "boolean | undefined" },
      parsedType: { text: "false | true | undefined" },
    };

    // Act
    const result = preferParsedLiteralUnion(member);

    // Assert
    expect(result).toBeUndefined();
  });

  test("should return `undefined` when `parsedType` is a named type", () => {
    // Arrange
    const member = {
      type: { text: "Mode" },
      parsedType: { text: "Mode" },
    };

    // Act
    const result = preferParsedLiteralUnion(member);

    // Assert
    expect(result).toBeUndefined();
  });

  test("should return `undefined` when `parsedType` is missing", () => {
    // Arrange
    const member = { type: { text: "string" } };

    // Act
    const result = preferParsedLiteralUnion(member);

    // Assert
    expect(result).toBeUndefined();
  });
});

describe("privacy predicate", () => {
  const component = {
    name: "X",
    tagName: "x-y",
    customElement: true as const,
    members: [
      {
        kind: "field",
        name: "size",
        privacy: "public",
        type: { text: "string" },
      },
      {
        kind: "field",
        name: "_internalState",
        privacy: "public",
        type: { text: "string" },
      },
      {
        kind: "method",
        name: "_internalMethod",
        privacy: "public",
      },
      {
        kind: "method",
        name: "staticMethod",
        privacy: "public",
        static: true,
      },
      {
        kind: "field",
        name: "staticField",
        privacy: "public",
        static: true,
        type: { text: "string" },
      },
    ],
  } as unknown as Component;

  test("should treat `#`-prefixed names as private by default", () => {
    // Arrange
    const hashed = {
      kind: "field",
      name: "#hidden",
      privacy: "public",
    };

    // Act
    const result = isPrivateMember(hashed);

    // Assert
    expect(result).toBe(true);
  });

  test("should treat `private` privacy as private by default", () => {
    // Arrange
    const member = { kind: "field", name: "x", privacy: "private" };

    // Act
    const result = isPrivateMember(member);

    // Assert
    expect(result).toBe(true);
  });

  test("a custom predicate can exclude `_`-prefixed members from properties", () => {
    // Arrange
    const isPrivate = (m: unknown) =>
      isPrivateMember(m) ||
      (m as { name?: string })?.name?.startsWith("_") === true;

    // Act
    const props = getComponentPublicProperties(component, undefined, isPrivate);

    // Assert
    expect(props.map((p) => p.name)).toEqual(["size"]);
  });

  test("a custom predicate can exclude `_`-prefixed members from methods", () => {
    // Arrange
    const isPrivate = (m: unknown) =>
      isPrivateMember(m) ||
      (m as { name?: string })?.name?.startsWith("_") === true;

    // Act
    const methods = getComponentPublicMethods(component, isPrivate);

    // Assert
    expect(methods.map((m) => m.name)).toEqual([]);
  });

  test("static methods are excluded from the public methods list", () => {
    // Arrange
    const component = {
      name: "X",
      tagName: "x-y",
      customElement: true as const,
      members: [
        {
          kind: "method",
          name: "instanceMethod",
          privacy: "public",
        },
        {
          kind: "method",
          name: "staticMethod",
          privacy: "public",
          static: true,
        },
      ],
    } as unknown as Component;

    // Act
    const methods = getComponentPublicMethods(component);

    // Assert
    expect(methods.map((m) => m.name)).toEqual(["instanceMethod"]);
  });

  test("static fields are excluded from the public properties list", () => {
    // Arrange
    const component = {
      name: "X",
      tagName: "x-y",
      customElement: true as const,
      members: [
        {
          kind: "field",
          name: "instanceField",
          privacy: "public",
          type: { text: "string" },
        },
        {
          kind: "field",
          name: "staticField",
          privacy: "public",
          static: true,
          type: { text: "string" },
        },
      ],
    } as unknown as Component;

    // Act
    const props = getComponentPublicProperties(component);

    // Assert
    expect(props.map((p) => p.name)).toEqual(["instanceField"]);
  });
});
