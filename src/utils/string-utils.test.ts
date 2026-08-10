import { describe, expect, test } from "vitest";
import {
  removeQuotes,
  toKebabCase,
  toPascalCase,
  escapeTableCell,
  createMarkdownTable,
  getFirstSentence,
} from "./string-utils.js";

describe("toKebabCase", () => {
  test("given a string in Pascal case, it should convert it kebab case", () => {
    // Arrange
    const input = "TestExample";

    // Act
    const result = toKebabCase(input);

    // Assert
    expect(result).toBe("test-example");
  });

  test("given a string in camel case, it should convert it kebab case", () => {
    // Arrange
    const input = "testExample";

    // Act
    const result = toKebabCase(input);

    // Assert
    expect(result).toBe("test-example");
  });
});

describe("removeQuoteWrappers", () => {
  test("given a string with an apostrophe wrapper, it should remove the apostrophes", () => {
    // Arrange
    const input = `'Test'`;

    // Act
    const result = removeQuotes(input);

    // Assert
    expect(result).toBe("Test");
  });

  test("given a string with an quote wrapper, it should remove the quotes", () => {
    // Arrange
    const input = `"Test"`;

    // Act
    const result = removeQuotes(input);

    // Assert
    expect(result).toBe("Test");
  });

  test("given a string with a quote wrapper and an apostrophe within it, it should remove the wrapper but leave the apostrophe", () => {
    // Arrange
    const input = `"Can't"`;

    // Act
    const result = removeQuotes(input);

    // Assert
    expect(result).toBe("Can't");
  });
});

describe("toPascalCase", () => {
  test("given a string in kebab case, it should convert it to pascal case", () => {
    // Arrange
    const input = "test-example";

    // Act
    const result = toPascalCase(input);

    // Assert
    expect(result).toBe("TestExample");
  });

  test("given a string in snake case, it should convert it to pascal case", () => {
    // Arrange
    const input = "test_example";

    // Act
    const result = toPascalCase(input);

    // Assert
    expect(result).toBe("TestExample");
  });

  test("given a string in with spaces, it should convert it pascal case", () => {
    // Arrange
    const input = "test example";

    // Act
    const result = toPascalCase(input);

    // Assert
    expect(result).toBe("TestExample");
  });
});

describe("escapeTableCell", () => {
  test("should escape pipe characters", () => {
    // Arrange
    const input = "'a' | 'b'";

    // Act
    const result = escapeTableCell(input);

    // Assert
    expect(result).toBe("'a' \\| 'b'");
  });

  test("should flatten newlines", () => {
    // Arrange
    const input = "line one\nline two";

    // Act
    const result = escapeTableCell(input);

    // Assert
    expect(result).toBe("line one<br>line two");
  });

  test("should leave plain text untouched", () => {
    // Arrange
    const input = "a plain description";

    // Act
    const result = escapeTableCell(input);

    // Assert
    expect(result).toBe("a plain description");
  });
});

describe("createMarkdownTable", () => {
  test("should render headers, a divider, and escaped rows", () => {
    // Arrange
    const headers = ["Name", "Type", "Description"];
    const rows = [
      ["size", "'sm' | 'lg'", "The size."],
      ["label", "string", "Line one\nLine two"],
    ];

    // Act
    const result = createMarkdownTable(headers, rows);

    // Assert
    expect(result).toBe(
      [
        "| Name | Type | Description |",
        "| --- | --- | --- |",
        "| size | 'sm' \\| 'lg' | The size. |",
        "| label | string | Line one<br>Line two |",
      ].join("\n")
    );
  });

  test("should render a table with headers only when there are no rows", () => {
    // Arrange
    const headers = ["Name"];

    // Act
    const result = createMarkdownTable(headers, []);

    // Assert
    expect(result).toBe("| Name |\n| --- |");
  });
});

describe("getFirstSentence", () => {
  test("should return the first sentence of a longer string", () => {
    // Arrange
    const input = "Shows the alert. This will also do something else.";

    // Act
    const result = getFirstSentence(input);

    // Assert
    expect(result).toBe("Shows the alert.");
  });

  test("should respect the length cap and add an ellipsis", () => {
    // Arrange
    const input = "This is a very long sentence that will be truncated.";

    // Act
    const result = getFirstSentence(input, 20);

    // Assert
    expect(result).toBe("This is a very lo...");
  });

  test("should not split on decimals", () => {
    // Arrange
    const input = "Version 2.0 of the component is out. Use it.";

    // Act
    const result = getFirstSentence(input);

    // Assert
    expect(result).toBe("Version 2.0 of the component is out.");
  });

  test("should return the whole string when there is no sentence boundary", () => {
    // Arrange
    const input = "A single sentence without punctuation";

    // Act
    const result = getFirstSentence(input);

    // Assert
    expect(result).toBe("A single sentence without punctuation");
  });
});
