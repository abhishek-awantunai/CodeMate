const calculateLengthOfDigit = (number) => {
    if (number === 0) return 1;
    number = Math.abs(number);
    let length = 0;
    
    while (number > 0) {
        number = Math.floor(number / 10);
        length++;
    }
    console.log(length);
}

calculateLengthOfDigit(367457634);
