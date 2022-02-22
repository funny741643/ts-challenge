type MyExclude<T, U> = T extends U ? never : T;

// 知识点
// T extends U ? never : T 表示如果 T是 U的子类返回never类型，如果不是返回T类型。
// 当T为联合类型的时候，它会自动分发条件。
// 对于联合类型来说会自动分发条件，例如 T extends U ? X : Y, T 可能是 A | B 的联合类型, 那实际情况就变成(A extends U ? X : Y) | (B extends U ? X : Y)