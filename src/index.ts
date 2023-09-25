const obj = {
    double(num: number): number {
        return num * 2;
    },
    double2: (num: number): number => num * 2,
};
console.log(obj.double(100)); // 200
console.log(obj.double2(-50)); // -100