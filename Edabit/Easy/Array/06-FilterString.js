// Create a function that takes an array of non-negative integers and strings and return a new array without the strings.

// Examples
// filterArray([1, 2, "a", "b"]) ➞ [1, 2]
// filterArray([1, "a", "b", 0, 15]) ➞ [1, 0, 15]
// filterArray([1, 2, "aasf", "1", "123", 123]) ➞ [1, 2, 123]

export const filterArray = (arr) => {
  if (!Array.isArray(arr)) return "Invalid input";
  if (arr.length === 0) return [];
  return arr.filter((item) => typeof item !== "string");
};
