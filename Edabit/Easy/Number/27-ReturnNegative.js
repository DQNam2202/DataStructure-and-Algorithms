//! 27. Create a function that takes a number as an argument and returns negative of that number. Return negative numbers without any change.

// Output:
// returnNegative(4) ➞ -4
// returnNegative(15) ➞ -15
// returnNegative(-4) ➞ -4
// returnNegative(0) ➞ 0

export const returnNegative = (numb) => {
  if (typeof numb !== "number") return "Invalid number";
  if (numb === 0) return 0;
  return Math.sign(numb) === 1 ? numb * -1 : numb;
};
