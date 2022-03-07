type RemoveIndexSignature<T> = {
    [K in keyof T as string extends K ? never : number extends K ? never : K]: T[K]
}

type Baz = {
    bae: number;
    baz: string
}

type Faz = {
    [key: string]: any;
    foo(): void;
}

type Baz1 = RemoveIndexSignature<Faz>

type t1367 = '1'

type t1367_1 = string extends t1367 ? string : number;  // number

// 过滤类型为string

type FilterString<T> = {
    [K in keyof T as T[K] extends string ? K : never]: T[K];
}

type Baz2 = FilterString<Baz>