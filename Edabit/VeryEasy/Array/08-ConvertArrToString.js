// Create a function that takes an array of numbers or letters and returns a string.
// Output:
// arrayToString([1, 2, 3, 4, 5, 6]) ➞ "123456"
// arrayToString(["a", "b", "c", "d", "e", "f"]) ➞ "abcdef"
// arrayToString([1, 2, 3, "a", "s", "dAAAA"]) ➞ "123asdAAAA"

// version 01: Using for..of
export const arrayToStringV1 = (arr) => {
  if (!Array.isArray(arr)) return "Invalid input";
  if (arr.length === 0) return [];
  let newStr = "";
  for (let item of arr) {
    newStr += item;
  }
  return newStr;
};
// version 01: Using Methods Array.join()
export const arrayToStringV2 = (arr) => {
  if (!Array.isArray(arr)) return "Invalid input";
  return arr.length === 0 ? [] : arr.join("");
};
// Using forEach
export const arrayToStringV3 = (arr) => {
  if (!Array.isArray(arr)) return "Invalid input";
  if (arr.length === 0) return [];
  let result = "";
  [...arr].forEach((item) => {
    result += item;
  });
  return result;
};
// Using for
export const arrayToStringV4 = (arr) => {
  if (!Array.isArray(arr)) return "Invalid input";
  if (arr.length === 0) return [];
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
};
