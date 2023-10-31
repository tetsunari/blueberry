for (const i of sequence(1, 100)) {
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

function sequence(first: number, last: number): number[]
{
    const return_list: number[] = [];
    for (first; first <= last; first++) {
        return_list.push(first);
    }
    return return_list;
}
