function isPalindrome(s) {
  s = s.replace(/[^a-zA-Z0-9]+/gi, "").toLowerCase();
  return s.split("").reverse().join("") === s;
}

console.log(isPalindrome("0P"));
