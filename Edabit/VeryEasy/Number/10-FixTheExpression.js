// Fix the code in the Code tab so the function returns true if and only if x is equal to 7.
// Output;
// isSeven(4) ➞ false
// isSeven(9) ➞ false
// isSeven(7) ➞ true

export const isSeven = (number) => {
  if (typeof number !== "number") return false;
  return number === 7 ? true : false;
};
