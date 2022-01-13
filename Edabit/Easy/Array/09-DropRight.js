// Learn Lodash (4): _.dropRight, Drop the Last Elements of an Array
// According to the lodash documentation, _.dropRight Creates a slice of an array with n elements dropped from the end.

// This challenge requires you to write your own version of this function without using lodash so that you can better understand it works.

// Examples
// dropRight([1, 2, 3]) ➞ [1, 2]
// dropRight([1, 2, 3], 2) ➞ [1]
// dropRight([1, 2, 3], 5) ➞ []
// dropRight([1, 2, 3], 0) ➞ [1, 2, 3]

export const dropRight = (arr, numb = 1) => {
  if (typeof numb !== "number" || !Array.isArray(arr)) return "Invalid input";
  if (arr.length === 0 || numb > arr.length) return [];
  return [...arr].slice(0, arr.length - numb);
};
