async function get3(): Promise<number> {
    console.log('get3() called');
    return 3;
}
console.log('before get3()');
const p = get3();
p.then(num => {
    console.log(`num is ${num}`);
});
console.log('after get3()');
/**
 * before get3()
 * get3() called
 * after get3()
 * num is 3
 */
