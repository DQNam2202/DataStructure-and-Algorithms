//! 07.Given two strings, firstName and lastName, return a single string in the format "last, first".

// Output
// concatName("First", "Last") ➞ "Last, First"
// concatName("John", "Doe") ➞ "Doe, John"
// concatName("Mary", "Jane") ➞ "Jane, Mary"

// Version 01: using +
export const concatNameV1 = (firstName, lastName) => {
  if (typeof firstName !== "string" || typeof lastName !== "string")
    return "Invalid name";
  if (firstName.length === 0 || lastName.length === 0) return "Invalid name";
  return lastName.trim() + ", " + firstName.trim();
};

// Version 02: using String template
export const concatNameV2 = (firstName, lastName) => {
  if (typeof firstName !== "string" || typeof lastName !== "string")
    return "Invalid name";
  if (firstName.length === 0 || lastName.length === 0) return "Invalid name";
  return `${lastName.trim()}${", "}${firstName.trim()}`;
};

// Version 03: using array + join()
export const concatNameV3 = (firstName, lastName) => {
  if (typeof firstName !== "string" || typeof lastName !== "string")
    return "Invalid name";
  if (firstName.length === 0 || lastName.length === 0) return "Invalid name";
  let nameList = [lastName.trim(), firstName.trim()];
  return [...nameList].join(", ");
};
