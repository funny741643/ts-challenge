type PrefixType<T extends string> = T extends `${infer F}${infer R}`
    ? F extends '-' | '+'
        ? F
        : ''
    : ''

type SuffixType<T extends string> = T extends `${infer F}${infer R}`
? R extends '%'
    ? R
    : SuffixType<R>
: ''

type PercentageParser<A extends string> = 
    A extends `${PrefixType<A>}${infer N}${SuffixType<A>}`
    ? [PrefixType<A>, N, SuffixType<A>]
    : never