const isAnagram = (s, t) => {
  // check for length if not of equal length then definitely not an anagram so return false
  if (s.length !== t.length) return false;

  let sFrequency = {};
  let tFrequency = {};

  // take first string character frequency
  for (let i = 0; i < s.length; i++) {
    let letter = s[i];
    sFrequency[letter] = (sFrequency[letter] || 0) + 1;
  }

  // take second string character frequency
  for (let i = 0; i < t.length; i++) {
    let letter = t[i];
    tFrequency[letter] = (tFrequency[letter] || 0) + 1;
  }

  // if any of the character count does not match return false
  for (let key in sFrequency) {
    if (sFrequency[key] !== tFrequency[key]) {
      return false;
    }
  }

  return true;
};

console.log(isAnagram("appleass", "peplassa"));

// let t1 = performance.now();
// let t2 = performance.now();
// console.log(t2 - t1 + " seconds elapsed");
