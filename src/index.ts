let log: string = '';
for (let i: number = 1; i <= 100; i++) {
    if (i > 1) {
        log += ' ';
    }
    if (i % 3 === 0) {
        if (i % 5 === 0) {
            log += 'FizzBuzz';
        } else {
            log += 'Fizz';
        }
    } else {
        if (i % 5 === 0) {
            log += 'Buzz';
        } else {
            log += String(i);
        }
    }
    console.log(log);
}