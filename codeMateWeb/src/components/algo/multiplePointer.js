console.clear();

/* 
Question 1 :-

Multiple Pointers - averagePair
Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

Bonus Constraints:

Time: O(N)

Space: O(1)

Sample Input:

averagePair([1,2,3],2.5) // true
averagePair([1,3,3,5,6,7,10,12,19],8) // true
averagePair([-1,0,3,4,5,6], 4.1) // false
averagePair([],4) // false
*/

const averagePair = (arr, avg) => {
    if (!arr || !avg || !arr.length) return false;

    // initialize two pointers one as start and other as end
    let start = 0;
    let end = arr.length - 1;

    // loop over the array and compare the avg and make decision
    while(start <= end) {
        let tempAvg = parseFloat(((arr[start] + arr[end])/2).toFixed(1))
        if (tempAvg < avg) {
            start++;
        } else if (avg < tempAvg) {
            end--;
        } else {
            return true;
        }
    }

    // by default return false
    return false;
}

// console.log(averagePair([1,2,3],2.5));

/*
Question 2 :-

Multiple Pointers - isSubsequence
Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

Examples:

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)
Your solution MUST have AT LEAST the following complexities:

Time Complexity - O(N + M)

Space Complexity - O(1)
*/

const isSubsequence = (characters, text) => {
    // initialize pointers for each character and text
    let characterPointer = 0;
    let textPinter = 0;

    // loop over character and text and find the characters in sequence and if it exists return true
    while (textPinter < text.length || characterPointer > characters.length) {
        if (text[textPinter] === characters[characterPointer]) {
            characterPointer++;
            if (characterPointer === (characters.length)) return true;
        }
        textPinter++;
    }
    
    // return false by default
    return false;
};


// console.log(isSubsequence('abc', 'abracadabra')); // true

/*
Question 3 :-

Given an unsorted array and a number n, find if there exists a pair of elements in the array whose difference is n. This function should return true if the pair exists or false if it does not.

findPair([6,1,4,10,2,4], 2) // true
findPair([8,6,2,4,1,0,2,5,13],1) // true
findPair([4,-2,3,10],-6) // true
findPair([6,1,4,10,2,4], 22) // false
findPair([], 0) // false
findPair([5,5], 0) // true
findPair([-4,4], -8) // true
findPair([-4,4], 8) // true
findPair([1,3,4,6],-2) // true
findPair([0,1,3,4,6],-2) // true
findPair([1,2,3], 0) // false
Part 1 - solve this with the following requirements:

Time Complexity Requirement - O(n)

Space Complexity Requirement - O(n)

Part 2 - solve this with the following requirements:

Time Complexity Requirement - O(n log n)

Space Complexity Requirement - O(1)
x-y=diff

x = y+diff

*/

const findPair = (arr, diff) => {
    // if arr is of smaller size return false
    if (arr.length < 2) return false;
    const iteratedItemsOfArray = [];

    for(let i = 0; i < arr.length; i++) {
        let num = arr[i];
        /*
            x - y = diff
            y = x - diff;
            x = diff + y;
        */

        if (iteratedItemsOfArray.includes(num - diff) || iteratedItemsOfArray.includes(diff + num)) return true;

        iteratedItemsOfArray.push(num);
    }

    // return false by default
    return false;
}

console.log(findPair([6,1,4,10,2,4], 2)); // true
console.log(findPair([8,6,2,4,1,0,2,5,13],1)); // true
console.log(findPair([4,-2,3,10],-6)); // true
console.log(findPair([6,1,4,10,2,4], 22)); // false
console.log(findPair([], 0)); // false
console.log(findPair([5,5], 0)); // true
console.log(findPair([-4,4], -8)); // true
console.log(findPair([-4,4], 8)); // true
console.log(findPair([1,3,4,6],-2)); // true
console.log(findPair([0,1,3,4,6],-2)); // true
console.log(findPair([1,2,3], 0)); // false

