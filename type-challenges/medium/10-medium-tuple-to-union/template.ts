// type TupleToUnion<T> = T extends (infer P)[] ? P : never;

type TupleToUnion<T extends unknown[]> = T[number];

type test10 = TupleToUnion<[123, '456', true]>;