/**
 * 将索引类型的索引变为可选的
 */

type Partial_in<T> = {
    [P in keyof T]?: T[P];
}

type PartialRet = Partial_in<{name: 'funny', age: 17}>