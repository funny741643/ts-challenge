type MyOmit<T extends object, K extends keyof T> = {
    [Key in Exclude<keyof T, K>]: T[Key]
}

// Exclude<T, U>: T中排除U
// type MyExclude<T, U> = T extends U ? never : T;

interface Todo {
    title: string
    description: string
    completed: boolean
}

type T3 = keyof Todo;   // "title" | "description" | "completed"

type TodoPreview = MyOmit<Todo, 'description' | 'title'>

const todo: TodoPreview = {
    completed: false,
}