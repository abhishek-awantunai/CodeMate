const flattenArray = (arr) => {
    if (!Array.isArray(arr)) return arr;

    const el = arr.pop();

    if (Array.isArray(el)) {
        flattenArray(el);
    } else {
        return el;
    }

    return [...flattenArray(arr)];
};

console.log(flattenArray([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));
