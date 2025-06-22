// Frequency Counter

const sameArray = (arr1, arr2) => {
    const arrayOneFrequency = {};
    const arrayTwoFrequency = {};
    
    if (arr1.length !== arr2.length) {
        return false;
    }
    
    for (let val of arr1) {
        arrayOneFrequency[val] = (arrayOneFrequency[val] || 0) + 1
    }
    
    for (let val of arr2) {
        arrayTwoFrequency[val] = (arrayTwoFrequency[val] || 0) + 1
    }

    for(let key in arrayOneFrequency) {
        if (arrayOneFrequency[key] !== arrayTwoFrequency[key*key]) {
            return false;
        }
    }

    return true;
}

console.log(sameArray([1,2,3,4], [16,1,9,9]));