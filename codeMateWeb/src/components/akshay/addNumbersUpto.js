console.clear();

const addNumbersUpto = (n) => {
    if (n === 1) return 1;

    return n + addNumbersUpto(n - 1);
}

console.log(addNumbersUpto(5));