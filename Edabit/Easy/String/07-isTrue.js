// Is it True?
// In this challenge you will be given a relation between two numbers, written as a string. Write a function that determines if the relation is true or false.

// Examples
// isTrue("2=2") ➞ true
// isTrue("8<7") ➞ false
// isTrue("5=13") ➞ false
// isTrue("15>4") ➞ true

export const isTrue = (str) => {
  if (typeof str !== "string" || str.length === 0) return "Invalid input";
  let numb = eval(str);
  return numb ? true : false;
};
console.log(isTrue("32>21"));
