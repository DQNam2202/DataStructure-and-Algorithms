// Create a function that returns an array of strings sorted by length in ascending order.

// Output:
// sortByLength(["a", "ccc", "dddd", "bb"]) ➞ ["a", "bb", "ccc", "dddd"]
// sortByLength(["apple", "pie", "shortcake"]) ➞ ["pie", "apple", "shortcake"]
// sortByLength(["may", "april", "september", "august"]) ➞ ["may", "april", "august", "september"]
// sortByLength([]) ➞ []

export const sortByLength = (arr) => {
  if (!Array.isArray(arr)) return "Invalid input";
  if (arr.length === 0) return [];
  return arr.sort((a, b) => (a.length > b.length ? 1 : -1));
};
