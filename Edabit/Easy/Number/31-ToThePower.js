//! Create a function that takes a base number and an exponent number and returns the calculation.

// Examples
// calculateExponent(5, 5) ➞ 3125
// calculateExponent(10, 10) ➞ 10000000000
// calculateExponent(3, 3) ➞ 27

// Using Math.pow
export const calculateExponentV1 = (numb, exp) => {
  if (typeof numb !== "number" || typeof exp !== "number")
    return "Invalid input";
  return Math.pow(Math.abs(numb), Math.abs(exp));
};

// Usign **
export const calculateExponentV2 = (numb, exp) => {
  if (typeof numb !== "number" || typeof exp !== "number")
    return "Invalid input";
  return Math.abs(numb) ** Math.abs(exp);
};
