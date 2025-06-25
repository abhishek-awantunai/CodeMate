console.clear();

const exponentialPower = (base, exponent) => {
    if (exponent === 1) return base;
    return (base * exponentialPower(base, exponent - 1));
};

console.log(exponentialPower(5, 3));