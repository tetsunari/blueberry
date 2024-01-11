const p = Promise.resolve(100);
p.then((result) => {
    console.log(`result is ${result}`);
});
// Promise.resolve(100) は、以下と同じ意味
new Promise((resolve) => { resolve(100); })

// Promise.reject("foo") は、以下と同じ意味
new Promise((resolve, reject) => { reject("foo"); })

const p1 = Promise.resolve(100);
p.then(() => {
    console.log("2");
})
console.log("1");
// 1 2
