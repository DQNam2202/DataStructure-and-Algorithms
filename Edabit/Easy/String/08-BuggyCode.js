//! 08. The challenge is to try and fix this buggy code, given the inputs true and false. See the examples below for the expected output.
// Output:
// has_bugs(true) ➞ "sad days"
// has_bugs(false) ➞ "it's a good day"

// Version 01: using if...else
export const hasBugV1 = (bool) => {
  if (typeof bool !== "boolean") return "Invalid input";
  if (bool) return "sad days";
  return "it's a good day";
};
// Version 02: Ternary Operator
export const hasBugV2 = (bool) => {
  if (typeof bool !== "boolean") return "Invalid input";
  return bool ? "sad days" : "it's a good day";
};
