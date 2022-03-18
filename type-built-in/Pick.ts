/**
 * 提取出索引类型的一部分索引构造成新的索引类型。
 */

type Pick_in<T, K extends keyof T> = {
    [P in K]: T[P];
};

type PickRet = Pick_in<{name: 'funny', age: 17, sex: 1}, 'name' | 'age'>