import type * as cem from "custom-elements-manifest";

export type ExtComponent = cem.CustomElement & Record<string, unknown> & {
  /** Path to the component's source module */
  modulePath?: string;
  /** Path to the component's definition */
  definitionPath?: string;
  /** Path to the component's type definition (if different than the source module) */
  typeDefinitionPath?: string;
};

/** A generic extension of the CEM `CustomElement` type to allow for strongly typing your custom data */
export type Component<T = Record<string, unknown>> = ExtComponent & T;

/** A generic extension of the CEM `MixinDeclaration` type to allow for strongly typing your custom data */
export type Mixin<T = Record<string, unknown>> = cem.MixinDeclaration & Record<string, unknown> & T;

/** A generic extension of the CEM `Attribute` type to allow for strongly typing your custom data */
export type Attribute<T = Record<string, unknown>> = cem.Attribute & Record<string, unknown> & T;

/** A generic extension of the CEM `ClassField` type to allow for strongly typing your custom data */
export type Property<T = Record<string, unknown>> = cem.ClassField & Record<string, unknown> & T;

/** A generic extension of the CEM `CssCustomProperty` type to allow for strongly typing your custom data */
export type CssCustomProperty<T = Record<string, unknown>> =
  cem.CssCustomProperty & Record<string, unknown> & T;

/** A generic extension of the CEM `CssCustomState` type to allow for strongly typing your custom data */
export type CssCustomState<T = Record<string, unknown>> = cem.CssCustomState & Record<string, unknown> &
  T;

/** A generic extension of the CEM `CssPart` type to allow for strongly typing your custom data */
export type CssPart<T = Record<string, unknown>> = cem.CssPart & Record<string, unknown> & T;

/** A generic extension of the CEM `Event` type to allow for strongly typing your custom data */
export type ComponentEvent<T = Record<string, unknown>> = cem.Event & Record<string, unknown> & T;

/** A generic extension of the CEM `ClassMethod` type to allow for strongly typing your custom data */
export type Method<T = Record<string, unknown>> = cem.ClassMethod & Record<string, unknown> & {
  type: cem.Type;
} & T;

/** A generic extension of the CEM `Slot` type to allow for strongly typing your custom data */
export type Slot<T = Record<string, unknown>> = cem.Slot & Record<string, unknown> & T;

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
