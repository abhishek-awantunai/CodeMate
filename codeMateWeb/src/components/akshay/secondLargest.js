console.log('SECOND LARGEST FILE');
const input1 = [1,23,34,1,24,232,3,423,3,43,23,124,3,42,1232,12,32,2];
const input2 = [4, 9, 10, 2, 8, 10, 7, 1];

const findLargestInAnArray = (arr = []) => {
    let max = -Infinity;

    arr.forEach(element => {
        max = Math.max(max, element)
    });

    return max;
}

// console.log(findLargestInAnArray(input1));

const findSecondLargestInAnArray = (arr = []) => {
    let max = -Infinity;

    arr.forEach(element => {
        max = Math.max(max, element)
    });

    let newArr = arr.filter(el => el !== max);

    let newMax = -Infinity;
    newArr.forEach(element => {
        newMax = Math.max(newMax, element)
    });

    return newMax;
}

// console.log(findSecondLargestInAnArray(input1));


const findSecondLargestInAnArrayNewApproach = (arr = []) => {
    if (!arr.length) return null;
    
    if (arr.length < 2) return arr[0];
    
    arr.sort((a,b) => b - a);
    
    return arr[1];
}

// console.log(findSecondLargestInAnArrayNewApproach(input1));

const findSecondLargestInAnArrayAkshayApproach = (arr = []) => {
    if (!arr.length) return null;    
    if (arr.length < 2) return arr[0];

    let firstLargest = -Infinity;
    let secondLargest = -Infinity;

    arr.forEach(el => {
        if (el > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = el;
        } else if (el > secondLargest) {
            secondLargest = el;
        }
    })

    return secondLargest;
}

console.log(findSecondLargestInAnArrayAkshayApproach([-1,-21]));
