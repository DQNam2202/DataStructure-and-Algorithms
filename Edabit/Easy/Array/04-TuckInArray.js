// Create a function that takes two arrays and insert the second array in the middle of the first array.

// Output;
// tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]) ➞ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// tuckIn([15,150], [45, 75, 35]) ➞ [15, 45, 75, 35, 150]
// tuckIn([[1, 2], [5, 6]], [[3, 4]]) ➞ [[1, 2], [3, 4], [5, 6]]

// Using Spread Operator
export const tuckIn = (arr1, arr2) => {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) return "Invalid input";
  if (arr1.length === 0 || arr2.length === 0) return [];
  let arr1Clone = [...arr1];
  return [arr1Clone[0], ...arr2, arr1Clone[1]];
};

// Version 1:  Using Concat - Sort
const tuckInV1 = (arr1, arr2) => {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) return "Invalid input";
  if (arr1.length === 0 || arr2.length === 0) return [];
  return [...arr1].concat(...arr2).sort((a, b) => (a > b ? 1 : -1));
};
// Version 02: Spread Operator
const tuckInV2 = (arr1, arr2) => {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) return "Invalid input";
  if (arr1.length === 0 || arr2.length === 0) return [];
  return [...arr1, ...arr2].sort((a, b) => (a > b ? 1 : -1));
};
