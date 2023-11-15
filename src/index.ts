class EmptyArrayError extends Error {}

try {
    getAverage([1, 2, 3]);
    getAverage([]);
} catch (e) {
    if (e instanceof EmptyArrayError) {
        console.log('EmptyArrayError');
    } else {
        throw e;
    }
}

function getAverage(nums: number[]) {
    if (nums.length === 0) {
        throw new EmptyArrayError('Empty array');
    }
    return sum(nums) / nums.length;
}

function sum(nums: number[]): number {
    let sum = 0;
    for (const num of nums) {
        sum += num;
    }
    return sum;
}
