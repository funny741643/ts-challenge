type Copy<T extends object> = {
    [K in keyof T]: T[K];
}

type PartialByKeys<T extends object, K extends keyof any = keyof T> = 
    Copy<Omit<T, K> & { [P in (keyof T & K)]?: T[P] } > 

// 部分操作