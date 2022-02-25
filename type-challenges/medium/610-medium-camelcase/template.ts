type CamelCase<S extends string> = S extends `${infer Left}-${infer Right}${infer Rest}`
    ? Right extends ("-" | Uppercase<Right>)
        ? `${Left}-${CamelCase<`${Right}${Rest}`>}`
        : `${Left}${Uppercase<Right>}${CamelCase<Rest>}`
    : S;
