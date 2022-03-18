/**
 * 用来判断是否为非空类型，也就是不是 null 或 undefined类型
 */

type NonNullable_in<T> = T extends null | undefined ? never : T;