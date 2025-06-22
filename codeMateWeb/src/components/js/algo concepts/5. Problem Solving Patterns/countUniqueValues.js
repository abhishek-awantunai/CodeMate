// Multiple Pointer Example

const countUniqueValues = (arr) => {
    let temp = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[temp]) {
            temp++;
            arr[temp] = arr[i];
        }
    }
    return (parseInt(temp) + 1);
}

const arr = [1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 8, 9];

console.log(countUniqueValues(arr));