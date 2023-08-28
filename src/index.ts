const arr = [0, 123, -456 * 100];
console.log(arr[0]); // 0
console.log(arr[1]); // 123

const arr1 = [0, 123, -456 * 100];
console.log(arr1); // [ 0, 123, -45600 ]
arr1[1] = 5400;
console.log(arr1); // [ 0, 5400, -45600 ]

const arr2 = [0, 123, -456 * 100];
arr2[1] = 5400;
// arr2 = [1, 3, 45, 6]; // error