/*
BINARY SEARCH :-

Input: array = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in array and its index is 4
*/

const search = (array, target) => {
    if (!array.length) return -1;
    let start = 0;
    let end = array.length - 1;
    if (array[start] === target) return start;
    if (array[end] === target) return end;

    while(start <= end) {
        let mid = Math.floor((start+end)/2);
        if (array[mid] > target) {
            end = mid - 1;
        } else if (target > array[mid]) {
            start = mid + 1;
        } else {
            return mid;
        }
    }
    return -1;
};

let array = [-1,0,3,5,9,12]; 
let target = 9;
console.log(search(array, target));