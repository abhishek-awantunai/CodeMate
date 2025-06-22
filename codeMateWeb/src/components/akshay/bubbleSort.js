const bubbleSort = (arr) => {
    // initialize traversal and stopping pointers
    let pointer = 0;
    const length = arr.length;
    let comparisonCount = 0;

    // loop over array and sort items pair by pair
    while (comparisonCount < length) {   
        while (pointer < length - comparisonCount) {
            if (arr[pointer] > arr[pointer + 1]) {
                const temp = arr[pointer + 1];
                arr[pointer + 1] = arr[pointer];
                arr[pointer] = temp;
            }
            pointer++;
        }
        comparisonCount++;
        pointer = 0;
    }

    return arr;
}

console.log(bubbleSort([11, 122, 23, 55, 111, 231]));


const bubbleSortIncreasing = (arr) => {
    // initialize pointers to be traversed over the array
    let iterator = 0;
    let start = 0;

    // loop over array and move the element to the correct position inside the array
    while (start < arr.length) {
        while (iterator < arr.length - start) {
            if (arr[iterator] > arr[iterator + 1]) {
                const temp = arr[iterator];
                arr[iterator] = arr[iterator + 1];
                arr[iterator + 1] = temp;
            }
            iterator++;
        }
        iterator = 0;
        start++;
    }

    // return array
    return arr;
}

console.log(bubbleSortIncreasing([11, 122, 23, 5, 55, 111, 231]));