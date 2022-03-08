type reverse<T extends unknown[]> = T extends [infer F, ...infer R] ? [...reverse<R>, F] : [];

type FlipArguments<T extends (...args: any[]) => any> = T extends (...args: infer P) => infer U
    ? (...args: reverse<P>) => U
    : never