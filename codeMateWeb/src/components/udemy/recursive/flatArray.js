const flattenArray = (arr) => {
    if (arr.length === 0) return [];

    const el = arr.pop();

    if (Array.isArray(el)) {
        flattenArray(el);
    } else {
        return el;
    }

    return [...flattenArray(arr)];
};

console.log(flattenArray([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));
