type Without<T extends unknown[], U> = T extends [infer F, ...infer Rest]
    ? F extends Exclude<T[number], U extends unknown[] ? U[number] : U>
    ? [F, ...Without<Rest, U>]
    : Without<Rest, U>
    : T

type t5117 = Without<[1, 2, 4, 1, 5], [1, 2]>

type t5117_1 = Exclude<'a' | 'b' | 'c', 'a'>

type t51 = [1, 2, 3]

type t51_1 = t51[number]