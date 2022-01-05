//! 20. Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.
// output:
// comp("AB", "CD") ➞ true
// comp("ABC", "DE") ➞ false
// comp("hello", "edabit") ➞ false
export const comp = (str1, str2) => {
  if (typeof str1 !== "string" || typeof str2 !== "string") return false;
  if (str1.length === 0 || str2.length === 0) return false;
  return str1.trim().length === str2.trim().length ? true : false;
};
