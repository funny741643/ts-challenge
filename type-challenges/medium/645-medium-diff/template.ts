type Diff<O, O1> = Omit<O & O1, keyof O & keyof O1>;

type Foo = {
    name: string
    age: string
    love: string
}
type Bar = {
    name: string
    age: string
    gender: number
}

type test645 = Diff<Foo, Bar>

type test645_1 = Foo & Bar;

type test645_2 = Foo | Bar;

let test645_a: test645_1 = {
    name: 'aa',
    age: '13',
    gender: 1,
    love: 'l'
}

let test645_b: test645_2 = {
    gender: 2,
    name: '1',
    age: '13',
    love: 'l'
}

// 交叉类型是多个类型合并为一个类型，可以访问所有类型的属性；联合类型是多个类型中的某一个，只能访问所有类型的共有属性。