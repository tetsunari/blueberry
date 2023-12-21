const names1 = ["uhyo", "john", "Taro"];
// string[]型
const names2 = ["uhyo", "john", "Taro"] as const;
// readonly ["uhyo", "john", "Taro"]型
const names = ["uhyo", "john", "Taro"] as const;
type Name = (typeof names)[number];
// 上と同じ
// type Name = "uhyo" | "john" | "Taro";
// const names: Name[] = ["uhyo", "john", "Taro"];
