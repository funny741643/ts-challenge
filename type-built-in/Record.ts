/**
 * 用于创建索引类型
 */

type Record_in<K extends keyof any, T> = {
    [P in K]: T;
}

type ret = keyof any    // string | number | symbol

type RecordRet = Record_in<'a' | 'b', number>
type RecordRet2 = Record_in<string, number>