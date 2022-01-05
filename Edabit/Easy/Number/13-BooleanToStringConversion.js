// Create a function that takes a boolean variable flag and returns it as a string.
// Output
// boolToString(true) ➞ "true"
// boolToString(false) ➞ "false"

// Version 01: using toString()
export const boolToStringV1 = (flag) => {
  if (typeof flag !== "boolean") return false;
  return flag ? "true" : "false";
};
// Version 02: using template literal
export const boolToStringV2 = (flag) => {
  if (typeof flag !== "boolean") return false;
  return `${flag}`;
};
