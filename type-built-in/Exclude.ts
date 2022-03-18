/**
 * 从联合类型中去掉一部分类型
 */

type Exclude_in<T, U> = T extends U ? never : T;

type ExcludeRet = Exclude_in<'a' | 'b' | 'c', 'a' | 'b'>