type Shift<T> = T extends [infer F, ... infer R] ? R : []

type t3062 = Shift<[1, 2, 3]>