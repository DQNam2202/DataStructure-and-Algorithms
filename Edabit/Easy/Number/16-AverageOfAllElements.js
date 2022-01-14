// Create a function that takes an array as an argument and returns true or false depending on whether the average of all elements in the array is a whole number or not.

// Examples
// isAvgWhole([1, 3]) ➞ true
// isAvgWhole([1, 2, 3, 4]) ➞ false
// isAvgWhole([1, 5, 6]) ➞ true
// isAvgWhole([1, 1, 1]) ➞ true
// isAvgWhole([9, 2, 2, 5]) ➞ false

export const isAvgWhole = (arr) => {
  if (!Array.isArray(arr)) return "Invalid input";
  if (arr.length === 0) return [];
  let sum = 0;
  for (let item of arr) {
    sum += item;
  }
  return Number.isInteger(sum / arr.length) ? true : false;
};
