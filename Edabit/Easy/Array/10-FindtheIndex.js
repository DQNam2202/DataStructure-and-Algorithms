// Create a function that takes an array and a string as arguments and return the index of the string.
// Output:
// findIndex(["hi", "edabit", "fgh", "abc"], "fgh") ➞ 2
// findIndex(["Red", "blue", "Blue", "Green"], "blue") ➞ 1
// findIndex(["a", "g", "y", "d"], "d") ➞ 3
// findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple") ➞ 0

// Version01: Using findIndex()
export const findIndex = (array, str) => {
  if (!Array.isArray(array)) return "Invalid input";
  if (array.length === 0 || str.length === 0) return [];
  return [...array].findIndex((item) => item === str.trim());
};
