console.clear();

const countUniqueValues = (arr) => {
    if (arr.length === 0) return 0;
    let left = 0;
    let unique = 1;

    for (let right = 1; right < arr.length; right++) {
        if (arr[left] !== arr[right]) {
            unique++;
            left = right;
        }
    }

    return unique;
}

// Overall Complexity = O(n)
console.log(countUniqueValues([-3, -3, -3, -3, -2, -2, -2, -1, 0, 1, 1, 1, 1, 1, 1, 1, 2, 3, 4, 5, 6]));