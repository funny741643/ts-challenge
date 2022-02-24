// type LookUp<U extends { type: string }, T> = U extends infer R ? 
//     R extends { type: string } ?
//     R["type"] extends T ?
//     R :
//     never :
//     never :
//     never ;

// type LookUp<U, T> = U extends Record<"type", T> ? {[Key in keyof U]: U[Key]} : never;

type LookUp<U, T> = U extends Record<"type", string> ? U["type"] extends T ? U : never : never;