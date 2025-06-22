/* Selection Sort :-
    - It is similar to Bubble Sort but in this sorting algorithm it places the smallest element in the sorted position.
*/

// Selection Sort Implementation

const selectionSortTheArray = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i; j < arr.length; j++) {
            /* In this loop find the minimum element in the array and based on that swap positions after the end of this loop. */
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        if (i !== minIndex) {
            const temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
            console.log('swapping => ',arr);
        }
    }
    return arr;
}

const arr1 = [13, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

console.log(selectionSortTheArray(arr1));

// It is better than Bubble Sort as in this we keep on swapping 