function doWhatever(obj: any) {
    // 好きなプロパティにアクセスできる
    console.log(obj.user.name);
    // 関数も呼び出せる
    obj();
    // 計算もできる
    const result = obj * 10;
    return result;
}

// 全部コンパイルエラーが発生しないがランタイムエラーが発生する
doWhatever(3);
doWhatever({
    user: {
        name: 'John'
    }
});
doWhatever(() => {
    console.log('hello');
});

function useNumber(num: number) {
    console.log(num);
}
function doWhatever2(obj: any) {
    // string型の変数に代入できる
    const str: string = obj;
    // number型の変数に代入できる
    useNumber(obj);
}
