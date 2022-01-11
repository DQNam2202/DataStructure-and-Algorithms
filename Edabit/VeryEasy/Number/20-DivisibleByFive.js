//! 20.Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.
// output
// divisibleByFive(5) ➞ true
// divisibleByFive(-55) ➞ true
// divisibleByFive(37) ➞ false

export const divisibleByFive = (n) => {
  if (typeof n !== "number") return "Invalid number";
  return Math.abs(n) % 5 === 0 ? true : false;
};
