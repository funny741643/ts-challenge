/**
 * 提取构造器返回值的类型
 */

type InstanceType_in<
    T extends abstract new (...args: any) => any
> = T extends abstract new (...args: any) => infer R
    ? R
    : any;