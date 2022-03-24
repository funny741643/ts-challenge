"use strict";
// import { EventType } from './../EventBus/index';
exports.__esModule = true;
function funEmitter(all) {
    all = all || new Map();
    return {
        /**
         * 事件名称到注册处理程序函数的映射。
         */
        all: all,
        on: function (type, handler) {
            var handlers = all.get(type);
            if (handlers) {
                handlers.push(handler);
            }
            else {
                all.set(type, [handler]);
            }
        },
        off: function (type, handler) {
            var handlers = all.get(type);
            if (handlers) {
                if (handler) {
                    // x >>> 0本质上就是保证x有意义（为数字类型），且为正整数，在有效的数组范围内（0 ～ 0xFFFFFFFF），且在无意义的情况下缺省值为0。
                    handlers.splice(handlers.indexOf(handler) >>> 0, 1);
                }
                else {
                    all.set(type, []);
                }
            }
        },
        emit: function (type, evt) {
            var handlers = all.get(type);
            if (handlers) {
                handlers
                    .slice()
                    .map(function (handler) {
                    handler(evt);
                });
            }
        },
        once: function (type, handler) {
            var _this = this;
            var fn = function (arg) {
                _this.off(type, fn);
                handler(arg);
            };
            this.on(type, fn);
        }
    };
}
exports["default"] = funEmitter;
