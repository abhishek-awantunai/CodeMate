const binarySearch = (arr, num) => {

    // initialize pointers to traverse in the array
    let start = 0;
    let end = arr.length - 1;

    // handle edge cases
    if (arr[start] === num) return start;
    if (arr[end] === num) return end;

    // calculate midpoint of the array
    let mid = Math.floor((start + end) / 2);

    // loop ovet and find element and return the index of the element
    while (start !== mid && end !== mid) {
        if (num > arr[mid]) {
            start = mid;
        } else if (num < arr[mid]) {
            end = mid;
        } else {
            return mid;
        }
        mid = Math.floor((start + end) / 2)
    }


    // by default return -1
    return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11));