//! 16. Create a function that takes two arguments. Both arguments are integers, a and b. Return true if one of them is 10 or if their sum is 10.
// Output:
// makesTen(9, 10) ➞ true
// makesTen(9, 9) ➞ false
// makesTen(1, 9) ➞ true

export const makesTen = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") return false;
  return a === 10 || b === 10 || a + b === 10 ? true : false;
};
