/*

Bubble Sort :- In this sorting mechanism the largest element bubbles to the Last of the Array 

*/

const arr = [11, 2, 31, 14, 5, 3, 16, 15, 30];

const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let noSwap = true;
        for (let j = 0; j < arr.length - ( i + 1 ); j++) {
            // In Ascending order
            if (arr[j] > arr[j+1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                noSwap = false;
            }
        }
        if (noSwap) break;
    }
    return arr;
};

console.log(bubbleSort(arr));

const insertionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
    return arr;
};

console.log(insertionSort(arr));

const selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] < arr[j]) {
                const temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
    return arr;
};

console.log(selectionSort(arr));