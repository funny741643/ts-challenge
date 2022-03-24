// import { EventType } from './../EventBus/index';

type EventType = string | symbol;

type Handler<T = unknown> = (event: T) => void;

type HandlerList<T = unknown> = Array<Handler<T>>;

/**
 * 事件类型及其对应的事件处理程序的映射。
 */
type EventHandlerMap<Events extends Record<EventType, unknown>> = Map<keyof Events, HandlerList<Events[keyof Events]>>

/**
 * Events 为你所要监听的所有的事件集合， Key为事件类型， Events[Key]则为事件处理函数的参数类型
 */
export interface IFunEmitter<Events extends Record<EventType, unknown>> {
    all: EventHandlerMap<Events>
    /**
     * 事件监听
     * @param type 监听的事件类型
     * @param handler 事件处理函数类型
     */
    on<Key extends keyof Events> (type: Key, handler: Handler<Events[Key]>) : void;

    /**
     * 事件卸载
     * @param type 监听的事件类型
     * @param handler 事件处理函数类型
     */
    off<Key extends keyof Events> (type: Key, handler?: Handler<Events[Key]>): void;

    /**
     * 事件触发
     * @param type 要触发的事件类型
     * @param event 事件处理函数参数的类型
     */
    emit<Key extends keyof Events> (type: Key, event: Events[Key]): void;
    // 事件处理函数参数可选
    emit<Key extends keyof Events> (type: undefined extends Events[Key] ? Key: never): void;

    /**
     * 只触发一次，触发后立刻解除监听
     * @param type 监听的事件类型
     * @param handler 事件处理函数类型
     */
    once<Key extends keyof Events>(type: Key, handler: Handler<Events[Key]>): void;
}

export default function funEmitter<Events extends Record<EventType, unknown>>(
    all?: EventHandlerMap<Events>
): IFunEmitter<Events> {
    all = all || new Map();

    return {
        /**
         * 事件名称到注册处理程序函数的映射。
         */
        all,

        on<Key extends keyof Events>(type: Key, handler: Handler<Events[Key]>){
            const handlers: Array<Handler<Events[Key]>> | undefined = all!.get(type)
            if (handlers) {
                handlers.push(handler);
            } else {
                all!.set(type, [handler] as HandlerList<Events[keyof Events]>)
            }
        },

        off<Key extends keyof Events>(type: Key, handler?: Handler<Events[Key]>){
            const handlers: Array<Handler<Events[Key]>> | undefined = all!.get(type)
            if (handlers) {
                if (handler) {
                    // x >>> 0本质上就是保证x有意义（为数字类型），且为正整数，在有效的数组范围内（0 ～ 0xFFFFFFFF），且在无意义的情况下缺省值为0。
                    handlers.splice(handlers.indexOf(handler) >>> 0, 1);
                } else {
                    all!.set(type, []);
                }
            }
        },

        emit<Key extends keyof Events>(type: Key, evt?: Events[Key]){
            let handlers = all!.get(type)
            if (handlers) {
                (handlers as HandlerList<Events[keyof Events]>)
                    .slice()
                    .map((handler) => {
                        handler(evt!);
                    });
            }
        },

        once<Key extends keyof Events>(type: Key, handler: Handler<Events[Key]>) {
            // 执行一次，立刻解除监听
            const fn = (arg: Events[Key]) => {
                this.off(type, fn)
                handler(arg)
            }
            this.on(type, fn);
        }

    }
}