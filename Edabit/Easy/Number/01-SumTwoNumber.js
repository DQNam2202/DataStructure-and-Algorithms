//! 01. Create a function that takes two numbers as arguments and return their sum.
//Output:
// addition(3, 2) ➞ 5
// addition(-3, -6) ➞ -9
// addition(7, 3) ➞ 10
export const additionV1 = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") return "Invalid number";
  return a + b;
};
