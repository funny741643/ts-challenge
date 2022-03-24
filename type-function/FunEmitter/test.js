"use strict";
exports.__esModule = true;
var index_1 = require("./index");
var emitter = (0, index_1["default"])();
// const emitter = mitt<Events>()
function foohandler(a) {
    console.log(a);
}
function barhandler(a) {
    console.log('bar');
}
function onceHandler(name) {
    console.log('是once', name);
}
function nononceHandler(name) {
    console.log('不是once', name);
}
emitter.on('foo', foohandler);
emitter.on('bar', barhandler);
emitter.emit('foo', 'foo');
emitter.emit('bar');
emitter.on('eat', nononceHandler);
emitter.once('eat', onceHandler);
emitter.emit("eat", "apple");
emitter.emit("eat", "pear");
