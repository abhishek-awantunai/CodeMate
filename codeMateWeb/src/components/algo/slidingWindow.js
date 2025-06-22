console.clear();
const printSlidingWindow = (arr, windowSize) => {
    console.log(arr.length);
    let start = 0;
    let end = windowSize - 1;

    while(end < arr.length) {
        console.log(arr.slice(start++, end++ + 1))
    }
}


const findMaxSumOfSlidingWindow = (arr, windowSize) => {
    // initialize the starting point
    let start = 0;

    // calculate sum of the starting point of the array
    let initialSum = arr.slice(start, windowSize).reduce((sum, item) => sum += item, 0);
    let maxSum = initialSum;

    // loop over and calculate the initialSum for each window
    while (start < arr.length - windowSize) {
        initialSum = initialSum - arr[start] + arr[start + windowSize];
        maxSum = Math.max(initialSum, maxSum);
        start++;
    }
    
    // return the max window
    return maxSum;
}

// console.log(findMaxSumOfSlidingWindow([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 4));


const printMaxSubStr = (str) => {
    if (!str.length) return '';

    // initialize starting point, subString, maxSubstr
    let start = 0;
    let subStr = '';
    let maxSubstr = '';

    // loop over the string and recalculate subString and reinitialize maxSubstr based on condition
    while (start < str.length) {
        if (subStr.includes(str[start])) {
            if (subStr.length > maxSubstr.length) {
                maxSubstr = subStr;
            }
            subStr = '';
        }
        subStr += str[start];
        start++;
    }

    return maxSubstr;
}

// console.log(printMaxSubStr('houytfeollootoheore'));


/*
Sliding Window - maxSubarraySum
Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

maxSubarraySum([100,200,300,400], 2) // 700
maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39 
maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
maxSubarraySum([2,3], 3) // null
Constraints:

Time Complexity - O(N)

Space Complexity - O(1)
*/

const maxSubarraySum = (arr, num) => {
    if (num > arr.length) return null;

    // initialize pointers
    let start = 0;

    // calculate initial sum and a maxSum variable
    let tempSum = arr.slice(start, num).reduce((total, el) => el+total, 0);
    let maxSum = tempSum;

    // loop over and find the max sum based in condition
    while(start < arr.length - num) {
        tempSum = tempSum - arr[start] + arr[start+num];
        maxSum = Math.max(tempSum, maxSum);
        start++
    }

    return maxSum
}


// console.log(maxSubarraySum([100,200,300,400], 2)); // 700
// console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4));  // 39 
// console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2)); // 5
// console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2)); // 5
// console.log(maxSubarraySum([2,3], 3)); // null



/*
Sliding Window - minSubArrayLen
Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.
Examples:

minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0

Time Complexity - O(n)
Space Complexity - O(1)
*/

const minSubArrayLen = (arr, num) => {
    // firstly look if there is any number which is >= num in the array if yes return 1
    const index = arr.findIndex(el => el >= num);
    if (index > 0) return 1;

    for(let i = 2; i < arr.length; i++) {
        let start = 0;
    
        let tempSum = arr.slice(start, i).reduce((total, el) => total+el, 0);
    
        while(start < arr.length - i) {
            tempSum = tempSum - arr[start] + arr[start + i];
            if (tempSum >= num) return i; 
            start++;
        }
    }

    return 0;
}

// console.log(minSubArrayLen([2,3,1,2,4,3], 7)) // 2 -> because [4,3] is the smallest subarray
// console.log(minSubArrayLen([2,1,6,5,4], 9)) // 2 -> because [5,4] is the smallest subarray
// console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52)) // 1 -> because [62] is greater than 52
// console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],39)) // 3
// console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],55)) // 5
// console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)) // 2
// console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],95)) // 0

/*
Sliding Window - findLongestSubstring
Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('longestsubstring') // 8
findLongestSubstring('thisishowwedoit') // 6
Time Complexity - O(n)
*/

const findLongestSubstring = (str) => {
    const traversedCharacter = {};
    let start = 0;
    let maxLength = 0;
    let end = 0;

    while(end < str.length) {
        let character = str[end];
        
        if (traversedCharacter[character] >= start) {
            start = traversedCharacter[character] + 1;
        }

        traversedCharacter[character] = end;
        maxLength = Math.max(maxLength, end - start + 1);
        end++;
    }

    return maxLength;
};


// console.log(findLongestSubstring('')) // 0
// console.log(findLongestSubstring('rithmschool')) // 7
// console.log(findLongestSubstring('thisisawesome')) // 6
// console.log(findLongestSubstring('thecatinthehat')) // 7
// console.log(findLongestSubstring('bbbbbb')) // 1
console.log(findLongestSubstring('longestsubstring')) // 8
// console.log(findLongestSubstring('thisishowwedoit')) // 6