/**
Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode"
return 2.

*/

let firstUniqChar = (s) => {
  const frequencyChar = {};

  // get character Frequency
  for (let char of s) {
    frequencyChar[char] = (frequencyChar[char] || 0) + 1;
  }


  // return first key whose count is 1 i.e which occurs only once in the string

  for (let key in frequencyChar) {
    if (frequencyChar[key] === 1) {
      return key;
    }
  }

  return -1;
};

console.log(firstUniqChar("loveleetcode"));
