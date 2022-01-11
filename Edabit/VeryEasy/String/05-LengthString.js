// Write a function that returns the length of a string. Make your function recursive.
// Output:
// length("apple") ➞ 5
// length("make") ➞ 4
// length("a") ➞ 1
// length("") ➞ 0
export const length = (str) => {
  if (typeof str !== "string") return "Invalid string";
  return str.trim().length;
};
