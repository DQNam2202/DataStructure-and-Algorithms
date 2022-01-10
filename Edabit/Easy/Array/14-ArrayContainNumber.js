// Write a function to check if an array contains a particular number.

// Examples
// check([1, 2, 3, 4, 5], 3) ➞ true
// check([1, 1, 2, 1, 1], 3) ➞ false
// check([5, 5, 5, 6], 5) ➞ true
// check([], 5) ➞ false

// Version 01: Using include
export const checkV1 = (arr, ele) => {
  if (!Array.isArray(arr) || typeof ele !== "number") return "Invalid input";
  if (arr.length === 0) return [];
  return arr.includes(ele);
};
// Version 02: Using for
export const checkV2 = (arr, ele) => {
  if (!Array.isArray(arr) || typeof ele !== "number") return "Invalid input";
  if (arr.length === 0) return [];
  let check = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ele) {
      check = true;
    }
  }
  return check;
};
// Version 03: Using forEach
export const checkV3 = (arr, ele) => {
  if (!Array.isArray(arr) || typeof ele !== "number") return "Invalid input";
  if (arr.length === 0) return [];
  let check = false;
  [...arr].forEach((item) => {
    if (item === ele) {
      check = true;
    }
  });
  return check;
};
// Version 04: Using for..of
export const checkV4 = (arr, ele) => {
  if (!Array.isArray(arr) || typeof ele !== "number") return "Invalid input";
  if (arr.length === 0) return [];
  let check = false;
  for (let item of arr) {
    if (item === ele) {
      check = true;
    }
  }
  return check;
};
