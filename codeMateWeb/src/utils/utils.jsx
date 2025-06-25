export const isPrime = (num) => {
    if (num < 2) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    
    const sqrt = Math.sqrt(num);
    for (let i = 3; i <= sqrt; i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

export const getNthPrimeNumber = (num) => {
    const n = parseInt(num);
    if (isNaN(n) || n <= 0) return 0;
    
    let count = 0;
    let candidate = 2;
    
    while (true) {
        if (isPrime(candidate)) {
            count++;
            if (count === n) return candidate;
        }
        candidate = candidate === 2 ? 3 : candidate + 2;
    }
}