// Create a function that takes a string (a random name). If the last character of the name is an "n", return true, otherwise return false.

// Output;
// isLastCharacterN("Aiden") ➞ true
// isLastCharacterN("Piet") ➞ false
// isLastCharacterN("Bert") ➞ false
// isLastCharacterN("Dean") ➞ true

// Version 01:
export const isLastCharacterN = (str) => {
  if (typeof str !== "string" || str.length === 0) return "Invalid input";
  return str.trim().endsWith("n");
};
// Version 02: Using lastIndexOf - str.split()
