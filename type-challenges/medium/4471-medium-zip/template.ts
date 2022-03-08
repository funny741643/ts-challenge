type Zip<T extends unknown[], U extends unknown[], R extends unknown[] = []> = R['length'] extends T['length'] | U['length'] ? R : Zip<T, U, [...R, [T[R['length']], U[R['length']]]]>