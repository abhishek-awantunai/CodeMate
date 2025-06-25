console.clear();

const binarySearchAlgorithm = (arr, searchTerm) => {
    if (arr.length === 0) return -1;

    let i = 0;
    let j = arr.length - 1;

    while (i < j) {
        let midIndex = Math.floor((i + j) / 2);
        if (arr[midIndex] < searchTerm) {
            i = midIndex + 1;
        } else if (arr[midIndex] > searchTerm) {
            j = midIndex - 1;
        } else {
            return midIndex;
        }
    }

    return -1
}

// console.log(binarySearchAlgorithm([-3, -3, -3, -3, -2, -2, -2, -1, 0, 1, 1, 1, 1, 1, 1, 1, 2, 3, 4, 5, 6], 1));
console.log(binarySearchAlgorithm([-3, -2, -1, 0, 1, 2, 3, 4, 5, 6], 2));
// Overall Complexity = O(n)