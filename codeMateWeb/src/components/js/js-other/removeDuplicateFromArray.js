function getTotal(...nums) {
  return Array.from(new Set(nums));
}

console.log(getTotal(20, 10, 20, 10));
