/**
 * 将索引类型变为 非可选的
 */

type Required_in<T> = {
    [P in keyof T]-?: T[P]
}

type RequiredRet = Required_in<{name?: 'funny', age?: 18}>