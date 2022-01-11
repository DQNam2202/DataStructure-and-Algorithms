//! 39. Create a function that takes a number as an argument and returns "even" for even numbers and "odd" for odd numbers.

// Output:
// isEvenOrOdd(3) ➞ "odd"
// isEvenOrOdd(146) ➞ "even"
// isEvenOrOdd(19) ➞ "odd"

export const isEvenOrOdd = (numb) => {
  if (typeof numb !== "number") return "Invalid input";
  return numb % 2 === 0 ? "even" : "odd";
};
