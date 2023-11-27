type FooString = "foo";
const foo: FooString = "foo";
const bar: FooString = "bar"; // Error: Type '"bar"' is not assignable to type '"foo"'.

const foo2: "foo2" = "foo2";
const one: 1 = 1;
const t: true = true;
const three: 3n = 3n;

const uhyoName = "uhyo";
// uhyoNameは"uhyo"という文字列リテラル型になる
const age = 30;
// ageは30という数値リテラル型になる
