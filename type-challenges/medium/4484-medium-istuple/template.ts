type IsTuple<T> = T extends readonly any[]
    ? number extends T['length']
        ? false
        : true
    : false;

type case_4484 = IsTuple<number[]>


const x = [1, 2] as [number, number];  // Tuple
const y = [1, 2] as number[];          // Array
const lenX = x.length;  // const lenX: 2
const lenY = y.length;  // const lenY: number
type t1 = number extends typeof lenX ? true : false;  // type t1 = false
type t2 = number extends typeof lenY ? true : false;  // type t2 = true