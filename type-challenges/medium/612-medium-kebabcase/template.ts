type KebabCase<S extends string, P extends string = ""> = S extends `${infer L}${infer R}`
    ? L extends Lowercase<L>
        ? `${L}${KebabCase<R, '-'>}`
        : `${P}${Lowercase<L>}${KebabCase<R, '-'>}`
    : S;