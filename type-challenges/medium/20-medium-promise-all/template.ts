declare function PromiseAll<T extends unknown[]>(values: readonly [...T]): Promise<{
    [K in keyof T]: T[K] extends Promise<infer R> ? R : T[K]; 
}>

const promiseAllTest1 = PromiseAll([1, 2, 3] as const)
const promiseAllTest2 = PromiseAll([1, 2, Promise.resolve(3)] as const)
const promiseAllTest3 = PromiseAll([1, 2, Promise.resolve(3)])

let test20 = [1, 2, "sss"] as const;

type sc = typeof test20 // readonly [1, 2, "sss"]

let test20_1 = [1, 2, "sss"]

type sc_1 = typeof test20_1 // (string | number)[]