// Absolute Sum
// Take an array of integers (positive or negative or both) and return the sum of the absolute value of each element.

// output:
// getAbsSum([2, -1, 4, 8, 10]) ➞ 25
// getAbsSum([-3, -4, -10, -2, -3]) ➞ 22
// getAbsSum([2, 4, 6, 8, 10]) ➞ 30
// getAbsSum([-1]) ➞ 1

export const getAbsSum = (arr) => {
  if (!Array.isArray(arr)) return "Invalid input";
  if (arr.length === 0) return [];
  let sum = 0;
  for (let item of arr) {
    sum += Math.abs(item);
  }
  return sum;
};
