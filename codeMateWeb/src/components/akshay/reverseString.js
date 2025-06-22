console.clear();
const arr = ['h', 'e', 'l', 'l', 'o', 'b','a','b','y'];

const reverseArray = (arr) => {

    // Get mid length of the array
    let mid = (arr.length % 2 === 0) ? Math.floor(arr.length / 2) : Math.ceil(arr.length / 2);

    // loop over the array from midway to end of the array
    while (mid < arr.length) {
        let temp = arr[mid];
        arr[mid] = arr[arr.length - mid - 1];
        arr[arr.length - mid - 1] = temp; 
        mid++;
    }

    return arr;
}

console.log(reverseArray(arr));