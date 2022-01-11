// Find the Index (Part 1)
// Create a function that finds the index of a given item.

// Output:
// search([1, 5, 3], 5) ➞ 1
// search([9, 8, 3], 3) ➞ 2
// search([1, 2, 3], 4) ➞ -1

// Notes
// If the item is not present, return -1.
export const search = (arr, item) => {
  if (!Array.isArray(arr)) return "Invalid input";
  if (arr.length === 0) return [];
  return [...arr].findIndex((value) => value === item);
};
