/**
 * 为索引类型加上readonly
 */

type Readonly_in<T> = {
    readonly [P in keyof T]: T[P];
}