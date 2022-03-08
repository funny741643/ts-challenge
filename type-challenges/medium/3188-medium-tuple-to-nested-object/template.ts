type TupleToNestedObject<T extends any[], U extends any> = T extends []
    ? U
    : T extends [...infer R, infer L]
        ? L extends string
            ? TupleToNestedObject<R, Record<L, U>>
            : never
        : never