type Reverse<T extends any[], U extends any[] = []> = T extends [infer F, ...infer R]
    ? [...Reverse<R>, F]
    : T