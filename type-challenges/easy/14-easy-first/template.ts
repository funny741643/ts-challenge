type First<T extends any[]> = T extends [] ? never : T[0];

type head = First<[3, 2, 1]>

let a:head = 3
// type First<T extends any[]> = T extends [infer P, ...any[]] ? P : never;