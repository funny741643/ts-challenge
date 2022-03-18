/**
 * 用于提取构造器 参数 的类型
 */

// abstract 代表不能直接被实例化

type ConstructorParameters_in<
    T extends abstract new (...args: any) => any
> =  T extends abstract new (...args: infer P) => any
    ? P
    : never;

interface Person {
    name: string;
}

interface PersonConstructor {
    new (name: string): Person;
}

type ConstructorParametersRet = ConstructorParameters_in<PersonConstructor>