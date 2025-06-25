console.clear();

const findUniqueNumber = (arr) => {
    const frequencyOfNum = {};

    arr.forEach(el => {
        frequencyOfNum[el] = (frequencyOfNum[el] || 0) + 1;
    })

    for (let key in frequencyOfNum) {
        if (frequencyOfNum[key] === 1) return key;
    }

    return null;
}

console.log(findUniqueNumber([3,1,5,4,1,3,5]));

const findUniqueNumberUsingXor = (arr) => {
    let xor = 0;

    arr.forEach(el => {
        xor = xor ^ el;
    })

    return xor;
}

console.log(findUniqueNumberUsingXor([3,1,5,4,1,3,5]));