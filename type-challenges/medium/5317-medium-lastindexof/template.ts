type LastIndexOf<T extends any[], U> = T extends [...infer F, infer L]
    ? L extends U
        ? F['length']
        : LastIndexOf<F, U>
    : -1;