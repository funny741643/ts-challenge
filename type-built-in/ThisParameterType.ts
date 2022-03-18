/**
 * 提取函数里this的类型
 */

type ThisParameterType_in<T> = 
    T extends (this: infer U, ...args: any[]) => any
        ? U
        : unknown

type Person_ = {
    name: 'funny'
}

function hello(this: Person_) {
    console.log(this.name);
}

type ThisParameterTypeRet = ThisParameterType_in<typeof hello>