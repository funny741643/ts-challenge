type Flip<T extends Record<string, any>> = {
    [K in keyof T as `${T[K]}`]: K
}
