//! 11. Given a string, return true if its length is even or false if the length is odd.

// Output:
// oddOrEven("apples") ➞ true ->  6 is an even number, so the program outputs true
// oddOrEven("pears") ➞ false ->  5 letters, and 5 is odd return false.
// oddOrEven("cherry") ➞ true

export const oddOrEven = (str) => {
  if (typeof str !== "string" || str.length === 0) return "Invalid input";
  return str.length % 2 === 0 ? true : false;
};
