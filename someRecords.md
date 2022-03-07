## 交叉类型& 和 联合类型 |
联合类型 | 是指可以取几种类型中的任意一种，而交叉类型 & 是指把几种类型合并起来。


## 抽象类

1. 抽象类
只能被继承， 但不能被实例化的类

2. 为什么叫抽象类
很显然，抽象类是一个广泛和抽象的概念，不是一个实体
官方一点的说法是，在面向对象的概念中，所有的对象都是通过类来描绘的，但是反过来，并不是所有的类都是用来描绘对象的，如果一个类中没有包含足够的信息来描绘一个具体的对象，这样的类就是抽象类。
比如 Animal 类只是具有动物都有的一些属性和方法，但不会具体到包含猫或者狗的属性和方法。
所以抽象类的用法是用来定义一个基类，声明共有属性和方法，拿去被继承。
抽象类的好处是可以抽离出事物的共性，有利于代码的复用。

3. 抽象类的特点
    * 抽象类不允许被实例化
    * 抽象类中的抽象方法必须被子类实现


## extends 关键字

### 用途

* 类的继承
* 类型约束
* 条件分配

### 条件约束

`A extends B ? :`
这里指的是A是否可以分配给类型B, 而不是A是否是B的子集。

栗子:
```
type Human = {
    name: string;
    occupation: string;
}
type Duck = {
    name: string;
}
type Bool = Duck extends Human ? 'yes' : 'no'; // Bool => 'no'
```

因为 Duck 没有类型为string的occupation属性，类型Duck不满足类型Human的类型约束, 所以Bool为 'no'

another栗子：

```
type A1 = 'x' extends 'x' ? string : number;    // string

type A2 = 'x' | 'y' extends 'x' ? string : number;  // number

type P<T> = T extends 'x' ? string : number;

type A3 = P<'x' | 'y'>   // string | number
```

这里按照正常的思维考虑，A3 和 A2 的类型应该是一样的，可为什么会出现这种结果呢？

这个反直觉结果的原因就是所谓的分配条件类型（Distributive Conditional Types）

对于使用extends关键字的条件类型（即上面的三元表达式类型），如果extends前面的参数是一个泛型类型，当传入该参数的是联合类型，则使用分配律计算最终的结果。分配律是指，将联合类型的联合项拆成单项，分别代入条件类型，然后将每个单项代入得到的结果再联合起来，得到最终的判断结果。

### 特殊的never

continue 栗子：

```
type P<T> = T extends 'x' ? string : number;

type A4 = P<never>  // never
```
A4在这里即不是string 也不是 number是为何？

实际上，这里还是条件分配类型在起作用。never被认为是空的联合类型，也就是说，没有联合项的联合类型，所以还是满足上面的分配律，然而因为没有联合项可以分配，所以P<T>的表达式其实根本就没有执行，所以A2的定义也就类似于永远没有返回的函数一样，是never类型的。

解决方法：

```
type Q<T> = [T] extends ['x'] ? string : number;

type A5 = Q<never>  // string
```
在条件判断类型的定义中，将泛型参数使用[]括起来，即可阻断条件判断类型的分配，此时，传入参数T的类型将被当做一个整体，不再分配。

### IsUnion高级类型讲解

```
type IsUnion<T, O = T> = T extends O ? [O] extends [T] ? false : true : never;

type T1097 = IsUnion<string|number> // true

type T1097_1 = IsUnion<string>  // false
```

栗子：IsUnion<string|number>

1. T extends O ? 

    (string extends string | number) | (number extends string |number) ?

    T 此时为 string | number

2. 
    [T] 此时为 [string] | [number]

    [O] 此时为 [string | number]

3. 所以若[O] extends [T] 为 false, 证明其是联合类型， 否则则不是联合类型

## 重映射

重映射就是在索引后面加一个as语句，表名索引转换成什么，它可以用来转换成什么，它可以用来对索引类型过滤和转换

### 提取类型为string的索引

```
type FilterString<T> = {
    [K in keyof T as T[K] extends string ? K : never]: T[K]
}

type person = {
    name: 'guang',
    age: 20,
    gender: true
}

type ret = FilterString<person>

Expect<Equal<FilterString<person>, { name: 'guang' }>>  // true
```
### 从对象类型中排除索引签名

```
type RemoveIndexSignature<T> = {
    [K in keyof T as string extends K ? never : number extends K ? never : K]: T[K]
}

type Baz = {
    [key: string]: any;
    foo(): void;
}

type ret = RemoveIndexSignature<Baz>

Expect<Equal<RemoveIndexSignature<Foo>, { foo(): void }>>  // true
```
### 从T中选取一组类型可赋给U的属性。

```
type PickByType<T, U> = {
    [K in keyof T as T[K] extends U ? K : never]: T[K]
}

interface Model {
  name: string
  count: number
  isReadonly: boolean
  isEnable: boolean
}

Expect<Equal<PickByType<Model, boolean>, { isReadonly: boolean; isEnable: boolean }>>   // true
```