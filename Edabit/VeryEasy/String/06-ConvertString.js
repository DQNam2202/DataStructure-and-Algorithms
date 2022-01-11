//! 06. Create a function that takes a string and returns it as an integer.
// Output:
// stringInt("6") ➞ 6
// stringInt("1000") ➞ 1000
// stringInt("12") ➞ 12

// Version 01: using Number()
export const stringIntV1 = (str) => {
  if (typeof str !== "string" || str.trim().length === 0)
    return "Invalid number";
  return Number(str);
};

// Version 02: using parseInt()
export const stringIntV2 = (str) => {
  if (typeof str !== "string" || str.trim().length === 0)
    return "Invalid number";
  return Number.parseInt(str);
};

// Version 03: using +
export const stringIntV3 = (str) => {
  if (typeof str !== "string" || str.trim().length === 0)
    return "Invalid number";
  return +str;
};
