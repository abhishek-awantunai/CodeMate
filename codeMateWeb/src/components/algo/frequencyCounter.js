/*
Question 1:-
Frequency Counter - sameFrequency
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:

Time: O(N)

Sample Input:

sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false

*/

const sameFrequency = (num1, num2) => {
    const str1 = num1.toString();
    const str2 = num2.toString();
    
    const obj1 = {};
    const obj2 = {};

    for(let i = 0; i < str1 ; i++) {
        if (str1[i]) {
            obj1[str1[i]] = (obj1[str1[i]] || 0) + 1;
        }
    }

    for(let i = 0; i < str2 ; i++) {
        if (str2[i]) {
            obj2[str2[i]] = (obj2[str2[i]] || 0) + 1;
        }
    }

    for (let key in obj1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }

    return true;
}

// console.log(sameFrequency(182,281));

/*
Question 2:-
Frequency Counter / Multiple Pointers - areThereDuplicates
Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

Examples:

areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true 

*/

const areThereDuplicates = (...args) => {
    const obj = {};

    args.forEach(el => {
        if (el) {
            obj[el] = (obj[el] || 0) + 1;
        }
    })

    for (let key in obj) {
        if (obj[key] > 1) return true;
    }

    return false;
}

// console.log(areThereDuplicates(1,2,3));

/*
Question 3:-
Frequency Counter - constructNote
Write a function called constructNote, which accepts two strings, a message and some letters. The function should return true if the message can be built with the letters that you are given, or it should return false.

Assume that there are only lowercase letters and no space or special characters in both the message and the letters.

Bonus Constraints:

If M is the length of message and N is the length of letters:

Time Complexity: O(M+N)

Space Complexity: O(N)

Examples:

constructNote('aa', 'abc') // false
constructNote('abc', 'dcba') // true
constructNote('aabbcc', 'bcabcaddff') // true
*/

const constructNote = (message, letters) => {
    if (!letters) return false;

    // initialize frequency counters for each message and letter
    const messageFrequency = {};
    const lettersFrequency = {};

    // get frequency of letters in message
    for (let i = 0; i < message.length; i++) {
        messageFrequency[message[i]] = (messageFrequency[message[i]] || 0) + 1;
    }
    
    // get frequency of letters in letter
    for (let i = 0; i < letters.length; i++) {
        lettersFrequency[letters[i]] = (lettersFrequency[letters[i]] || 0) + 1;
    }

    // compare the frequency of both message and letter to see if it will fit 
    for (let key in lettersFrequency) {
        if (lettersFrequency[key] < (messageFrequency[key] ?? 0)) {
            return false;
        }
    }

    // return true by default
    return true;
}

// console.log(constructNote('aabbcc', 'bcabcaddff'));

/*
Question 4:-
Frequency Counter - findAllDuplicates
Given an array of positive integers, some elements appear twice and others appear once. Find all the elements that appear twice in this array. Note that you can return the elements in any order.

findAllDuplicates([4,3,2,7,8,2,3,1]) // array with 2 and 3
findAllDuplicates([4, 3, 2, 1, 0]) // []
findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3]) // array with 3, 2, and 1
Time Complexity - O(n)
*/

const findAllDuplicates = (arr) => {
    if (!arr || !arr.length) return  [];

    const duplicateList = [];

    const duplicateTrackerObject = {};

    arr.forEach(el => {
        duplicateTrackerObject[el] = (duplicateTrackerObject[el] || 0) + 1;
    })

    for (let key in duplicateTrackerObject) {
        if (duplicateTrackerObject[key] === 2) duplicateList.push(parseInt(key));
    }

    return duplicateList;
}

console.log(findAllDuplicates([4,3,2,7,8,2,3,1]));