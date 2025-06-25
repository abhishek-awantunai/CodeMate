const str = "jfhjskfsjdkfdjhfskfhskhfshfsd";

const findWordInAStristrng = (str, word) => {
  // initialize number of instance of word in str to 0
  let count = 0;

  // loop till the length of the string
  for (let i = 0; i < str.length; i++) {
    // loop till the length of the word
    for (let j = 0; j < word.length; j++) {
      // check if the sequence of characters in the string and the word matches
      if (str[i + j] !== word[j]) {
        // if it does not match immediately loop out and start looking from another character in str
        break;
      }

      if (j === word.length - 1) {
        // if j arrives to the length of the word - 1 it means that the exact word matched so now increase counter and star looking for another sequence from the string
        count++;
      }
    }
  }

  return count;
};

console.log(findWordInAStristrng(str, "skf"));
