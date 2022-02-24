type AppendArgument<Fn extends (...args: any[]) => any, A> = Fn extends (...args: infer R) => infer J ? (...args: [...R, A]) => J : never;


// 其他可分配给unknown,unknown不能给其他
let test191: unknown = 1
// let test191_1: string = test191  //不能将类型“unknown”分配给类型“string”