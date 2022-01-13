// Mubashir was reading about currying functions. He needs your help to multiply an array of numbers using currying functions.

// Create a function which takes a array arr of integers as an argument. This function must return another function, which takes a single integer as an argument and returns a new array.

// The returned array should consist of each of the elements from the first array multiplied by the integer.

// Examples
// multiply([1, 2, 3])(2) ➞ [2, 4, 6]
// multiply([4, 6, 5])(10) ➞ [40, 60, 50]
// multiply([1, 2, 3])(0) ➞ [0, 0, 0]

export function multiply(arr) {
  if (!Array.isArray(arr)) return "Invalid input";
  return function initialArr(n) {
    if (typeof n !== "number") return "Invalid input";
    return [...arr].map((item, idx) => item * n);
  };
}
// Version 02: Using arrowfuction + map
const mutiplyNumb = (arr, numb) => {
  if (typeof numb !== "number" || !Array.isArray(arr)) return "Invalid input";
  return arr.map((item, idx) => item * numb);
};
// Version 03: Using for...of
const mutiplyNumbV2 = (arr, numb) => {
  if (typeof numb !== "number" || !Array.isArray(arr)) return "Invalid input";
  let numbList = [];
  for (let item of arr) {
    numbList.push(item * numb);
  }
  return numbList;
};
