type Chainable<T extends { [key: string]: unknown } = {}> = {
    option<K extends string, V>(key: K, value: V): Chainable<T & { [Key in K]: V }>
    get(): T
}

// class Chainable<T = {}> {
//     #content: T;
  
//     option<Key extends string, Value extends any>(key: Key, value: Value) {
//       return this as unknown as Chainable<T & { [P in Key]: Value }>;
//     }
//     get() {
//       return this.#content;
//     }
// }
