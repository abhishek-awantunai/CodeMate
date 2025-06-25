console.clear();
const arr = [7,1,5,3,6,4,2,3,1,6,7,2,8];

const getMaxProfitFromArray = (arr) => {
    let start = 0;
    let maxProfit = -Infinity;

    while (start < arr.length) {
        let end = start + 1;
        while (end < arr.length) {
            const tempMax = arr[end] - arr[start];
            maxProfit = Math.max(tempMax, maxProfit);
            end++;
        }
        start++;
    }

    return maxProfit > 0 ? maxProfit : 0;
}

console.log(getMaxProfitFromArray(arr));

console.clear();
const arr1 = [7,1,19,3,-16,8];

const getMaxProfitFromArrayBetterSolution = (arr) => {
    let iterate = 1;
    let min = arr[0];
    let maxProfit = -Infinity;

    while (iterate < arr.length) {
        maxProfit = Math.max(maxProfit, (arr[iterate] - min));
        min = Math.min(min, arr[iterate]);
        iterate++;
    }

    return maxProfit > 0 ? maxProfit : 0;
}

console.log(getMaxProfitFromArrayBetterSolution(arr1));