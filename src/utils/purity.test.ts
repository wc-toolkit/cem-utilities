import { describe, expect, test } from "vitest";
import { guiCem } from "./__MOCKS__/gui-cem" with { type: "json" };
import { shoelaceCem } from "./__MOCKS__/shoelace-cem" with { type: "json" };
import {
  getAllComponents,
  getAllMixins,
  getComponentByClassName,
  getComponentByTagName,
  getComponentEventsWithType,
  getComponentPublicMethods,
  getComponentPublicProperties,
  getCustomEventDetailTypes,
} from "./cem-utils";
import {
  getApiByOrderOption,
  getAttrsAndProps,
  getComponentDetailsTemplate,
  getMainComponentDescription,
  getPropertyOnlyFields,
} from "./description";
import type { ApiOrderOption } from "./description";
import type { Component } from "./types";

const ORDER_OPTIONS: ApiOrderOption[] = [
  "attributes",
  "properties",
  "attrsAndProps",
  "propsOnly",
  "events",
  "methods",
  "slots",
  "cssProps",
  "cssParts",
  "cssState",
];

function exerciseEveryGetter(manifest: unknown) {
  const components = getAllComponents(manifest);

  getAllMixins(manifest);
  getComponentByClassName(manifest, components[0]?.name);
  getComponentByTagName(manifest, components[0]?.tagName);

  components.forEach((component) => {
    getComponentPublicProperties(component);
    getComponentPublicProperties(component, "parsedType");
    getComponentPublicProperties(component, false);
    getComponentPublicMethods(component);
    getComponentEventsWithType(component);
    getCustomEventDetailTypes(component);
    getAttrsAndProps(component);
    getAttrsAndProps(component, { partition: true });
    getPropertyOnlyFields(component);
    getMainComponentDescription(component);
    getComponentDetailsTemplate(component);
    getComponentDetailsTemplate(component, { inherited: "separate" });
    getComponentDetailsTemplate(component, { inherited: "omit" });
    ORDER_OPTIONS.forEach((api) => getApiByOrderOption(component, api));
  });
}

describe("every exported getter leaves its input untouched", () => {
  test("`guiCem` is not mutated by any getter", () => {
    // Arrange
    const input = structuredClone(guiCem) as Component;
    const before = structuredClone(input);

    // Act
    exerciseEveryGetter(input);

    // Assert
    expect(input).toEqual(before);
  });

  test("`shoelaceCem` is not mutated by any getter", () => {
    // Arrange
    const input = structuredClone(shoelaceCem) as Component;
    const before = structuredClone(input);

    // Act
    exerciseEveryGetter(input);

    // Assert
    expect(input).toEqual(before);
  });
});
