/**
 * Removes quote wrappers from a string (single or double quotes) 
 * (ex: "my-component" from "'my-component'")
 * @param value
 * @returns {string}
 */
export function removeQuotes(value: string) {
  return value.trim().replace(/^["'](.+(?=["']$))["']$/, "$1");
}

/**
 * Convert a string to kebab-case 
 * (ex: "my-component" from "MyComponent")
 * @param value 
 * @returns {string}
 */
export const toKebabCase = (value: string): string =>
  value.replace(/([a-z0–9])([A-Z])/g, "$1-$2").toLowerCase();

/**
 * Convert a string to sentence case
 * (ex: "My component" from "myComponent")
 * @param value
 * @returns {string}
 */
export function toSentenceCase(value: string) {
  return (
    value
      // Look for long acronyms and filter out the last letter
      .replace(/([A-Z]+)([A-Z][a-z])/g, " $1 $2")
      // Look for lower-case letters followed by upper-case letters
      .replace(/([a-z\d])([A-Z])/g, "$1 $2")
      // Look for lower-case letters followed by numbers
      .replace(/([a-zA-Z])(\d)/g, "$1 $2")
      .replace(/^./, (str) => str.toUpperCase())
      // Remove any white space left around the word
      .trim()
  );
}

/**
 * Convert a string to pascal case
 * (ex: "MyComponent" from "my-component")
 * @param value
 * @returns {string}
 */
export function toPascalCase(value: string) {
  return value
    .replace(new RegExp(/[-_]+/, "g"), " ")
    .replace(new RegExp(/[^\w\s]/, "g"), "")
    .replace(
      new RegExp(/\s+(.)(\w*)/, "g"),
      ($1, $2, $3) => `${$2.toUpperCase() + $3}`,
    )
    .replace(new RegExp(/\w/), (s) => s.toUpperCase());
}

/**
 * Convert a string to camel case
 * (ex: "myComponent" from "my-component")
 * @param value
 * @returns {string}
 */
export function toCamelCase(value: string = "") {
  const arr = value.split("-");
  const capital = arr?.map((item, index) =>
    index
      ? item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()
      : item.toLowerCase(),
  );
  return capital?.join("") || "";
}
