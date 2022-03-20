"use strict";
exports.__esModule = true;
var index_1 = require("./index");
var emitter = (0, index_1["default"])();
// emitter.on('foo', e => console.log('foo', e))
emitter.on('*', function (type, e) { return console.log(type, e); });
emitter.emit('foo', { a: 'b' });
emitter.all.clear();
// function onFoo(){}
// emitter.on('foo', onFoo)
// emitter.off('foo', onFoo)
