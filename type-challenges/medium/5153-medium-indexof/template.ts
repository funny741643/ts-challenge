type IndexOf<T extends unknown[], U, countArr extends unknown[] = []> = T extends [infer L, ...infer R]
    ? L extends U
        ? countArr['length']
        : IndexOf<R, U, [...countArr, unknown]>
    : -1