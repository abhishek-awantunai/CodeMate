console.clear();

function reverse(str) {
    str = str.split('');
    let start = 0;
    const mid = Math.floor(str.length / 2);

    while (start < mid) {
        // Swap characters at start and end positions

        const temp = str[start];
        str[start] = str[str.length - start - 1];
        str[str.length - start - 1] = temp;
        start++;
    }

    return str.join('');
}

const reverseRecursively = (str) => {
    if (str.length === 1) return str;

    const strAsArray = str.split('');
    return strAsArray.pop() + reverseRecursively(strAsArray.join(''));
};

// console.log(reverse('awesome')); // 'emosewa'
console.log(reverseRecursively('rithmschool')); // 'loohcsmhtir'
