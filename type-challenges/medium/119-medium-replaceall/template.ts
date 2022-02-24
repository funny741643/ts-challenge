type ReplaceAll<
    S extends string,
    From extends string,
    To extends string
> = From extends '' ? S : S extends `${infer Left}${From}${infer Right}` ? `${Left}${To}${ReplaceAll<Right, From, To>}`: S;