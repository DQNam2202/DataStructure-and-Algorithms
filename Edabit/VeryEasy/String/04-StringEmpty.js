//! 04. Create a function that returns true if a string is empty and false otherwise.
// Output:
// isEmpty("") ➞ true
// isEmpty(" ") ➞ false
// isEmpty("a") ➞ false
//? Notes:  A string containing only whitespaces " " does not count as empty.

// Version 01: using length
export const isEmptyV1 = (str) => {
  if (typeof str !== "string") return "Invalid string";
  return str.length === 0 ? true : false;
};

// Version02: using check ""
export const isEmptyV2 = (str) => {
  if (typeof str !== "string") return "Invalid string";
  return str === "" ? true : false;
};
