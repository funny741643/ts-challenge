type TupleToObject<T extends readonly (string | number | symbol)[]> = {
    // ts世界里数组的遍历方式
    [P in T[number]]: P;
}