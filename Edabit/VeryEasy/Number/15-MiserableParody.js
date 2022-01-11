//! 15.Create a function that will handle simple math expressions. The input is an expression in the form of a string.
// Output:
// calculator("23+4") ➞ 27
// calculator("45-15") ➞ 30
// calculator("13+2-5*2") ➞ 5

export const calculator = (str) => {
  if (typeof str !== "string" || str.length === 0) return false;
  return eval(str);
};
