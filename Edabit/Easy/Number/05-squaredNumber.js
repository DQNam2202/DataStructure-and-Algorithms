// Output:
// squared(5) ➞ 25
// squared(9) ➞ 81
// squared(100) ➞ 10000

// using Math
export const squaredV1 = (number) => {
  if (typeof number !== "number") return false;
  return number * number;
};

// using Math.pow
export const squaredV2 = (number) => {
  if (typeof number !== "number") return false;
  return Math.pow(number, 2);
};

// using **
export const squaredV3 = (number) => {
  if (typeof number !== "number") return false;
  return number ** 2;
};
