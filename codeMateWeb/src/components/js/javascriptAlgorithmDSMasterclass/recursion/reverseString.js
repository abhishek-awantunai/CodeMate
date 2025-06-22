console.clear();

const reverseString = (str, char) => {
    let text = '';

    if (!str.length) return '';

    text += str.substr(str.length - 1) + reverseString(str.substr(0, str.length - 1), char);

    return text;
};

const input1 = 'this is a sample text to brag about';
const input2 = 'a';


console.log(reverseString(input1, input2));