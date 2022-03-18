/**
 * 删除函数参数 this 的类型
 */

// 1. 用 ThisParameterType 提取 T 的 this 类型，
// 2. 如果提取出来的类型是 unknown 或者 any， 那么 unknown extends ThisParameterType 就成立，也就是没有指定 this 的类型，所以直接返回 T。
// 3. 就通过模式匹配提取参数和返回值的类型到 infer 声明的局部变量 A 和 R 中，用它们构造新的函数类型返回。

type OmitThisParameter_in<T> = 
    unknown extends ThisParameterType<T>
        ? T
        : T extends (...args: infer A) => infer R
            ? (...args: A) => R
            : T;

function say(this: Person, age: number) {
    console.log(this.name);
    return this.name + ' ' + age;
}

type OmitThisParameterRet = OmitThisParameter_in<typeof say>