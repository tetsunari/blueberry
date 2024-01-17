async function fail() {
    throw new Error("oh my god!");
}
const p = fail();
p.catch(err => {
    console.log(err);
});
