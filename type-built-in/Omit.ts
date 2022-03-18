/**
 * 删除掉索引类型的一部分索引构造成新的索引类型。
 */

type Omit_in<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>

type OmitRet = Omit_in<{name: 'funny', age: 17}, 'name'>;