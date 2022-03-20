// 缺点：返回的对象无法提示都有哪些属性
function parseQueryString_bad(queryStr: string): Record<string, any> {
    if (!queryStr || !queryStr.length) {
        return {}
    }
    const queryObj: Record<string, any> = {};
    const items = queryStr.split('&')
    items.forEach(item => {
        const [key, value] = item.split('=');
        if (queryObj[key]) {
            if(Array.isArray(queryObj[key])) {
                queryObj[key].push(value);
            } else {
                queryObj[key] = [queryObj[key], value]
            }
        } else {
            queryObj[key] = value;
        }
    });
    return queryObj;
}



type ParseParam<Param extends string> = 
    Param extends `${infer Key}=${infer Value}`
        ? {
            [K in Key]: Value
        }
        : Record<string, any>

type MergeValues<One, Other> = 
    One extends Other
        ? One
        : Other extends unknown[]
            ? [One, ...Other]
            : [One, Other];

type MergeParams<
    OneParam extends Record<string, any>,
    OtherParam extends Record<string, any>
> = {
  readonly [Key in keyof OneParam | keyof OtherParam]: 
    Key extends keyof OneParam
        ? Key extends keyof OtherParam
            ? MergeValues<OneParam[Key], OtherParam[Key]>
            : OneParam[Key]
        : Key extends keyof OtherParam 
            ? OtherParam[Key] 
            : never
}

type ParseQueryString<Str extends string> = 
    Str extends `${infer Param}&${infer Rest}`
        ? MergeParams<ParseParam<Param>, ParseQueryString<Rest>>
        : ParseParam<Str>;


// 自己敲的一遍

type MergeValues_my<One, Other> = 
    One extends Other
        ? One
        : Other extends unknown[]
            ? [One, ...Other]
            : [One, Other]


type MergeParams_my<
    OneParam extends Record<string, any>,
    OtherParam extends Record<string, any>
> = {
    readonly [Key in keyof OneParam | keyof OtherParam]:
        Key extends keyof OneParam
            ? Key extends keyof OtherParam
                ? MergeValues_my<OneParam[Key], OtherParam[Key]>
                : OneParam[Key]
            : Key extends keyof OtherParam
                ? OtherParam[Key]
                : never;
}

type ParseParam_my<Param extends string> = Param extends `${infer Key}=${infer Value}`
    ? {
        [K in Key]: Value
    }
    : Record<string, any>

type ParseQueryString_my<Str extends string> =
    Str extends `${infer Param}&${infer Rest}`
        ? MergeParams_my<ParseParam_my<Param>, ParseQueryString_my<Rest>>
        : ParseParam_my<Str>;



function parseQueryString<Str extends string>(queryStr: Str): ParseQueryString_my<Str> {
    if (!queryStr || !queryStr.length) {
        return {} as any;
    }
    const queryObj = {} as any;
    const items = queryStr.split('&');
    items.forEach(item => {
        const [key, value] = item.split('=');
        if (queryObj[key]) {
            if(Array.isArray(queryObj[key])) {
                queryObj[key].push(value);
            } else {
                queryObj[key] = [queryObj[key], value]
            }
        } else {
            queryObj[key] = value;
        }
    });
    return queryObj as any;
}


const res = parseQueryString('a=1&b=2&c=3');




