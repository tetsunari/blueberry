const sleep = (duration: number) => {
    return new Promise<void>((resolve) => {
        setTimeout(resolve, duration);
    });
};
async function get3() {
    console.log("get3() called");
    await sleep(1000);
    console.log("get3() finished");
    return 3;
}
console.log("before get3()");
const p = get3();
p.then(num => {
    console.log(`num is ${num}`);
});
console.log("after get3()");

/**
 * before get3()
 * get3() called
 * after get3()
 * 1秒後に
 * get3() finished
 * num is 3
 */
