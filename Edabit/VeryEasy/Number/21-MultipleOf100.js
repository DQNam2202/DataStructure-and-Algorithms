//! 21. Create a function that takes an integer and returns true if it's divisible by 100, otherwise return false.
// Output
// divisible(1) ➞ false
// divisible(1000) ➞ true
// divisible(100) ➞ true
export const divisible = (n) => {
  if (typeof n !== "number") return "Invalid number";
  return Math.abs(n) % 100 === 0 ? true : false;
};
