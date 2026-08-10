<div align="center">
  
![workbench with tools, html, css, javascript, and object logos](https://raw.githubusercontent.com/wc-toolkit/cem-utilities/refs/heads/main/assets/wc-toolkit_json.svg)

</div>

# CEM Utilities

These are a set of tools of retrieving and transforming data from the [Custom Elements Manifest](https://github.com/webcomponents/custom-elements-manifest).

The following docs serve as a quick reference guide to the features of the library. To find out more about these tools, be sure to check out the [official docs](https://wc-toolkit.com/cem-utilities/overview/).

## CEM Utility Functions

You can find more details on these functions [here](https://wc-toolkit.com/cem-utilities/cem-utils/).

- `getAllComponents` - Gets a list of all components from a Custom Elements Manifest object
- `getComponentByClassName` - Gets a component from a CEM object based on the class name
- `getComponentByTagName` - Gets a component from a CEM object based on the tag name
- `getComponentPublicProperties` - Gets a list of public properties from a CEM component
- `getComponentPublicMethods` - Get all public methods for a component
- `getComponentEventsWithType` - Get all events for a component with the complete event type
- `getCustomEventDetailTypes` - Gets a list of event detail types for a given component.

## Deep Merge

You can find more details on these functions [here](https://wc-toolkit.com/cem-utilities/deep-merge/).

- `deepMerge` - a simple utility for merging two objects together.

## Component Descriptions

You can find more details on these functions [here](https://wc-toolkit.com/cem-utilities/descriptions/).

- `getComponentDetailsTemplate` - returns a formatted string with the details of the various APIs of a custom element.
- `getMainComponentDescription` - returns the component's primary description
- `getAttrsAndProps` - returns an array of `AttributeAndProperty` objects that contain the attributes and public properties (including those not associated with an attribute) for a component. Pass `{ partition: true }` to split the result into own and inherited members.
- `getPropertyOnlyFields` - returns a list of properties that do not have a corresponding attribute.
- `getMemberDescription` - returns a description for a member of a component with any relevant deprecation information.
- `partitionByInherited` - partitions a list of members into own and inherited buckets based on the presence of an `inheritedFrom` reference.

## String Utilities

You can find more details on these functions [here](https://wc-toolkit.com/cem-utilities/string-utils/).

- `removeQuotes` - removes single or double quotes that wrap a string
- `toKebabCase` - converts a string to kebab-case.
- `toSentenceCase` - converts a string to sentence-case.
- `toPascalCase` - converts a string to pascal-case.
- `toCamelCase` - converts a string to camel-case.
- `escapeTableCell` - escapes a string for safe use as a single Markdown table cell.
- `createMarkdownTable` - creates a Markdown table from headers and rows.
- `getFirstSentence` - extracts the first sentence from a string, capped at a maximum length.
