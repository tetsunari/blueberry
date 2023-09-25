type Human = {
    height: number;
    weight: number;
};
const calcBMI = function(human: Human): number {
    return human.weight / human.height ** 2;
};
const uhyo: Human = { height: 1.84, weight: 72};
console.log(calcBMI(uhyo)); // 21.266540642722116

const calcBMI2 = function({ height, weight }: Human): number {
    return weight / height ** 2;
}
console.log(calcBMI2(uhyo)); // 21.266540642722116