const p = new Promise<number>((resolve) => {
    setTimeout(() => {
        resolve(100);
    }, 3000);
});
p.then((num) => {
    console.log(`結果は${num}です`);
});
// 結果は100です

const sleep = (duration: number) => {
    return new Promise<void>((resolve) => {
        setTimeout(resolve, duration);
    })
};
sleep(3000).then(() => {
    console.log('3秒経過');
})
// 3秒経過

const sleepReject = (duration: number) => {
    return new Promise<never>((resolve, reject) => {
        setTimeout(reject, duration);
    })
}
sleepReject(3000).catch(() => {
    console.log('失敗!!!');
});
// 失敗!!!
