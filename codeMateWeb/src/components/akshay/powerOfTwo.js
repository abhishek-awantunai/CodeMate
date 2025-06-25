console.clear();

const powerOfTwo = (num) => {
    if (num < 1) return 1;

    return 2 * powerOfTwo(num - 1);
}

console.log(powerOfTwo(5));
