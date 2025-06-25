console.clear();

const factorialOfN = (num) => {
    if (num < 1) return 1;

    return num * factorialOfN(num - 1);
}

console.log(factorialOfN(3));
