import { describe, expect, test } from "vitest";
import {
  getComponentDetailsTemplate,
  getMemberDescription,
  getAttrsAndProps,
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

    expect(result.includes("### Attributes & Properties")).toBeTruthy();
    expect(
      result.includes("- `sl-show`: Emitted when the alert opens.")
    ).toBeTruthy();
    expect(
      result.includes("- `show() => void`: Shows the alert.")
    ).toBeTruthy();
    expect(
      result.includes("- `(default)`: The alert's main content.")
    ).toBeTruthy();
    expect(result.includes("### CSS States")).toBeFalsy();
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
