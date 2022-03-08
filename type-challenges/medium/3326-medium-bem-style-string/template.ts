type BEM<B extends string, E extends string[], M extends string[]> = E extends []
    ? M extends []
        ? B
        : `${B}--${M[number]}`
    : M extends []
        ? `${B}__${E[number]}`
        : `${B}__${E[number]}--${M[number]}`

type t3326 = ['aaa', 'bbb'][number] // 'aaa' | 'bbb'