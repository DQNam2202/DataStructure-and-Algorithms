// Given an index and an array, return the value of the array with the given index.

// Output:
// valueAt([1, 2, 3, 4, 5, 6], 10 / 2) ➞ 6
// valueAt([1, 2, 3, 4, 5, 6], 8.0 / 2) ➞ 5
// valueAt([1, 2, 3, 4], 6.535355314 / 2) ➞ 4

// Notes
// Math.floor() can be helpful.

export const valueAt = (arr, operator) => {
  if (!Array.isArray(arr) || typeof operator !== "string")
    return "Invalid input";
  if (arr.length === 0 || operator.length === 0) return [];
  let idx = [...arr].findIndex((item) => item === Math.floor(eval(operator)));
  return arr[idx + 1];
};
