console.clear();

const maxConsecutiveOnes = (arr) => {
    // Initialize pointers to traverse through array
    let start = 0;
    let end = 0;

    // initialixe initial value of maxConsecutiveNum and tempCount
    let tempCount = -Infinity;
    let maxLength = tempCount;

    // loop over the array and mind the max count
    while (end < arr.length) {
        if (arr[end] === 0) {
            tempCount = end - start - 1;
            maxLength = Math.max(tempCount, maxLength);
            start = end;
        }
        end++;
    }

    return maxLength;
}

console.log(maxConsecutiveOnes([0,1,1,1,1,1,1,1,1, 1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,1]));