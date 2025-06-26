const fibonacciNumberByRecursion = (num) => {
    if (num < 3) return 1;

    return fibonacciNumberByRecursion(num - 1) + fibonacciNumberByRecursion(num - 2);
};

console.log(fibonacciNumberByRecursion(7));
