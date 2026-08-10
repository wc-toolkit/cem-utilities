import { describe, expect, test } from "vitest";
import {
  getComponentDetailsTemplate,
  getMemberDescription,
  getAttrsAndProps,
  getApiByOrderOption,
  defaultDescriptionOptions,
  partitionByInherited,
} from "./description";
import type { ApiOrderOption } from "./description";
import { shoelaceCem } from "./__MOCKS__/shoelace-cem" with { type: "json" };
import { getComponentByClassName } from "./cem-utils";
import type { Attribute, Component } from "./types";

describe("getComponentDetailsTemplate", () => {
  test("should return a string with component details", () => {
    // Arrange
    const alert = getComponentByClassName(shoelaceCem, "SlAlert");

    // Act
    const result = getComponentDetailsTemplate(alert);

    // Assert


    expect(result.includes('## Attributes & Properties')).toBeTruthy();
    expect(result.includes('- `sl-show`: Emitted when the alert opens.')).toBeTruthy();
    expect(result.includes('- `show()`: Shows the alert.')).toBeTruthy();
    expect(result.includes('- `(default)`: The alert\'s main content.')).toBeTruthy();
    expect(result.includes('## CSS States')).toBeFalsy();
  });

  test("should not mutate `defaultDescriptionOptions` or duplicate sections across calls", () => {
    // Arrange
    const component = {
      name: "X",
      tagName: "x-y",
      customElement: true as const,
      description: "d",
      attributes: [
        {
          name: "a",
          fieldName: "a",
          type: { text: "boolean" },
          description: "A",
        },
      ],
    };
    const options = {
      order: ["attrsAndProps"] as ApiOrderOption[],
      apis: {
        attrsAndProps: {
          heading: "A&P",
          template: (rows?: unknown[]) => String(rows?.length ?? 0) + " rows",
        },
      },
    };

    // Act
    const results = [1, 2, 3].map(() =>
      getComponentDetailsTemplate(component, options),
    );

    // Assert
    expect(defaultDescriptionOptions.order?.length).toEqual(7);
    results.forEach((result) => {
      expect(result).toEqual(results[0]);
      expect((result.match(/## A&P/g) || []).length).toEqual(1);
    });
  });

  test("should render only the sections listed in a caller-supplied `order`", () => {
    // Arrange
    const component = {
      name: "X",
      tagName: "x-y",
      customElement: true as const,
      description: "d",
      events: [{ name: "change", type: { text: "Event" } }],
    };

    // Act
    const result = getComponentDetailsTemplate(component, {
      order: ["events"] as ApiOrderOption[],
    });

    // Assert
    expect((result.match(/## Events/g) || []).length).toEqual(1);
    expect(result.includes("## Attributes & Properties")).toBeFalsy();
    expect(result.includes("## Methods")).toBeFalsy();
    expect(result.includes("## Slots")).toBeFalsy();
  });

  test("should not mutate the component it renders", () => {
    // Arrange
    const component = {
      name: "X",
      tagName: "x-y",
      customElement: true as const,
      description: "d",
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
    const before = structuredClone(component);

    // Act
    getComponentDetailsTemplate(component, {
      order: ["methods", "properties"] as ApiOrderOption[],
    });

    // Assert
    expect(component).toEqual(before);
  });
});

describe("getAttrsAndProps", () => {
  const alert = getComponentByClassName(shoelaceCem, "SlAlert");

  test("should return an empty array when no attributes or properties exist", () => {
    // Arrange

    // Act
    const result = getAttrsAndProps(alert);

    // Assert
    expect(result.length).toEqual(7);
  });
});

describe("altType", () => {
  const component = {
    name: "X",
    tagName: "x-y",
    customElement: true as const,
    description: "d",
    attributes: [
      {
        name: "fluid",
        fieldName: "fluid",
        type: { text: "boolean | undefined" },
        parsedType: { text: "false | true | undefined" },
      },
      {
        name: "mode",
        fieldName: "mode",
        type: { text: "Mode" },
        parsedType: { text: "'sm' | 'lg'" },
      },
    ],
  };

  const isLiteralUnion = (member: unknown) =>
    /^'.+'( \| '.+')+$/.test(
      (member as { parsedType?: { text?: string } }).parsedType?.text ?? ""
    );

  test("defaults to `parsedType`", () => {
    const result = getAttrsAndProps(component);
    const fluid = result.find((a) => a.propName === "fluid");

    expect(fluid?.type?.text).toBe("false | true | undefined");
  });

  test("`false` disables `altType` and always uses `type`", () => {
    const result = getAttrsAndProps(component, false);
    const fluid = result.find((a) => a.propName === "fluid");

    expect(fluid?.type?.text).toBe("boolean | undefined");
  });

  test("a function resolves the type per member", () => {
    const result = getAttrsAndProps(component, (member) =>
      isLiteralUnion(member)
        ? (member as { parsedType?: { text?: string } }).parsedType?.text
        : undefined
    );

    const fluid = result.find((a) => a.propName === "fluid");
    const mode = result.find((a) => a.propName === "mode");

    expect(fluid?.type?.text).toBe("boolean | undefined");
    expect(mode?.type?.text).toBe("'sm' | 'lg'");
  });

  test("`getComponentDetailsTemplate` threads `options.altType` through", () => {
    const byDefault = getComponentDetailsTemplate(component, {
      order: ["attrsAndProps"] as ApiOrderOption[],
    });
    expect(byDefault).toContain("false | true | undefined");

    const disabled = getComponentDetailsTemplate(component, {
      order: ["attrsAndProps"] as ApiOrderOption[],
      altType: false,
    });
    expect(disabled).toContain("boolean | undefined");
    expect(disabled).not.toContain("false | true | undefined");

    const perMember = getComponentDetailsTemplate(component, {
      order: ["attrsAndProps"] as ApiOrderOption[],
      altType: (member) =>
        isLiteralUnion(member)
          ? (member as { parsedType?: { text?: string } }).parsedType?.text
          : undefined,
    });
    expect(perMember).toContain("boolean | undefined");
    expect(perMember).toContain("'sm' | 'lg'");
  });

  test("`getApiByOrderOption` `attributes` branch leaves the input untouched", () => {
    // Arrange
    const component = {
      name: "X",
      tagName: "x-y",
      customElement: true as const,
      attributes: [
        {
          name: "fluid",
          fieldName: "fluid",
          type: { text: "boolean | undefined" },
          parsedType: { text: "false | true | undefined" },
        },
      ],
    };
    const before = structuredClone(component);

    // Act
    const attrs = getApiByOrderOption(component, "attributes", "parsedType");

    // Assert
    expect(component).toEqual(before);
    expect((attrs as Attribute[])[0]?.type?.text).toBe(
      "false | true | undefined"
    );
  });
});

describe("getMemberDescription", () => {
  test("should return a string without `@deprecated` tag", () => {
    // Arrange
    const input = "Test description";

    // Act
    const result = getMemberDescription(input);

    // Assert
    expect(result).toBe("Test description");
  });

  test("should return a string with `@deprecated` tag when `deprecated is `true`", () => {
    // Arrange
    const input = "Test description";

    // Act
    const result = getMemberDescription(input, true);

    // Assert
    expect(result).toBe("@deprecated - Test description");
  });

  test("should return the deprecation string and tag when `deprecated is string", () => {
    // Arrange
    const input = "Test description";

    // Act
    const result = getMemberDescription(input, "Deprecation message");

    // Assert
    expect(result).toBe("@deprecated Deprecation message - Test description");
  });
});

describe("inherited member partitioning", () => {
  const component = {
    name: "X",
    tagName: "x-y",
    customElement: true as const,
    description: "d",
    attributes: [
      {
        name: "inherited-attr",
        fieldName: "inheritedAttr",
        type: { text: "string" },
        inheritedFrom: { name: "BaseClass", module: "base.js" },
      },
      {
        name: "own-attr",
        fieldName: "ownAttr",
        type: { text: "boolean" },
      },
    ],
    members: [
      {
        kind: "field",
        name: "inheritedAttr",
        type: { text: "string" },
        inheritedFrom: { name: "BaseClass", module: "base.js" },
      },
      {
        kind: "field",
        name: "ownProp",
        type: { text: "number" },
      },
    ],
  } as unknown as Component;

  test("`partitionByInherited` splits rows into own and inherited buckets in their original order", () => {
    // Arrange
    const rows = [
      { name: "a", inheritedFrom: { name: "Base" } },
      { name: "b" },
      { name: "c", inheritedFrom: { name: "Base" } },
    ];

    // Act
    const result = partitionByInherited(rows);

    // Assert
    expect(result.own.map((r) => r.name)).toEqual(["b"]);
    expect(result.inherited.map((r) => r.name)).toEqual(["a", "c"]);
  });

  test("`getAttrsAndProps` returns a flat list by default", () => {
    // Act
    const result = getAttrsAndProps(component);

    // Assert
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toEqual(3);
  });

  test("`getAttrsAndProps` partitions when `partition: true`", () => {
    // Act
    const result = getAttrsAndProps(component, { partition: true });

    // Assert
    expect(result.own.map((r) => r.propName)).toEqual(["ownAttr", "ownProp"]);
    expect(result.inherited.map((r) => r.propName)).toEqual([
      "inheritedAttr",
    ]);
  });

  test("`getAttrsAndProps` accepts an options object with `altType`", () => {
    // Act
    const result = getAttrsAndProps(component, { altType: false });

    // Assert
    expect(Array.isArray(result)).toBe(true);
  });

  test("`getComponentDetailsTemplate` mixes inherited members in by default", () => {
    // Act
    const result = getComponentDetailsTemplate(component, {
      order: ["attrsAndProps"] as ApiOrderOption[],
      apis: {
        attrsAndProps: {
          heading: "A&P",
          template: (rows?: unknown[]) =>
            (rows as Array<{ propName?: string }>)
              ?.map((row) => row.propName)
              .join(", ") ?? "",
        },
      },
    });

    // Assert
    expect(result).toContain("inheritedAttr, ownAttr, ownProp");
    expect(result).not.toContain("Inherited A&P");
  });

  test("`inherited: 'omit'` excludes inherited members from the rendered output", () => {
    // Act
    const result = getComponentDetailsTemplate(component, {
      order: ["attrsAndProps"] as ApiOrderOption[],
      inherited: "omit",
      apis: {
        attrsAndProps: {
          heading: "A&P",
          template: (rows?: unknown[]) =>
            (rows as Array<{ propName?: string }>)
              ?.map((row) => row.propName)
              .join(", ") ?? "",
        },
      },
    });

    // Assert
    expect(result).toContain("ownAttr, ownProp");
    expect(result).not.toContain("inheritedAttr");
  });

  test("`inherited: 'separate'` renders own members first and inherited members under their own heading", () => {
    // Act
    const result = getComponentDetailsTemplate(component, {
      order: ["attrsAndProps"] as ApiOrderOption[],
      inherited: "separate",
      apis: {
        attrsAndProps: {
          heading: "A&P",
          template: (rows?: unknown[]) =>
            (rows as Array<{ propName?: string }>)
              ?.map((row) => row.propName)
              .join(", ") ?? "",
        },
      },
    });

    // Assert
    expect(result).toContain("## A&P");
    expect(result).toContain("## Inherited A&P");
    expect(result.indexOf("ownAttr")).toBeLessThan(
      result.indexOf("Inherited A&P")
    );
    expect(result.slice(result.indexOf("## Inherited A&P"))).toContain(
      "inheritedAttr"
    );
  });

  test("`inherited: 'separate'` skips the own heading when only inherited members exist", () => {
    // Arrange
    const allInherited = {
      ...component,
      attributes: [
        {
          name: "inherited-attr",
          fieldName: "inheritedAttr",
          type: { text: "string" },
          inheritedFrom: { name: "BaseClass", module: "base.js" },
        },
      ],
      members: [],
    } as unknown as Component;

    // Act
    const result = getComponentDetailsTemplate(allInherited, {
      order: ["attrsAndProps"] as ApiOrderOption[],
      inherited: "separate",
      apis: {
        attrsAndProps: {
          heading: "A&P",
          template: (rows?: unknown[]) =>
            (rows as Array<{ propName?: string }>)
              ?.map((row) => row.propName)
              .join(", ") ?? "",
        },
      },
    });

    // Assert
    expect(result).not.toContain("## A&P");
    expect(result).toContain("## Inherited A&P");
  });
});
