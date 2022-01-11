//! 04. According to the lodash documentation, _.drop creates a slice of an array with n elements dropped from the beginning.

// Examples
// drop([1, 2, 3], 1) ➞ [2, 3]
// drop([1, 2, 3], 2) ➞ [3]
// drop([1, 2, 3], 5) ➞ []
// drop([1, 2, 3], 0) ➞ [1, 2, 3]

// using slice
export const dropV1 = (arr, val = 1) => {
  if (!Array.isArray(arr) || typeof val !== "number") return "Invalid input";
  return arr.slice(val);
};
// using splice
export const dropV2 = (arr, val = 1) => {
  if (!Array.isArray(arr) || typeof val !== "number") return "Invalid input";
  return arr.splice(val);
};
// using for
export const dropV3 = (arr, val = 1) => {
  if (!Array.isArray(arr) || typeof val !== "number") return "Invalid input";
  let numbList = [];
  if (val >= arr.length) {
    return [];
  } else if (val === 0) {
    return arr;
  } else {
    for (let i = val; i < arr.length; i++) {
      const element = arr[i];
      numbList.push(element);
    }
    return numbList;
  }
};
