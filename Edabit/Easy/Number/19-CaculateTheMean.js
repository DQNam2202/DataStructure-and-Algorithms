// Create a function that takes an array of numbers and returns the mean (average) of all those numbers.

// Output:
// mean([1, 0, 4, 5, 2, 4, 1, 2, 3, 3, 3]) ➞ 2.55
// mean([2, 3, 2, 3]) ➞ 2.50
// mean([3, 3, 3, 3, 3]) ➞ 3.00

// Using for
export const meanV1 = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) return "Invalid input";
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    const ele = arr[i];
    sum += ele;
  }
  return parseFloat((sum / arr.length).toFixed(2));
};
// Using forEach
export const meanV2 = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) return "Invalid input";
  let sum = 0;
  [...arr].forEach((item) => {
    sum += item;
  });
  return parseFloat((sum / arr.length).toFixed(2));
};
// Using for..of
export const meanV3 = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) return "Invalid input";
  let sum = 0;
  for (let item of arr) {
    sum += item;
  }
  return parseFloat((sum / arr.length).toFixed(2));
};
// Using reduce
export const meanV4 = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) return "Invalid input";
  let total = [...arr].reduce((sum, item) => {
    return (sum += item);
  }, 0);
  return parseFloat((total / arr.length).toFixed(2));
};
