type Permutation<T, U = T> = [T] extends [never]
    ? []
    : T extends U
    ? [T, ...Permutation<Exclude<U, T>>]
    : T;

// 利用了联合分散性质
// T extends U: 让联合类型每个类型单独传入做处理, 也可以写成 T extends T
// 最后进行递归处理