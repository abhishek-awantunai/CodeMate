// find product of elements of an array

console.clear();

const productOfAnArray = (arr) => {
    if (arr.length === 0) return 1;
    return (arr.pop() * productOfAnArray(arr));
};

console.log(productOfAnArray([1,2,3,4,5]));