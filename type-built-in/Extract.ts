/**
 * 从联合类型中去掉一部分类型
 */

type Extract_in<T, U> = T extends U ? T : never;

type ExtractRet = Extract_in<'a' | 'b' | 'c', 'a' | 'b'>