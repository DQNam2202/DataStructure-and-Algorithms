// Create a function that takes an array of strings and return an array, sorted from shortest to longest.

// Output:
// sortByLength(["Google", "Apple", "Microsoft"]) ➞ ["Apple", "Google", "Microsoft"]
// sortByLength(["Leonardo", "Michelangelo", "Raphael", "Donatello"]) ➞ ["Raphael", "Leonardo", "Donatello", "Michelangelo"]
// sortByLength(["Turing", "Einstein", "Jung"]) ➞ ["Jung", "Turing", "Einstein"]

export const sortByLength = (arr) => {
  if (!Array.isArray(arr)) return "Invalid input";
  if (arr.length === 0) return [];
  return arr.sort((a, b) => (a.length > b.length ? 1 : -1));
};
