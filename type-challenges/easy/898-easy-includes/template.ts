import { Equal } from "@type-challenges/utils";

type Includes<T extends readonly any[], U> = T extends [infer First , ...infer Rest]
    ? Equal<First,U> extends true
    ? true
    : Includes<Rest,U> 
    : false;
