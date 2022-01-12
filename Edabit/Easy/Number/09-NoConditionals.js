// Write a function that returns 0 if the input is 1, and returns 1 if the input is 0.
// Output;
// flip(1) ➞ 0
// flip(0) ➞ 1

// Conditionals
export const flipV1 = (numb) => {
  if (typeof numb !== "number") return "Invalid input";
  if (numb === 1) return 0;
  return 1;
};
// Ternary operators
export const flipV2 = (numb) => {
  if (typeof numb !== "number") return "Invalid input";
  return numb === 1 ? 0 : 1;
};
// Negations
export const flipV3 = (numb) => {
  if (typeof numb !== "number") return "Invalid input";
  return !numb ? 1 : 0;
};
// Bit operators
export const flipV4 = (numb) => {
  if (typeof numb !== "number") return "Invalid input";
  return Number(numb.toString(2)) === 1 ? 0 : 1;
};
