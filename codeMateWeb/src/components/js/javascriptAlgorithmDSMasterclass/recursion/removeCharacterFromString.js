console.clear();

const removeCharacterFromString = (str, char) => {
    let text = '';
    if (str.length < 1) return '';

    if (str[0] !== char) {
        text += str[0];
    }

    return text.concat(removeCharacterFromString(str.substr(1), char));
};

// const str = 'this is a sample text';
const str = 'thi is me babe';
const char = ' ';

console.log(removeCharacterFromString(str, char));