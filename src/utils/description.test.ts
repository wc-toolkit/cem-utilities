import { describe, expect, test } from "vitest";
import {
  getComponentDetailsTemplate,
  getMemberDescription,
  getAttrsAndProps,
  defaultDescriptionOptions,
} from "./description";
import type { ApiOrderOption } from "./description";
import { shoelaceCem } from "./__MOCKS__/shoelace-cem" with { type: "json" };
import { getComponentByClassName } from "./cem-utils";

describe("getComponentDetailsTemplate", () => {
  test("should return a string with component details", () => {
    // Arrange
    const alert = getComponentByClassName(shoelaceCem, "SlAlert");

    // Act
    const result = getComponentDetailsTemplate(alert);

    // Assert


    expect(result.includes('## Attributes & Properties')).toBeTruthy();
    expect(result.includes('- `sl-show`: Emitted when the alert opens.')).toBeTruthy();
    expect(result.includes('- `show() => void`: Shows the alert.')).toBeTruthy();
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
