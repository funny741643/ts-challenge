type ObjectEntries<T extends object, K extends keyof T = keyof T> = K extends keyof T ? [K , Required<T>[K]]: never

// 联合分散性