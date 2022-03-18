/**
 * 用于提取函数类型的返回值类型
 */

type ReturnType_in<T extends (...args: any) => any>
    = T extends (...args: any) => infer R
        ? R
        : any;