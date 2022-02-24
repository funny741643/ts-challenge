type Replace<
    S extends string,
    From extends string,
    To extends string
> = From extends '' ? S : S extends `${infer Prefix}${From}${infer Suffix}` ? `${Prefix}${To}${Suffix}`: S;

type test116 = Replace<'foobarbar', '', 'foo'>