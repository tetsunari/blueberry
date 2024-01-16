import("fs/promises")
    .then(( { readFile }) =>
        readFile("package.json", "utf-8")
    )
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log("Error: ", error);
    });
