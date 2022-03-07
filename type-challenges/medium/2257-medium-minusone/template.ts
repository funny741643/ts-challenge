type BuildArray<
    Length extends number,
    Ele = unknown,
    Arr extends unknown[] = []
> = Arr['length'] extends Length ? Arr : BuildArray<Length, Ele, [...Arr, Ele]>


type MinusOne<T extends number> =
    BuildArray<T> extends [...arr1: BuildArray<1>, ...arr2: infer R]
        ? R['length']
        : never

type MinusOne_a<T extends number, U extends unknown[] = []> = 
    [...U, unknown]['length'] extends T ? U['length'] : MinusOne_a<T, [...U, unknown]>