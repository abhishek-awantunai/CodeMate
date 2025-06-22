const checkForPalindrome = (str) => {
    let length = str.length;
    let midPoint = Math.floor(length / 2);

    while(midPoint < str.length) {
        const num = length - midPoint;
        if (str[midPoint - 1] !== str[num]) return false;
        midPoint++;
    }

    return true;
}

// console.log(checkForPalindrome('12721'));

const checkNumberIsPalindrome = (num) => {
    const originalNum = num;
    let len = '';

    while(num > 0){
        num = Math.floor(num/10);
        len += num%10;
    }

    len += num % 10;
    return parseInt(len) === originalNum;
}

// console.log(checkNumberIsPalindrome(1234321));

const checkStringIsPalindrome = (str) => {
    const length = str.length;
    let mid = length % 2 === 1 ? Math.ceil(length / 2) : Math.floor(length / 2);


    while (mid < length) {
        if (str[mid] != str[length - mid - 1]) return false;
        mid++;
    }

    return true;
}

// console.log(checkStringIsPalindrome('abccba'));
