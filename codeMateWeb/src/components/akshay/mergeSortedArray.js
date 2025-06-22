const mergeSortedArray = (arr1, arr2) => {
    // initialize array in which the sorted array will be pushed and returned
    let mergedArray = [];

    // initialize pointers for both array
    let pointer1 = 0;
    let pointer2 = 0;

    // loop over each elements in the array and push the element
    while (pointer1 < arr1.length && pointer2 < arr2.length) {
        if (arr1[pointer1] < arr2[pointer2]) {
            mergedArray.push(arr1[pointer1]);
            pointer1++;
        } else {
            mergedArray.push(arr2[pointer2]);
            pointer2++;
        }
    }

    mergedArray = (pointer1 === arr1.length) ? [...mergedArray, ...arr2.slice(pointer2, arr2.length)] : [mergedArray, ...arr1.slice(pointer1, arr1.length)]

    return mergedArray;
}

console.log(mergeSortedArray([1, 2, 3], [2, 3, 4, 5]));