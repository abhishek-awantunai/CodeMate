console.clear();

const anagramFinder = (str1, str2) => {
    let temp = false;
    if (str1.length !== str2.length) {
        return temp;
    }

    let obj1 = {};
    let obj2 = {};

    // Complexity = O(n)
    for (let i = 0; i < str1.length; i++) {
        obj1[str1[i]] = obj1[str1[i]] ? obj1[str1[i]] + 1 : 1;
    }

    // Complexity = O(n)
    for (let i = 0; i < str2.length; i++) {
        obj2[str2[i]] = obj2[str2[i]] ? obj2[str2[i]] + 1 : 1;
    }

    for (let key in obj1) {
        temp = true;
        if (obj1[key] != obj2[key]) {
            temp = false;
            break;
        }
    }

    return temp;
}

// Overall Complexity = O(n)
console.log(anagramFinder('catad', 'adtac'));