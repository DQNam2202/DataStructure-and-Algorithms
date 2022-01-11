//! 03.Create a function that returns true when num1 is equal to num2; otherwise return false.
// Output:
// isSameNum(4, 8) ➞ false
// isSameNum(2, 2) ➞  true
// isSameNum(2, "2") ➞ false

export const isSameNumb = (numb1, numb2) => {
  if (typeof numb1 !== "number" || typeof numb2 !== "number") return false;
  return numb1 === numb2 ? true : false;
};
