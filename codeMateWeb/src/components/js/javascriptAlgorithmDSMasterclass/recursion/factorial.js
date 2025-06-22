const findFactorialOfNumber = (num) => {
    return num === 1 ? 1 : (num * findFactorialOfNumber(num - 1));
}

findFactorialOfNumber(5);