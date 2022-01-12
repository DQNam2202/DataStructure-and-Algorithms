// Create a function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.

// Output:
// charCount("a", "edabit") ➞ 1
// charCount("c", "Chamber of secrets") ➞ 1
// charCount("b", "big fat bubble") ➞ 4

// Using filter
export const charCountV1 = (myChar, str) => {
  if (typeof myChar !== "string" || typeof str !== "string")
    return "Invalid input";
  if (myChar.length === 0 || str.length === 0) return "Invalid input";
  let wordsList = str.trim().split("");
  return [...wordsList].filter((item, idx) => item === myChar.trim()).length;
};
