//! 13. Create a function that takes a name and returns a greeting in the form of a string. Don't use a normal function, use an arrow function.

// Output:
// helloName("Gerald") ➞ "Hello Gerald!"
// helloName("Tiffany") ➞ "Hello Tiffany!"
// helloName("Ed") ➞ "Hello Ed!"

// using operator
export const helloNameV1 = (str) => {
  if (typeof str !== "string" || str.length === 0) return "Invalid input";
  return "Hello" + " " + str.trim() + "!";
};

// using concat
export const helloNameV2 = (str) => {
  if (typeof str !== "string" || str.length === 0) return "Invalid input";
  return "Hello".concat(" ", str.trim(), "!");
};

// using String Template
export const helloNameV3 = (str) => {
  if (typeof str !== "string" || str.length === 0) return "Invalid input";
  return `Hello ${str.trim()}!`;
};
