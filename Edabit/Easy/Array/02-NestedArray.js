// Create a function that returns true if the first array can be nested inside the second.
// arr1's min is greater than arr2's min.
// arr1's max is less than arr2's max.

// Output:
// canNest([1, 2, 3, 4], [0, 6]) ➞ true
// canNest([3, 1], [4, 0]) ➞ true
// canNest([9, 9, 8], [8, 9]) ➞ false
// Find Max Using for
const findMax = (arr) => {
  if (!Array.isArray(arr)) return "Invalid input";
  if (arr.length === 0) return [];
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};
// Find Min Using for
const findMin = (arr) => {
  if (!Array.isArray(arr)) return "Invalid input";
  if (arr.length === 0) return [];
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
};
// Find Min
const findMaxV2 = (arr) => {
  if (!Array.isArray(arr)) return "Invalid input";
  let max = [...arr].reduce((a, b) => {
    return Math.max(a, b);
  }, 0);
  return max;
};
// Find Min Array
const findMinV2 = (arr) => {
  if (!Array.isArray(arr)) return "Invalid input";
  let min = [...arr].reduce((a, b) => {
    return Math.min(a, b);
  });
  return min;
};
export const canNest = (arr1, arr2) => {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) return "Invalid input";
  if (arr1.length === 0 && arr2.length === 0) return [];
  return findMax(arr1) < findMax(arr2) && findMin(arr1) > findMin(arr2)
    ? true
    : false;
};
// Version 02: Using find max - reduce
export const canNestV2 = (arr1, arr2) => {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) return "Invalid input";
  if (arr1.length === 0 && arr2.length === 0) return [];
  return findMaxV2(arr1) < findMaxV2(arr2) && findMinV2(arr1) > findMinV2(arr2)
    ? true
    : false;
};
