type Options<D, C, M> = {
    data: (this: void) => D,
    computed: C & ThisType<D & C>,
    methods: M & ThisType<D & M & {[K in keyof C]: C[K] extends (...arg: any) => infer V ? V : never}>
}

declare function SimpleVue<D, C extends Record<string, any>,  M>
    (options: Options<D, C, M>): any;