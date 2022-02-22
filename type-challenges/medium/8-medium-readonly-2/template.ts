type MyReadonly2<T, K extends keyof T = keyof T> =  {
    [p in Exclude<keyof T ,K>] :T[p]
} & {
    readonly [S in K]: T[S]
}

// 通过& 合并只读和非只读，给K提供默认值，让第二个参数非必传
// type MyReadonly2<T, K extends keyof T = keyof T> = {
//     readonly [p in K] : T[p]
//   } & {
//     [p in Exclude<keyof T ,K>] :T[p]
// }