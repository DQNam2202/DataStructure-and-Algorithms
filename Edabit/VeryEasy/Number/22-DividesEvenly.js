// Given two integers, a and b, return true if a can be divided evenly by b. Return false otherwise.

// Examples
// dividesEvenly(98, 7) ➞ true
// 98/7 = 14

// dividesEvenly(85, 4) ➞ false
// 85/4 = 21.25
export const dividesEvenly = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") return "Invalid number";
  return Number.isInteger(a / b);
};
