const arr = [0, 1, 2, 1, 1, 3,1, 1, 2, 0, 0, 0, 1, 0, 1, 0, 3, 1, 3, 1, 0, 2, 3, 0];

const moveAllZeroToLast = (arr) => {
    // initialize two pointers to loop over the array
    let start = 0;
    let end = 1;

    // loop over the array and switch positions of the zeros
    while (end < arr.length) {
        if (arr[end] !== 0) {
            let temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
        }
        end++;    
    }

    // return the array
    return arr;
}

console.log(moveAllZeroToLast(arr));