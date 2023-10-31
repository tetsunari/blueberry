for (let i = 0; i < 100; i++) {
    const message = getFizzBuzzString(i);
    console.log(message);
}

function getFizzBuzzString(i: number): string|number
{
    if (i % 3 === 0) {
        if (i % 5 === 0) {
            return "FizzBuzz";
        }
        return "Fizz";
    } else if (i % 5 === 0) {
        return "Buzz";
    }
    return i;
}
