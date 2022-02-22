// type MyAwaited<T> = T extends Promise<infer P> ? P : T;

// 判断入参类型是Promise的情况下，再判断嵌套的类型是否符合再进行递归
type MyAwaited<T extends Promise<any>> = T extends Promise<infer P>
    ? P extends Promise<any>
    ? MyAwaited<P>
    : P
    : never; 

type a = MyAwaited<Promise<string>>
