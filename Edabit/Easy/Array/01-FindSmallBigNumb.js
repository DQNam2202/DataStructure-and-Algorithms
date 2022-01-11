// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

// Examples
// minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
// minMax([2334454, 5]) ➞ [5, 2334454]
// minMax([1]) ➞ [1, 1]

export const minMax = (arr) => {
  if (!Array.isArray(arr)) return "Invalid input";
  if (arr.length === 0) return [];
  return [Math.min(...arr), Math.max(...arr)];
};
console.log(minMax([1, 2, 3, 4, 5]));

// Find Max Using for
const findMax = (arr) => {
  if (!Array.isArray(arr)) return "Invalid input";
  if (arr.length === 0) return [];
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};
// Find Min Using for
const findMin = (arr) => {
  if (!Array.isArray(arr)) return "Invalid input";
  if (arr.length === 0) return [];
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
};

const minMaxV2 = (arr) => {
  if (!Array.isArray(arr)) return "Invalid input";
  if (arr.length === 0) return [];
  return [findMin(arr), findMax(arr)];
};

// Using reduce
// const minMaxV2 = (arr) => {
//   if (!Array.isArray(arr)) return "Invalid input";
//   if (arr.length === 0) return [];
//   let max = [...arr].reduce((a, b) => {
//     return Math.max(a, b);
//   }, 0);

//   let min = [...arr].reduce((a, b) => {
//     return Math.min(a, b);
//   });

//   return [min, max];
// };
