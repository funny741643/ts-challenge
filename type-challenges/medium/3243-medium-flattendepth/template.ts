// type pop<T extends any[]> = T extends [...infer H, any] ? H : never;

// type minusOne<T extends number, A extends any[] = []> = A['length'] extends T
//     ? pop<A>['length']
//     : minusOne<T, [...A, 0]>

type minusOne<T extends number, U extends unknown[] = []> = 
    [...U, unknown]['length'] extends T ? U['length'] : minusOne<T, [...U, unknown]>

type flatten<T extends any[]> = 
    T extends [infer F, ...infer R]
        ? F extends any[]
            ? [...F, ...flatten<R>]
            : [F, ...flatten<R>]
        : []

type FlattenDepth<T extends unknown[], Dep extends number = 1> = Dep extends 0
    ? T
    : FlattenDepth<flatten<T>, minusOne<Dep>>