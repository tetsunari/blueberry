const main = async function() {
    const fooContent = await readFile("foo.txt", "utf8");
    await writeFile("bar.txt", fooContent + fooContent);
    console.log("success!");
};

// 上と同じ
const main = async () => {
    const fooContent = await readFile("foo.txt", "utf8");
    await writeFile("bar.txt", fooContent + fooContent);
    console.log("success!");
};

const obj = {
    normalMethod() {

    },
    async asyncMethod() {

    },
};
