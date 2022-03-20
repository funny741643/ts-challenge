"use strict";
exports.__esModule = true;
function mitt(all) {
    all = all || new Map();
    return {
        /**
         * 事件名称到注册处理程序函数的映射
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
            handlers = all.get('*');
            if (handlers) {
                handlers
                    .slice()
                    .map(function (handler) {
                    handler(type, evt);
                });
            }
        }
    };
}
exports["default"] = mitt;
