---
"@wc-toolkit/cem-utilities": patch
---

Fix three defects in the description helpers:

- `deepMerge` is now pure (it no longer mutates its arguments), and `getComponentDetailsTemplate` no longer corrupts the exported `defaultDescriptionOptions` singleton or duplicates sections on repeated calls. A caller-supplied `order` now replaces the default outright.
- `altType` can now be disabled (`false`) or resolved per member via a function, in addition to the existing string preference. The `"parsedType"` default is unchanged.
- `getComponentPublicMethods`, `getComponentPublicProperties`, and `getApiByOrderOption` no longer mutate the component/manifest they are handed; derived types are applied to copies.
