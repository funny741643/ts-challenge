type Flatten<T extends unknown[], U = []> = T extends []
    ? []
    : (T extends [infer P, ...infer Q]
        ? P extends unknown[]
            ? [...Flatten<P>, ...Flatten<Q>]
            : [P, ...Flatten<Q>] 
        : T);

type test459 = Flatten<[1, [2]]>

// 递归复用