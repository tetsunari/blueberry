function doNothing(val: unknown) {
    console.log(val);
}
doNothing(3);
doNothing({
    user: {
        name: "uhyo"
    }
});
doNothing(() => {
    console.log("hi");
})

function doNoting2(val: unknown) {
    // Object is of type 'unknown'.
    // const name = val.name;
    // console.log(name);
}

function useUnknown(val: unknown) {
    if (typeof val === "string") {
        console.log("valは文字列です。");
        console.log(val.slice(0, 5));
    } else {
        console.log("valはstring型ではありません。");
        console.log(val);
    }
}
useUnknown("foobar");
useUnknown(null);
