const str = 'harold said ha in the morning while she was drinking tea';
const word = 'tea';

const findWordInString = (str, word) => {
    for (let i = 0; i < str.length; i++) {
        if (str.slice(i, i + word.length) === word) {
            return i;
        }
    }
    return -1;
}

console.log(findWordInString(str, word));