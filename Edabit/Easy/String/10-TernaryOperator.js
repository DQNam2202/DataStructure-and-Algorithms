// Write a function that uses the ternary operator to return "yeah" if bool is true, and "nope" otherwise.
// Examples
// yeah_nope(true) ➞ "yeah"
// yeah_nope(false) ➞ "nope"

// Using Ternary Operator
export const yeahNope = (bool) => {
  if (typeof bool !== "boolean") return "Invalid Boolean";
  return bool ? "yeah" : "nope";
};
