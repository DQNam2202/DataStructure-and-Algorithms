// Find the Largest Numbers in a Group of Arrays
// Create a function that takes an array of arrays with numbers. Return a new (single) array with the largest numbers of each.

// Output
// findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]
// findLargestNums([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]]) ➞ [-34, -2, 7]
// findLargestNums([[0.4321, 0.7634, 0.652], [1.324, 9.32, 2.5423, 6.4314], [9, 3, 6, 3]]) ➞ [0.7634, 9.32, 9]

export const findLargestNums = (arr) => {
  if (!Array.isArray(arr)) return "Invalid input";
  if (arr.length === 0) return [];
  return arr.map((item, idx) => Math.max(...item));
};

// map - appply
const largestNumb = (arr) => {
  if (!Array.isArray(arr)) return "Invalid input";
  if (arr.length === 0) return [];
  return arr.map((item, idx) => Math.max.apply(null, item));
};

// for..of - Fuction.propeties.apply
const largestNumbV1 = (arr) => {
  if (!Array.isArray(arr)) return "Invalid input";
  if (arr.length === 0) return [];
  let newArr = [];
  for (let item of arr) {
    let value = Math.max.apply(null, item);
    newArr.push(value);
  }
  return newArr;
};
