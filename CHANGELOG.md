# @wc-toolkit/cem-utilities

## 1.5.4

### Patch Changes

- b9becd2: Fixed logic for fetching getting components to exclude those elements without tags

## 1.5.3

### Patch Changes

- 8fdeb88: Fixed issue when no modules exist in CEM for descriptions

## 1.5.2

### Patch Changes

- 37cd61e: Fixed componenent definition export updater

## 1.5.1

### Patch Changes

- e75edf1: Simplified the logic for getting the attribute and property names

## 1.5.0

### Minor Changes

- f6f0971: Added `Types` section to descriptions for attributes, prperties, and events

### Patch Changes

- f6f0971: Undeprecated the `altType` property

## 1.4.1

### Patch Changes

- 3e2a346: Fix CommonJS imports

## 1.4.0

### Minor Changes

- 918d073: Added new `sectionHeadingLevel` configuration option to control the API section heading levels

### Patch Changes

- 918d073: Deprecated `altType` config option as it doesn't do anything. this will be removed in the next major release.

## 1.3.0

### Minor Changes

- 9a8c54d: Make parameters for utility functions optional
- e77366a: Add "readonly" tag to property descriptions

## 1.2.0

### Minor Changes

- a08d4e2: Added module paths to Component object for easier access
- 6a62963: Added caching for better performance

## 1.1.0

### Minor Changes

- 3c97cf0: Added funtions for getting mixins

## 1.0.2

### Patch Changes

- 8dc12a4: Fixed returned type from `getComponentEventsWithType` when the CEM type is `CustomEvent`

## 1.0.1

### Patch Changes

- 6be9bfd: Fixed publish pipeline

## 1.0.0

### Major Changes

- 85a83b8: Initial release
