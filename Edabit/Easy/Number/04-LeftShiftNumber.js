// Write a function that mimics (without the use of <<) the left shift operator and returns the result from the two given integers.

// Output;
// shiftToLeft(5, 2) ➞ 20
// shiftToLeft(10, 3) ➞ 80
// shiftToLeft(-32, 2) ➞ -128
// shiftToLeft(-6, 5) ➞ -192
// shiftToLeft(12, 4) ➞ 192
// shiftToLeft(46, 6) ➞ 2944

// Using left shift operator
export const shiftToLeftV1 = (numb1, numb2) => {
  if (typeof numb1 !== "number" || typeof numb2 !== "number")
    return "Invalid input";
  return numb1 << numb2;
};
// Using Math
export const shiftToLeftV2 = (numb1, numb2) => {
  if (typeof numb1 !== "number" || typeof numb2 !== "number")
    return "Invalid input";
  return numb1 * Math.pow(2, numb2);
};
