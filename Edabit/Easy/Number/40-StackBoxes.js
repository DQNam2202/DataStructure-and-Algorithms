// Write a function that takes a number n and returns the number of stacked boxes in a model n levels high, visible and invisible.
// Output:
// +  stackBoxes(1) ➞ 1
// +  stackBoxes(2) ➞ 4
// +  stackBoxes(0) ➞ 0

// Version 01: Using Operator
export const stackBoxesV1 = (n) => {
  if (typeof n !== "number") return "Invalid input";
  if (n === 0) return 0;
  return n === 1 ? 1 : 2 ** n;
};
// Version 02: Using Math.pow()
export const stackBoxesV2 = (n) => {
  if (typeof n !== "number") return "Invalid input";
  if (n === 0) return 0;
  return n === 1 ? 1 : Math.pow(2, n);
};
