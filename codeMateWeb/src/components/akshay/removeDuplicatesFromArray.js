console.clear();

const arr = [1, 2, 3, 4, 4, 4, 5, 6, 7, 7, 8, 8, 8, 8, 8, 9];

const removeDuplicatesFromArray = (arr) => {
    // initialize two pointers left and right that will loop over 
    let left = -1;
    let right = 0;
    const distinctArray = [];

    // loop over the length of the array
    while (right < arr.length) {
        // increment left only when the element at left and right are different and also push them in the distinctArray
        if (arr[left] != arr[right]) {
            left = right;
            distinctArray.push(arr[left]);
        }


        // incerement right to traverse over the overall length of the array
        right++;
    }

    return distinctArray;
}

console.log(removeDuplicatesFromArray(arr));


const removeDuplicatesFromArrayByPuttingInSameArray = (arr) => {
    // initialize two pointers left and right that will loop over 
    let left = 0;
    let right = 0;

    // loop over the length of the array
    while (right < arr.length) {
        // increment left only when the element at left and right are different and also push them in the distinctArray
        if (arr[right] > arr[left]) {
            left++;
            arr[left] = arr[right];
        }

        // incerement right to traverse over the overall length of the array
        right++;
    }

    return arr.slice(0, left + 1);
}
console.log(removeDuplicatesFromArrayByPuttingInSameArray(arr));


/*
    Remove the desired number from the array
*/

const arr1 = [8, 7, 3, 4, 1, 2, 3, 5, 6, 21, 3, 5, 7, 3, 2, 1, 2, 3, 4, 4, 4, 5, 6, 7, 7, 8, 8, 8, 8, 8, 9];

const removeTheNumberGivenFromArrayAndCountOtherItems = (arr, num) => {
    console.log(arr.length)

    // create a pointer that will loop ove the array 
    let right = 0;

    // create a pointer where we will put num and keep track of it
    let left = 0;

    // loop over array and find the num and adjust it to the start
    while (right < arr.length) {
        if (arr[right] !== num) {
            arr[left] = arr[right];
            left++;
        }
        right++;
    }

    // return the remaining length of th earray
    return left;
}

console.log(removeTheNumberGivenFromArrayAndCountOtherItems(arr1, 8));

const arr2 = [8, 7, 3, 4, 1, 2, 3, 5, 6, 21, 3, 5, 7, 3, 2, 1, 2, 3, 4, 4, 4, 5, 6, 7, 7, 8, 8, 8, 8, 8, 9];

const removeTheNumberGivenFromArrayAndCountOtherItems = (arr, num) => {
    console.log(arr.length)

    // create a pointer that will loop ove the array 
    let right = 0;

    // create a pointer where we will put num and keep track of it
    let left = 0;

    // loop over array and find the num and adjust it to the start
    while (right < arr.length) {
        if (arr[right] !== num) {
            arr[left] = arr[right];
            left++;
        }
        right++;
    }

    // return the remaining length of th earray
    return left;
}

console.log(removeTheNumberGivenFromArrayAndCountOtherItems(arr2, 8));