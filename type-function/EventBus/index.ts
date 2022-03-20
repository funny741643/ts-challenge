export type EventType = string | symbol;

/**
 * 事件处理函数，T为事件处理函数的参数类型
 */
export type Handler<T = unknown> = (event: T) => void;

/**
 * 监听所有事件的事件处理函数
 * 函数类型，函数参数为type: string | symbol; event: type所对应的类型，默认都为unknown
 */
export type WildcardHandler<T = Record<string, unknown>> = (
    type: keyof T,
    event: T[keyof T]
) => void;

/**
 * 某一类型事件的所有的事件处理函数集合
 */
export type EventHandlerList<T = unknown> = Array<Handler<T>>

/**
 * 监听所有事件的事件处理函数集合
 */
export type WildCardHandlerList<T = Record<string, unknown>> = Array<WildcardHandler<T>>

/**
 *  事件类型及其对应的事件处理程序的映射。
 */
export type EventHandlerMap<Events extends Record<EventType, unknown>> = Map<
    keyof Events | '*',
    EventHandlerList<Events[keyof Events]> | WildCardHandlerList<Events>
>;

export interface Emitter<Events extends Record<EventType, unknown>> {
    all: EventHandlerMap<Events>;

    on<Key extends keyof Events>(type: Key, handler: Handler<Events[Key]>): void;
    /**
     * 监听所有类型的事件
     * @param type *
     * @param handler 
     */
    on(type: '*', handler: WildcardHandler<Events>): void;

    off<Key extends keyof Events>(type: Key, handler?: Handler<Events[Key]>): void;
    /**
     * 卸载监听所有类型的事件某一个的事件处理函数
     * @param type 
     * @param handler 
     */
    off(type: '*', handler: WildcardHandler<Events>): void;

    emit<Key extends keyof Events>(type: Key, event: Events[Key]): void;
    emit<Key extends keyof Events>(type: undefined extends Events[Key] ? Key : never): void;
}


export default function mitt<Events extends Record<EventType, unknown>>(
    all?: EventHandlerMap<Events>
): Emitter<Events> {
    // 通用的事件处理器
    type GenericEventHandler = 
        | Handler<Events[keyof Events]>
        | WildcardHandler<Events>;
    all = all || new Map();

    return {
        /**
         * 事件名称到注册处理程序函数的映射
         */
        all,

        on<Key extends keyof Events>(type: Key, handler: GenericEventHandler) {
            const handlers: Array<GenericEventHandler> | undefined = all!.get(type)
            if (handlers) {
                handlers.push(handler);
            } else {
                all!.set(type, [handler] as EventHandlerList<Events[keyof Events]>)
            }
        },

        off<Key extends keyof Events>(type: Key, handler?: GenericEventHandler) {
            const handlers: Array<GenericEventHandler> | undefined = all!.get(type)
            if (handlers) {
                if (handler) {
                    handlers.splice(handlers.indexOf(handler) >>> 0, 1)
                } else {
                    all!.set(type, []);
                }
            }
        },

        emit<Key extends keyof Events>(type: Key, evt?: Events[Key]){
            let handlers = all!.get(type);
            if (handlers) {
                (handlers as EventHandlerList<Events[keyof Events]>)
                    .slice()
                    .map((handler) => {
                        handler(evt!)
                    });
            }

            handlers = all!.get('*');
            if (handlers) {
                (handlers as WildCardHandlerList<Events>)
                    .slice()
                    .map((handler) => {
                        handler(type, evt!);
                    })
            }
        },
    }

}