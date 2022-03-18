/**
 * 取Promise的ValueType的高级类型
 */

type Awaited_in<T> = 
    T extends null | undefined
        ? T
        : T extends Object & { then(onfulfilled: infer F): any }
            ? F extends ((value: infer V, ...args: any) => any)
                ? Awaited_in<V>
                : never
            : T;

type AwaitedRet = Awaited<Promise<Promise<Promise<number>>>>