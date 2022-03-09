type Join<T, U extends number | string, S extends string = ''> = T extends [infer L, ...infer R]
    ? L extends string
        ? S extends ''
            ? Join<R, U, L>
            : Join<R, U, `${S}${U}${L}`>
        : never
    : S;