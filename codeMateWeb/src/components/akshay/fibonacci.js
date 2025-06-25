console.clear();

const fibonacci = (num) => {
    let first = 0;
    let second = 1;

    console.log(first);
    console.log(second);

    for (let i = 2; i < num; i++) {
        const next = first + second;
        console.log(next);
        first = second;
        second = next;
    } 

}

fibonacci(15);

// 0 1 1 2 3 5 8 13 21 34 55


console.clear();

const fibonacciByrecursion = (num) => {
    if (num < 1) return 1;

    return fibonacciByrecursion(num - 1) + fibonacciByrecursion(num - 2);

}

console.log(fibonacciByrecursion(8));
