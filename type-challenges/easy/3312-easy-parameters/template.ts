type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer Arg) => any ? Arg : never;

// Parameters内置类型：从函数类型的形参中使用的类型构造元组类型

declare function f1(arg: { a: number; b: string }): void;

type T1 = MyParameters<typeof f1>;

type T2 = typeof f1;