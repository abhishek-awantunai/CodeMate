console.clear();
console.log('%c --------------------------------------------------------------- Starting The App Baby --------------------------------------------------------------- ', 'background: #dedede; color: #000000; font-size: 15px;');

let QUESTION = 'Write an algo to find the max sum of n consecutive elements or subset of elements of an array?';

console.log('%cProblem Statement : ' + ' %c' + QUESTION, 'color: red; font-weight: bold; font-size: 14px;', 'color: blue; font-size: 13px;');

const findMaxSumOfConsecutiveDigits = (arr, num) => {
    if (num > arr.length) return null;

    let maxSum = -Infinity;
    let temp = 0;
    for (let i = 0; i < num; i++) {
        temp += arr[i];
    }

    for (let i = num; i < arr.length; i++) {
        temp = temp + arr[i] - arr[i - num];
        if (temp > maxSum) {
            maxSum = temp;
        }
    }

    return maxSum;
}

let arr1 = [3, 32, 11, 30, 21, 42, 33, 14, 45, 66];
let num1 = 2;
// let arr2 = [-3, -3, -3, -3, -2, -2, -2, -1, 0, 1, 1, 1, 1, 1, 1, 1, 2, 3, 4, 5, 6];
// let num2 = 4;
console.log('%cInput : ' + arr1 + ' AND ' + num1, 'color: orange;font-weight: bold; font-size: 14px');

console.log('%cOutput : ' + findMaxSumOfConsecutiveDigits(arr1, num1), 'color: green;font-weight: bold; font-size: 14px');
// console.log('%Output : ' + findMaxSumOfConsecutiveDigits(arr2, num2), 'color: green;');

// Overall Complexity = O(n)

console.log('%c --------------------------------------------------------------- Ending The App Baby ----------------------------------------------------------------- ', 'background: #dedede; color: #000000; font-size: 15px;');