/**
 * PrevArr: 之前累加值的数组，即js世界前一个数
 * CurrentArr: 当前数值的数组
 * IndexArr: 计数数组
 * Num: 代表求数列的第几个数
 */
/**
 * 例如求数列第5个数
 * PreArr: [1, 1, 1]
 * CurrentArr: [1, 1, 1, 1, 1]
 */
type FibonacciLoop<
    PrevArr extends unknown[],
    CurrentArr extends unknown[],
    IndexArr extends unknown[] = [],
    Num extends number = 1
> = IndexArr['length'] extends Num
    ? CurrentArr['length']
    : FibonacciLoop<CurrentArr, [...PrevArr, ...CurrentArr], [...IndexArr, unknown], Num>

type Fibonacci<T extends number> = FibonacciLoop<[1], [], [], T>