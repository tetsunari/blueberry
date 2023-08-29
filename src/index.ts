const arr = [1, 10, 100];
arr.push(1000);
console.log(arr); // [ 1, 10, 100, 1000 ]

// arr.push("foobar"); // error

const arr1: readonly number[] = [1, 10, 100];
// arr1.push(1000); // error

const arr2 = [1, 10, 100];
console.log(arr2.includes(100)); // true
console.log(arr2.includes(50)); // false
// console.log(arr2.includes("foobar")); // error

const arr3 = [1, 10, 100];
console.log(arr3.length); // 3
arr3.push(1000);
console.log(arr3.length); // 4