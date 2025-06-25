// Multiple Pointer

const sumZero = (arr) => {
    console.log(arr);
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        if ((arr[left] + arr[right]) > 0) {
            right--;
        } else if ((arr[left] + arr[right]) < 0) {
            left++;
        } else {
            return [left, right];
        }
    }

    return [-1, -1];
}

const arr = [-12, -3, -2, -1, 0, 2, 8, 9, 12];

console.log(sumZero(arr))