//! 30. Create a function that accepts a measurement value in inches and returns the equivalent of the measurement value in feet.

// Output:
// inchesToFeet(324) ➞ 27
// inchesToFeet(12) ➞ 1
// inchesToFeet(36) ➞ 3

//? Note: 12 inches = 1 foot

export const inchesToFeet = (inches) => {
  if (typeof inches !== "number") return "Invalid input";
  return inches < 12 ? 0 : inches / 12;
};
