type ReplaceKeys<
    U extends Record<string, unknown>,
    T extends keyof any,
    Y extends Record<string, unknown>
> = {
    [Key in keyof U] : Key extends T
        ? Key extends keyof Y
            ? Y[Key]
            : never 
        : U[Key];
}