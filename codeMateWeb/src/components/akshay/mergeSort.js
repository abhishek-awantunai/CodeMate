const mergeTwoArray = (arr1, arr2) => {
    let pointer1 = 0;
    let pointer2 = 0;
    const sortedArray = [];

    while (pointer1 < arr1.length && pointer2 < arr2.length) {
        if (arr1[pointer1] < arr2[pointer2]) {
            sortedArray.push(arr1[pointer1])
            pointer1++;
        } else {
            sortedArray.push(arr2[pointer2])
            pointer2++;
        }
    }

    return [...sortedArray, ...arr1.slice(pointer1), ...arr2.slice(pointer2)];
}

const mergeSort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const leftArray = mergeSort(arr.slice(0, mid));
    const rightArray = mergeSort(arr.slice(mid));

    return mergeTwoArray(leftArray, rightArray);
}

console.log(mergeSort([11, 122, 23, 5, 55, 111, 2, 31, 51, 99, 87]));