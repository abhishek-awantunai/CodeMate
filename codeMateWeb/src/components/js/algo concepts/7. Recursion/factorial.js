const factorial = (num) => {
    if (num === 1) return 1;

    return num*factorial(num-1);
}

console.log(factorial(5));


const sumOfArrayByRecursion = (arr) => {
    if (!arr.length) return 0;

    return (arr.pop() + sumOfArrayByRecursion(arr));
}

// const  arr = [12, 3, 4, 5, 55, 53, 233, 43, 433, 34, 23];
const  arr = [1, 2, 3, 4, 5];
console.log(sumOfArrayByRecursion(arr));


const reverseAString = (str) => {
    if (str.length === 0) return '';
    const strAsArray = str.split('');

    return (strAsArray.pop().toString() + reverseAString(strAsArray.join('')));
}

console.log(reverseAString('this is a sample string'));