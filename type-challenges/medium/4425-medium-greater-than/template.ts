// 思路： 向一个数组里面不断的放元素如果先到A,则B大，否则A大

type GreaterThan<
    T extends number,
    U extends number,
    CountArr extends unknown[] = []
> = T extends U
    ? false
    : CountArr['length'] extends U
        ? true
        : CountArr['length'] extends T
            ? false
            : GreaterThan<T, U, [...CountArr, unknown]>