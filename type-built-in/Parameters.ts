/**
 * 用于提起函数类型的参数类型
 */

type Parameters_in<T extends (...args: any) => any>
    = T extends (...args: infer P) => any
        ? P
        : never