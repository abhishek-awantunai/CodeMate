console.clear();

const printNumbers = (num) => {
    if (num === 1) return 1;

    console.log(num);
    return printNumbers(num - 1);
}

console.log(printNumbers(5));