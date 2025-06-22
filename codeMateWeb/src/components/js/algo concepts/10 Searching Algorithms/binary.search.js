const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 7;

const binarySearch = (arr, target) => {
    let start = 0;
    let end = arr.length - 1;
    
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] > target) {
            end = mid - 1;
        } else if (arr[mid] < target) {
            start = mid + 1;
        } else {
            return mid;
        }
    }

    return -1;

    // let first = 0
    // let last = nums.length - 1

    // while(first <= last){
    //     let mid = Math.floor(((first + last) / 2))
    //     if(nums[mid] < target){
    //         first = mid + 1
    //     }else if(nums[mid] > target){
    //         last = mid - 1
    //     } else{
    //         return mid
    //     }
    // }
    // return - 1
};


console.log('binarySearch => ' + binarySearch(arr, target));



// let arr = [1, 3, 2, 4, -1, 44, 0, 0, 87, 665, 243, 2, -1, -1, 0, 14, 6];

// const searchInArray = (arr, num) => {
//     if (!arr.length) return -1;
//     let start = 0;
//     let end = arr.length - 1;
//     if (arr[start] === num) {
//         return start;
//     } else if (arr[end] === num) {
//         return end;
//     }

//     while (start < end) {
//         let mid = Math.floor((start+end)/2);
//         if (arr[mid] > num) {
//             end = mid - 1;
//         } else if (arr[mid] < num) {
//             start = mid + 1;
//         } else {
//             return mid;
//         }
//     }
//     return -1;
// };

// console.log(arr.length);
// console.log(searchInArray(arr.sort((a,b) => a - b), 14));
