type LengthOfString<S extends string, T extends unknown[] = []> = S extends `${infer String}${infer Rest}`
    ? LengthOfString<Rest, [unknown, ...T]>
    : T["length"]


// 数组长度做计数