function get<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}
type Human = {
    name: string;
    age: number;
}
const uhyo: Human = {
    name: "uhyo",
    age: 26,
};
const uhyoName = get(uhyo, "name");
const uhyoAge = get(uhyo, "age");
console.log(uhyoName); // "uhyo"
console.log(uhyoAge); // 26
