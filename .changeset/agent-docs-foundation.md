---
"@wc-toolkit/cem-utilities": minor
---

Agent-facing documentation foundation:

- `getAttrsAndProps` now accepts an options object (`{ altType, partition }`). With `partition: true` it returns `{ own, inherited }` buckets instead of a flat list. The positional `altType` argument is unchanged and still works.
- `getComponentDetailsTemplate` supports `inherited: 'inline' | 'separate' | 'omit'` to render inherited members inline (default, unchanged), under their own "Inherited" heading, or not at all.
- New `partitionByInherited` helper for partitioning any member list by `inheritedFrom`.
- New markdown primitives in `string-utils`: `escapeTableCell` (pipe escaping and newline flattening), `createMarkdownTable`, and `getFirstSentence`. `createMarkdownHeading` now accepts optional heading text.
- New `preferParsedLiteralUnion` type policy for `altType` options: prefers `parsedType` only when it is a union of quoted string literals.
- `getComponentPublicMethods` no longer fabricates a `=> void` return clause when the manifest records no return type — the clause is omitted instead of asserting a false fact.
- `getComponentPublicMethods` now excludes static methods, matching `getComponentPublicProperties`.
- Both member getters accept an optional `isPrivate` predicate to support custom privacy conventions (e.g. `_`-prefixed names); `isPrivateMember` is exported as the default.
- `getAllComponents` no longer mutates the manifest — module path resolution is applied to copies of the declarations.
- A suite-wide purity test now asserts that every exported getter leaves its input untouched.
