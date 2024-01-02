type T = Readonly<{
    name: string;
    age: number;
}>;
type T1 = Partial<{
    name: string;
    age: number;
}>;
type T2 = Pick<{
    name: string;
    age: Number;
}, "age">;
type Union = "uhyo" | "hyo" | 1 | 2 | 3;
type T3 = Extract<Union, string>;
type T4 = Exclude<Union, string>;
