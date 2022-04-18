export type MergeInsertions<T> = 
    T extends object
        ? { [K in keyof T]: MergeInsertions<T[K]> }
        : T;

export type DeepMerge<F, S> = MergeInsertions<{
    [K in keyof F | keyof S]: K extends keyof S & keyof F
        ? DeepMerge<F[K], S[K]>
        : K extends keyof S
            ? S[K]
            : K extends keyof F
                ? F[K]
                : never
}>

export const toString = (v: any) => Object.prototype.toString.call(v)

export const isObject = (val: any): val is object => toString(val) === '[object Object]'

function isMergableObject(item: any): item is Object {
    return isObject(item) && !Array.isArray(item)
}

export function objectKeys<T extends object>(obj: T) {
    return Object.keys(obj) as Array<keyof T>
}

export function deepMerge<T extends object = object, S extends object = T>(target: T, ...sources: S[]): DeepMerge<T, S> {
    if (!sources.length)
        return target as any
    
    const source = sources.shift()
    if (source === undefined)
        return target as any
    
    if (isMergableObject(target) && isMergableObject(source)) {
        objectKeys(source).forEach((key) => {
            if (isMergableObject(source[key])) {
                // @ts-expect-error
                if (!target[key])
                    // @ts-expect-error
                   target[key] = {}
                // @ts-expect-error
                deepMerge(target[key], source[key])
            } else {
                // @ts-expect-error
                 target[key] = source[key]
            }
        })
    }

    return deepMerge(target, ...sources)
}