// Given an array of numbers, return an array which contains all the even numbers in the original array, which also have even indices. -> Arrays start at index 0.

// Output; index && item chia hết cho 2
// getOnlyEvens([1, 3, 2, 6, 4, 8]) ➞ [2, 4]
// getOnlyEvens([0, 1, 2, 3, 4]) ➞ [0, 2, 4]
// getOnlyEvens([1, 2, 3, 4, 5]) ➞ []

// Using for
export const getOnlyEvensV1 = (arr) => {
  if (!Array.isArray(arr)) return "Invalid input";
  if (arr.length === 0) return [];
  let arrEven = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0 && i % 2 === 0) {
      arrEven.push(arr[i]);
    }
  }
  return arrEven;
};
// Using filter
export const getOnlyEvensV2 = (arr) => {
  if (!Array.isArray(arr)) return "Invalid input";
  if (arr.length === 0) return [];
  return [...arr].filter((item, idx) => item % 2 === 0 && idx % 2 === 0);
};
