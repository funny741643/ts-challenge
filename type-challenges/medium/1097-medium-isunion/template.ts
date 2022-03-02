type IsUnion<T, O = T> = T extends O ? [O] extends [T] ? false : true : never;

type T1097 = IsUnion<string|number>

type T1097_1 = IsUnion<string>

/**
 * 栗子：IsUnion<string|number>
 * 1. T extends O ? 
 * (string extends string | number) | (number extends string |number) ?
 * T 此时为 string | number
 * 2. 
 * [T] 此时为 [string] | [number]
 * [O] 此时为 [string | number]
 * 3.
 * 所以若[O] extends [T] 为 false, 证明其是联合类型， 否则则不是联合类型
 */