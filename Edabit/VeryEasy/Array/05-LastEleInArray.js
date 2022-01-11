//! 05. Create a function that accepts an array and returns the last item in the array.

// Output:
// getLastItem([1, 2, 3]) ➞ 3
// getLastItem(["cat", "dog", "duck"]) ➞ "duck"
// getLastItem([true, false, true]) ➞ true

// lenght - 1
export const getLastItemV1 = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) return "Invalid input";
  const cloneArr = [...arr];
  return cloneArr[arr.length - 1];
};

// reverse
export const getLastItemV2 = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) return "Invalid input";
  const reverseList = [...arr].reverse();
  return reverseList[0];
};

// slice
export const getLastItemV3 = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) return "Invalid input";
  return [...arr].slice(-1)[0];
};

// pop()
export const getLastItemV4 = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) return "Invalid input";
  return [...arr].pop();
};
