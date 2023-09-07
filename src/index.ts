const d = new Date();
console.log(d);
console.log(d.getMonth());
console.log(d.getFullYear());

const d1 = new Date("2020-03-03T15:00:00+09:00");
console.log(d1);

const date = new Date("2020-03-03T15:00:00+09:00");
const timeNum = date.getTime();
console.log(timeNum);

const date2 = new Date(timeNum);
console.log(date2);

console.log(Date.now());