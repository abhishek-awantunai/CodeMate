console.clear();

const sumZeroFinder = (arr) => {

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const sum = arr[left] + arr[right];
        if (sum > 0) {
            right--;
        } else if (sum < 0) {
            left++;
        } else {
            return [left, right];
        }
    }
}

// Overall Complexity = O(n)
console.log(sumZeroFinder([-3, -2, -1, 0, 1, 2, 3, 4, 5, 6]));