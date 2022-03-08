// 方法一
type String2Union<S extends string, R extends string = never> = S extends `${infer F}${infer L}` ? String2Union<L, R | F>: R

type Combination<S extends string, U extends string = '', K = S> = [S] extends [never]
    ? U
    : K extends S
        ? Combination<Exclude<S, K>, U | `${U}${K}`>
        : U

type AllCombinations<A extends string> = Combination<String2Union<A>>


// 方法二
type Combination_between<A extends string, B extends string> =
    | A
    | B
    | `${A}${B}`
    | `${B}${A}`;

type Combinations_union<A extends string, B extends string = A> = A extends A
    ? Combination_between<A, AllCombinations<Exclude<B, A>>>
    : never;

type Combination_string<A extends string> = Combinations_union<String2Union<A>>


type t4260 = AllCombinations<'ABC'>
type t4260_1 = Combination_string<'ABC'>