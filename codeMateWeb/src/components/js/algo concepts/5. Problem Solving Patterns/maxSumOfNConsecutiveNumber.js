// sliding window pattern

const maxSumOfNConsecutiveNumber = (arr, num) => {
    let sum = 0;
    let index;

    for (let i = 0; i < arr.length; i++) {
        let temp = 0;
        let tempArr = [];
        for (let j = 0; j < num; j++) {
            temp += arr[i+j];
            tempArr.push(i+j);
            if (temp > sum) {
                sum  = temp;
                index = tempArr;
            }
        }
    }

    return {sum, index};
}

const arr = [1,2,3,4,5,6,3,2,3,3,4,5,4,3,2,3,2,4,3,3];
console.log(maxSumOfNConsecutiveNumber(arr, 5));