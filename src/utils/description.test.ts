import { describe, expect, test } from "vitest";
import {
  getComponentDetailsTemplate,
  getMemberDescription,
  getAttrsAndProps,
  defaultDescriptionOptions,
} from "./description";
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
      order: ["attrsAndProps"],
      apis: {
        attrsAndProps: {
          heading: "A&P",
          template: (rows: unknown[]) => rows.length + " rows",
        },
      },
    };

    // Act
    const results = [1, 2, 3].map(() =>
      getComponentDetailsTemplate(component, options),
    );

    // Assert
    expect(defaultDescriptionOptions.order.length).toEqual(7);
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
      description: "d",
      events: [{ name: "change", type: { text: "Event" } }],
    };

    // Act
    const result = getComponentDetailsTemplate(component, {
      order: ["events"],
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
