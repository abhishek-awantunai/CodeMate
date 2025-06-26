const checkPalindromeByRecursion = (str) => {
    if (str.length < 2) return true;

    return (
        str[0] !== str[str.length - 1] && checkPalindromeByRecursion(str.splice(1, str.length - 1))
    );
};

console.log(checkPalindromeByRecursion('applelppa'));
