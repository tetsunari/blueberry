type Human = {
    name: string;
    age: number;
};
function useMaybeHuman(human: Human | null) {
    const age = human?.age;
    console.log(age);
    // age is number | undefined
}

type GetTimeFunc = () => Date;
function useTime(getTimeFunc: GetTimeFunc | undefined) {
    const timeOrUndefined = getTimeFunc?.();
    // timeOrUndefined is Date | undefined
}

type User = {
    isAdult(): boolean;
}
function checkForAdultUser(user: User | null) {
    if (user?.isAdult()) {
        showSpecilContents(user);
    }
}

type GetTimeFunc2 = () => Date;
function useTime2(getTimeFunc: GetTimeFunc2 | undefined) {
    const time = getTimeFunc?.().toString();
}
