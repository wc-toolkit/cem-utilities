/**
 * Simple object check.
 * @param item
 * @returns {boolean}
 */
export function isObject(item: unknown) {
  return item && typeof item === "object" && !Array.isArray(item);
}

/**
 * Merges the content of two objects
 * @param target object being merged into
 * @param source data to merge into the target
 * @returns object
 */
export function deepMerge<T = object>(target: unknown, source: unknown): T {
  if (typeof target !== "object" || target === null) {
    return source as T;
  }

  if (typeof source !== "object" || source === null) {
    return target as T;
  }

  const targetObj = target as Record<string, unknown>;
  const sourceObj = source as Record<string, unknown>;
  const result: Record<string, unknown> = { ...targetObj };

  for (const key of Object.keys(source)) {
    if (sourceObj[key] instanceof Array) {
      const targetValue = result[key] instanceof Array ? (result[key] as unknown[]) : [];
      result[key] = targetValue.concat(sourceObj[key] as unknown[]);
    } else if (sourceObj[key] instanceof Object) {
      result[key] = deepMerge(result[key], sourceObj[key]);
    } else {
      result[key] = sourceObj[key];
    }
  }

  return result as T;
}
