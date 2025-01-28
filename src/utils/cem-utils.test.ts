import { describe, expect, test } from "vitest";
import {
  getAllComponents,
  getComponentByClassName,
  getComponentByTagName,
  getComponentEventsWithType,
  getComponentPublicMethods,
  getComponentPublicProperties,
  getCustomEventDetailTypes,
} from "./cem-utils";
import { shoelaceCem } from "./__MOCKS__/shoelace-cem";
import { guiCem } from "./__MOCKS__/gui-cem";

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
    expect(events[1].type.text).toEqual("CustomEvent<'value 1' | 'value 2' | 'value 3' | 'value 4'>");
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