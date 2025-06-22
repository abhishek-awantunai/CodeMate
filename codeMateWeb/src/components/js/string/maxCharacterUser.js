/*

Find charcter with max occurence in the given string

*/
const maxCharsUsed = (str) => {
  let stringCountTracker = {};
  let temp = 0;
  let character = "";

  // loop over and find string character frequency
  for (let char of str) {
    stringCountTracker[char] = (stringCountTracker[char] || 0) + 1;
    // keep track of temporary char count to get the character length with max occurance
    if (stringCountTracker[char] > temp) {
      character = char;
      temp = stringCountTracker[char];
    }
  }

  return { character, temp };
};

console.log(maxCharsUsed("4444456tdetet34543543"));
