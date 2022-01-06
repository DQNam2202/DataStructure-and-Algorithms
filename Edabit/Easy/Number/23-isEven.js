// Write a function that returns true if the given integer is even, and false if it's odd.

// Version 01: using if...else
export const isEvenV1 = (numb) => {
  if (typeof numb !== "number") return "Invalid number";
  if (numb % 2 === 0) return true;
  return false;
};
// Version 02: using (Ternary Operator)
export const isEvenV2 = (numb) => {
  if (typeof numb !== "number") return "Invalid number";
  return numb % 2 === 0 ? true : false;
};
