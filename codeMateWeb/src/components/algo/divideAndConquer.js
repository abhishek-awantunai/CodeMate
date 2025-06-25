/*
Divide and Conquer - countZeroes
Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called countZeroes, which returns the number of zeroes in the array.

countZeroes([1,1,1,1,0,0]) // 2
countZeroes([1,0,0,0,0]) // 4
countZeroes([0,0,0]) // 3
countZeroes([1,1,1,1]) // 0
Time Complexity - O(log n)
*/

const countZeroes = (arr) => {
    let left = 0;
    let right = arr.length - 1;
    
    // If array is empty or first element is 0, all are zeros
    if (arr.length === 0) return 0;
    if (arr[0] === 0) return arr.length;
    
    // If last element is 1, no zeros exist
    if (arr[right] === 1) return 0;
    
    // Binary search to find first occurrence of 0
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === 0) {
            // Found a 0, but check if it's the first one
            if (mid === 0 || arr[mid - 1] === 1) {
                // This is the first 0, count from here to right
                return arr.length - mid;
            }
            // Not the first 0, search left half
            right = mid - 1;
        } else {
            // arr[mid] === 1, search right half
            left = mid + 1;
        }
    }
    
    return 0; // This shouldn't be reached given the constraints
};

console.log(countZeroes([1,1,1,1,0,0]));