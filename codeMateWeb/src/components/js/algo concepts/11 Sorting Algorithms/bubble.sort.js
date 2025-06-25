/* Bubble Sort :-
    - A sorting algorithm where the largest value bubbles to the top.
    noSwap:- This variable is added for optimization that is to stop extra iterations if the Array is already sorted
    On general basis the BIG O of bubble sort is O(n^2)
    But for almost sorted array its O(n) i.e linear 
*/

// Bubble Sort Implementation

const bubbleSortTheArray = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        let noSwap = true;
        for(let j = 0; j < arr.length - ( i + 1 ); j++) {
            /* As we are comparing Prior element to be greater and them swapping hence we are pushing the 
            larger element to be at the end of the array so we can conclude that we are arranging it in ascending order */
            if (arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noSwap = false;
            }
        }
        if(noSwap) break;
    }
    return arr;
}

const arr1 = [13, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

console.log(bubbleSortTheArray(arr1));