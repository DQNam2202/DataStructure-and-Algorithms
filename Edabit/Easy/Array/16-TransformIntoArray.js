// A set is a collection of unique items. A set can be formed from an array by removing all duplicate items.

// Examples
// set([1, 3, 3, 5, 5]) ➞ [1, 3, 5]
// set([4, 4, 4, 4]) ➞ [4]
// set([5, 7, 8, 9, 10, 15]) ➞ [5, 7, 8, 9, 10, 15]
// set([3, 3, 3, 2, 1]) ➞ [1, 2, 3]

export const set = (arr) => {
  if (!Array.isArray(arr)) return "Invalid input";
  if (arr.length === 0) return [];
  return [...new Set(arr)].sort((a, b) => (a > b ? 1 : -1));
};
