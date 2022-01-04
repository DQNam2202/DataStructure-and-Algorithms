//! 02. Write a function that takes an integer minutes and converts it to seconds.
// Output:
// convert(5) ➞ 300
// convert(3) ➞ 180
// convert(2) ➞ 120
export const convert = (minutes) => {
  const PER_SECOND = 60;
  if (typeof minutes !== "number") return "Invalid number";
  return minutes * PER_SECOND;
};
