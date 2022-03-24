import funEmitter from "./index"
// import mitt from '../EventBus/index'

// funEmitter<{
//     'name': string
//     'age': number
// }>().on('age', (value) => {
//     // number
//     console.log(value)
// })

type Events = {
    foo: string;
    // 处理函数参数是否可选？
    bar?: number;
    eat: string;
}
  
const emitter = funEmitter<Events>()
// const emitter = mitt<Events>()

function foohandler(a: string) {
    console.log(a)
}

function barhandler(a?: number) {
    console.log('bar')
}

function onceHandler(name: string) {
    console.log('是once', name)
}
function nononceHandler(name: string) {
    console.log('不是once', name)
}

emitter.on('foo', foohandler)
emitter.on('bar', barhandler)
emitter.emit('foo', 'foo')
emitter.emit('bar')

emitter.on('eat', nononceHandler)
emitter.once('eat', onceHandler)
emitter.emit("eat", "apple")
emitter.emit("eat", "pear")