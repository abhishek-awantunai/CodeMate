const selectinSort = (arr) => {
    // initialize pointers to be traversed over the array
    let iterator = 0;
    let start = 0;

    // loop over array and move the element to the correct position inside the array
    while (start < arr.length) {
        let min = Infinity;
        let minIndex = 0;
        iterator = start
        while (iterator < arr.length) {
            if (arr[iterator] < min) {
                minIndex = iterator;
                min = arr[iterator];
            }
            iterator++;
        }
        arr[minIndex] = arr[start];
        arr[start] = min;
        console.log(JSON.stringify(arr));
        start++;
    }

    return arr;
    // return arr;
}

console.log(selectinSort([11, 122, 23, 5, 55, 111, 231]));