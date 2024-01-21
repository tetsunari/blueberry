async function main() {
    const { readFile, writeFile } = await import("fs/promises");
    try {
        const fooContent = await readFile("foo.txt", "utf8");
        await writeFile("bar.txt", fooContent + fooContent);
        console.log("Done!");
    } catch {
        console.error("Something went wrong!");
    }
}

main().then(() => {
    console.log("main() Done!");
});
