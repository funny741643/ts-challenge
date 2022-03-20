import mitt from './index';

const emitter = mitt()

// emitter.on('foo', e => console.log('foo', e))

emitter.on('*', (type, e) => console.log(type, e))

emitter.emit('foo', {a: 'b'})

emitter.all.clear()

// function onFoo(){}
// emitter.on('foo', onFoo)
// emitter.off('foo', onFoo)