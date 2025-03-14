import type * as cem from "custom-elements-manifest";

/** A generic extension of the CEM `CustomElement` type to allow for strongly typing your custom data */
export type Component<T = Record<string, unknown>> = cem.CustomElement & T;

/** A generic extension of the CEM `MixinDeclaration` type to allow for strongly typing your custom data */
export type Mixin<T = Record<string, unknown>> = cem.MixinDeclaration & T;

/** A generic extension of the CEM `Attribute` type to allow for strongly typing your custom data */
export type Attribute<T = Record<string, unknown>> = cem.Attribute & T;

/** A generic extension of the CEM `ClassField` type to allow for strongly typing your custom data */
export type Property<T = Record<string, unknown>> = cem.ClassField & T;

/** A generic extension of the CEM `CssCustomProperty` type to allow for strongly typing your custom data */
export type CssCustomProperty<T = Record<string, unknown>> =
  cem.CssCustomProperty & T;

/** A generic extension of the CEM `CssCustomState` type to allow for strongly typing your custom data */
export type CssCustomState<T = Record<string, unknown>> = cem.CssCustomState &
  T;

/** A generic extension of the CEM `CssPart` type to allow for strongly typing your custom data */
export type CssPart<T = Record<string, unknown>> = cem.CssPart & T;

/** A generic extension of the CEM `Event` type to allow for strongly typing your custom data */
export type ComponentEvent<T = Record<string, unknown>> = cem.Event & T;

/** A generic extension of the CEM `ClassMethod` type to allow for strongly typing your custom data */
export type Method<T = Record<string, unknown>> = cem.ClassMethod & {
  type: cem.Type;
} & T;

/** A generic extension of the CEM `Slot` type to allow for strongly typing your custom data */
export type Slot<T = Record<string, unknown>> = cem.Slot & T;

/** A combination of the Attribute and ClassField types from the custom elements manifest */
export type AttributeAndProperty = {
  /** The name of the attribute */
  attrName?: string;
  /** The name of the property */
  propName?: string;
  /** A markdown summary suitable for display in a listing. */
  summary?: string;
  /** A markdown description. */
  description?: string;
  /** Name of the class this is inherited from */
  inheritedFrom?: cem.Reference;
  /** The type that the attribute will be serialized/deserialized as. */
  type?: cem.Type;
  /** The default value of the attribute or property. */
  default?: string;
  /**
   * Whether the attribute is deprecated.
   * If the value is a string, it's the reason for the deprecation.
   */
  deprecated?: boolean | string;
  /** Whether the property is static */
  static?: boolean;
  /** A reference to the source of a declaration or member. */
  source?: cem.SourceReference;
  /** Whether the attribute or property is readonly */
  readonly?: boolean;
};