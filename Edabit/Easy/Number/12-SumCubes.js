// Sum of Cubes
// Create a function that takes in an array of numbers and returns the sum of its cubes.

// Output:
// sumOfCubes([1, 5, 9]) ➞ 855 -> Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
// sumOfCubes([3, 4, 5]) ➞ 216
// sumOfCubes([2]) ➞ 8
// sumOfCubes([]) ➞ 0

// Using math
export const sumOfCubesV1 = (arr) => {
  if (!Array.isArray(arr)) return "Invalid input";
  if (arr.length === 0) return 0;
  return [...arr].reduce((sum, item) => {
    return (sum += Math.pow(item, 3));
  }, 0);
};
// Using operator
export const sumOfCubesV2 = (arr) => {
  if (!Array.isArray(arr)) return "Invalid input";
  if (arr.length === 0) return 0;
  return [...arr].reduce((sum, item) => {
    return (sum += item ** 3);
  }, 0);
};
// Using for..of
const sumOfCubeV3 = (arr) => {
  if (!Array.isArray(arr)) return "Invalid input";
  if (arr.length === 0) return 0;
  let sum = 0;
  for (let item of arr) {
    sum += item ** 3;
  }
  return sum;
};
// using forEach()
const sumOfCubeV4 = (arr) => {
  if (!Array.isArray(arr)) return "Invalid input";
  if (arr.length === 0) return 0;
  let sum = 0;
  [...arr].forEach((item) => {
    sum += Math.pow(item, 3);
  });
  return sum;
};
