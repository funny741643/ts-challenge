type RequiredByKeys<T , K extends keyof any = keyof T> = Copy<Omit<T, K> & {[P in keyof T as P extends K ? P : never]-?: T[P]}>

// 部分操作