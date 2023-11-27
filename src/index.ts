function getHelloStr(): `Hello, ${string}!` {
    const rand = Math.random();
    if (rand < 0.3) {
        return "Hello, World!";
    } else if (rand < 0.6) {
        return "Hello, my World!";
    } else if (rand < 0.9) {
        // Hello, world!でないのでエラー
        return "Hello, world.";
    } else {
        // Hello, World!でないのでエラー
        return "Hell, World!";
    }
}

function  makeKey<T extends string>(UserName: T) {
    return `user:${UserName}` as const;
}
const uyoKey: "user:uhyo" = makeKey("uhyo");

function fromKey<T extends string>(key: `user:${T}`): T {
    return key.slice(5) as T;
}
const user = fromKey("user:uhyo");
