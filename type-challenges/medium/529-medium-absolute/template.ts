type Absolute<T extends number | string | bigint> = T extends string
    ? T extends `-${infer R}`
        ? `${R}`
        : `${T}`
    : Absolute<`${T}`>