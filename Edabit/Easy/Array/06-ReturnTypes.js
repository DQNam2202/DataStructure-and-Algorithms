//! 06. Create a function that takes an array and returns the types of values (data types) in a new array.
// Output
// arrayValuesTypes([1, 2, "null", []])
// ➞ ["number", "number", "string", "object"]

// arrayValuesTypes(["214", true, false, 2, 2.15, [], null])
// ➞ ["string", "boolean", "boolean", "number", "number", "object", "object"]

// arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214])
// ➞ ["number", "string", "string", "object", "object", "boolean", "number"]

// Using for
export const arrayValuesTypesV1 = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) return "Invalid input";
  let boolList = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    boolList.push(typeof element);
  }
  return boolList;
};
// Using forEach
export const arrayValuesTypesV2 = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) return "Invalid input";
  let boolList = [];
  [...arr].forEach((item) => {
    boolList.push(typeof item);
  });
  return boolList;
};
// Using for...of
export const arrayValuesTypesV3 = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) return "Invalid input";
  let boolList = [];
  for (let item of arr) {
    boolList.push(typeof item);
  }
  return boolList;
};
