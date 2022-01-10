// Create a function to concatenate two integer arrays.

// Output;
// concat([1, 3, 5], [2, 6, 8]) ➞ [1, 3, 5, 2, 6, 8]
// concat([7, 8], [10, 9, 1, 1, 2]) ➞ [7, 8, 10, 9, 1, 1, 2]
// concat([4, 5, 1], [3, 3, 3, 3, 3]) ➞ [4, 5, 1, 3, 3, 3, 3, 3]

// Verions 01: Using concat
export const concatArrayV1 = (arr01, arr02) => {
  if (!Array.isArray(arr01) || !Array.isArray(arr02)) return "Invalid input";
  if (arr01.length === 0 || arr02.length === 0) return [];
  return [...arr01].concat(...arr02);
};
// Version 03: Using Spread operator
export const concatArrayV3 = (arr01, arr02) => {
  if (!Array.isArray(arr01) || !Array.isArray(arr02)) return "Invalid input";
  if (arr01.length === 0 || arr02.length === 0) return [];
  return [...arr01, ...arr02];
};
