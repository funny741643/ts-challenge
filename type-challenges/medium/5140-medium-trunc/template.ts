type Trunc<T extends number | string> = T extends string 
    ? T extends `${infer L}.${infer R}`
        ? L
        : T
    : Trunc<`${T}`>  