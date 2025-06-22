// Linear Search Algorithm

const arr = [12, 3, 4, 5, 55, 53, 233, 43, 433, 34, 23];
const target = 23;

const linearSearchAlgo = (arr, target) => {
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
    }
    return -1;
};

console.log(linearSearchAlgo(arr, target));