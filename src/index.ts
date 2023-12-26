type NumberAndStrings = [number, ...string[]];
const arr1: NumberAndStrings = [25, "uhyo", "hyo", "hyo"];
const arr2: NumberAndStrings = [25];
// ここから下はエラーになる
const arr3: NumberAndStrings = ["uhyo", "hyo"];
const arr4: NumberAndStrings = [25, 26, 27];
const arr5: NumberAndStrings = [];

type NumberStringNumber = [number, ...string[], number];
const arr6: NumberStringNumber = [25, "uhyo", "hyo", 26];
const arr7: NumberStringNumber = [25, 25];
// ここから下はエラーになる
const arr8: NumberStringNumber = [25, "uhyo", "hyo"];
const arr9: NumberStringNumber = [];
const arr10: NumberStringNumber = ["uhyo", "hyo", 26];
const arr11: NumberStringNumber = [25, "uhyo", 25, "hyo"];

// ...配列を2回使っているのでコンパイルエラーになる
type T1 = [number, ...string[], number, ...string[]];
type T2 = [number, ...string[], ...number[], string];
// オプショナルな要素を...配列型よりも後ろで指定するとコンパイルエラーになる
type T3 = [number, ...string[], number?];

type NSN = [number, string, number];
type SNSNS = [string, ...NSN, string];
// [string, number, string, number, string]
