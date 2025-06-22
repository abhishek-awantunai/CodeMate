let str = "sdjdsksksksdfd";

const findLargestUniqueSubString = (s) => {
  let map = {};
  let start = 0;
  let maxLen = 0;

  for (let i = 0; i < s.length; i++) {
    // check position of character in map
    let current = map[s[i]];
    console.log(i, s[i], current, map);

    if (current != null && start <= current) {
      start = current + 1;
    } else {
      maxLen = Math.max(maxLen, i - start + 1);
    }

    // store last postition of the character
    map[s[i]] = i;
  }

  return maxLen;
};

console.log(findLargestUniqueSubString(str));
