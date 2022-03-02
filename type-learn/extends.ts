type A1 = 'x' extends 'x' ? string : number;    // string

type A2 = 'x' | 'y' extends 'x' ? string : number;  // number

type P<T> = T extends 'x' ? string : number;

type A3 = P<'x' | 'y'>   // string | number

type A4 = P<never>  // never

type Q<T> = [T] extends ['x'] ? string : number;

type A5 = Q<never>  // string