const insertionSort = (arr) => {
    let start = 0;
    let iterator;

    while (start < arr.length) {
        iterator = 0;
        while (iterator < start + 1) {
            if (arr[iterator] > arr[iterator + 1]) {
                const swap = arr[iterator];
                arr[iterator] = arr[iterator + 1];
                arr[iterator + 1] = swap;
            }
            iterator++;
        }
        start++;
    }

    return arr;
}

console.log(insertionSort([11, 122, 23, 5, 55, 111, 231]));