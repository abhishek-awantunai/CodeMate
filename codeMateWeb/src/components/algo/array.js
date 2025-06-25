console.clear();

const bothArrayAreSame = (arr1 = [], arr2 = []) => {
    // compare length
    if (arr1.length != arr2.length) return false;
    
    const obj1 = {};
    const obj2 = {};

    // count frequency of each element arr1 ----> O(N)
    arr1.forEach(el => obj1[el] = (obj1[el] || 0) + 1);

    // count frequency of each element arr2 ----> O(N)
    arr2.forEach(el => obj2[el] = (obj2[el] || 0) + 1);

    // Big O(N) ----> O(N)
    if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;

    // compare the frequencies return if mismatch ----> O(N)
    for(let key in obj1) {
        if (obj1[key] !== obj2[key*key]) return false;
    }

    return true;
}

// console.log(bothArrayAreSame([1,2,3,4,1,2], [4,1,1,4,9,16]));

const stringIsAnagram = (str1, str2) => {
    if (str1.length != str2.length) return false;

    const obj1 = {};
    const obj2 = {};

    str1.split('').forEach(el => obj1[el] = (obj1[el] || 0) + 1);
    str2.split('').forEach(el => obj2[el] = (obj2[el] || 0) + 1);

    if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;

    for(let key in obj1) {
        if (obj1[key] !== obj2[key]) return false;
    }

    return true;
}

// console.log(stringIsAnagram('anagram', 'anaragm'));


const findPairSumZeroInArray = (arr) => {
    let  i = 0;
    let j = arr.length - 1;

    while (i < j) {
        if ((arr[i] + arr[j]) > 0) {
            j--;
        } else if ((arr[i] + arr[j]) < 0) {
            i++;
        } else {
            return [i,j];
        }
    }
    
    return undefined;
}

// console.log(findPairSumZeroInArray([-3,-1,1,2,4,5,6]));

const countUniqueValuesInAnArray = (arr) => {
    if (arr.length === 0) return 0;

    let i = 0;
    let j = 1;
    let unique = 1;

    while (j < arr.length) {
        if (arr[i] !== arr[j]) {
            i = j;
            unique++;
        }
        j++;
    }

    return unique;
}

// console.log(countUniqueValuesInAnArray([]))


const findTheLargestSumInAnArray = (arr, num) => {
    if(!num) return 'pass a valid number';

    let i = 0;
    let sum = 0;

    while (i < (arr.length - num + 1)) {
        let tempSum = 0;
        for(let j = i; j < i+num; j++) {
            tempSum += arr[j];
            sum = Math.max(sum, tempSum);
        }
        i++;
    }

    return sum;
}

// console.log(findTheLargestSumInAnArray([1,2,3,4,5,12,3,4,5,1,3,22], 3));

const findBiggestSubString = (str) => {
    if(str.length === 0) return '';
    
    let j = 0;
    let maxLetter = '';
    let subStr = '';

    while(j < str.length){
        if (subStr.includes(str[j])) {
            if (subStr.length > maxLetter.length) {
                maxLetter = subStr; 
            }
            subStr = '';
        }
        subStr += str[j];
        j++;
    }

    return maxLetter;
}


// h e l l o t h e r e
// 0 1 2 3 4 5 6 7 8 9
// i
// j

// h

console.log(findBiggestSubString('hellothere'));