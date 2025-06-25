console.clear();

const sumOfAllNumbersInArray = (array, index = 0) => {
    if (index > array.length - 1) return 0;

    return array[index] + sumOfAllNumbersInArray(array, index + 1);
}

console.log(sumOfAllNumbersInArray([1, 2, 3, 4, 5]));


console.clear();

const sumOfAllOddNumbersInArray = (array, index = 0) => {
    if (index > array.length - 1) return 0;

    return ((array[index] % 2 == 1) ? array[index] : 0) + sumOfAllOddNumbersInArray(array, index + 1);
}

console.log(sumOfAllOddNumbersInArray([1, 2, 3, 4, 5]));
