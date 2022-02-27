// 不同的类有一些共同的属性和方法，使用继承很难完成
// 使用implements，可以处理公共的属性和方法

interface MusicInterface {
    playMusic() : void;
}

class Car implements MusicInterface {
    playMusic(): void {
        console.log('car play')
    }
}

class Cellphone implements MusicInterface {
    playMusic(): void {
        console.log('cellphone play')
    }
}


// 使用implements只能约束类实例上的属性和方法

interface IMusic {
    name: string,
    next: string[],
    playMusic(): void
}

class CellphonePlayer implements IMusic {
    public name =  "love";
    public next = ["story", "tomorrow"];
    playMusic(): void {
        console.log("play love now")
    }
}


// 约束类的构造函数和静态属性如下

interface ICircleStatic {
    new (radius: number): void
    pi: number
}

const Circle: ICircleStatic = class Circle {
    static pi = 3.14

    // public constructor(radius: string) {
    //     /**
    //      * 不能将类型“typeof Circle”分配给类型“ICircleStatic”。
    //      * 参数“radius”和“radius” 的类型不兼容。
    //      * 不能将类型“number”分配给类型“string”。
    //      */
    // }

    public constructor(radius: number) {
        console.log('ok')
    }
}