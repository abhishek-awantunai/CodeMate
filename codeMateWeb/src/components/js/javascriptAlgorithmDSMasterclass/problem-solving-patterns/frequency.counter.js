console.clear();

const sameFrequency = (arr1, arr2) => {
    let temp = false;
    let obj1 = {};
    let obj2 = {};
    if (arr1.length !== arr2.length) {
        return temp;
    }

    // Complexity = O(n)
    for (let i = 0; i < arr1.length; i++) {
        obj1[arr1[i]] = obj1[arr1[i]] ? obj1[arr1[i]] + 1 : 1;
    }

    // Complexity = O(n)
    for (let i = 0; i < arr2.length; i++) {
        obj2[arr2[i]] = obj2[arr2[i]] ? obj2[arr2[i]] + 1 : 1;
    }

    // Complexity = O(n)
    for (let key in obj1) {
        if (obj2[key * key] == obj1[key]) {
            temp = true;
        } else {
            temp = false;
            break;
        }
    }

    return temp;
}

// Overall Complexity = O(n)
console.log(sameFrequency([1, 2, 5], [1, 25, 4]));