// Output:
// maxNum(3, 7) ➞ 7
// maxNum(-1, 0) ➞ 0
// maxNum(1000, 400) ➞ 1000

// Version 01: flag
export const maxNumV1 = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") return false;
  let flag = a;
  if (b > flag) return (flag = b);
  return flag;
};

// Version 02: math.max
export const maxNumV2 = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") return false;
  return Math.max(...[a, b]);
};

// Version 03: using if...else;
export const maxNumV3 = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") return false;
  return a > b ? a : b;
};
