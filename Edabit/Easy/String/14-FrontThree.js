// Create a function that takes a string; we'll say that the front is the first three characters of the string. If the string length is less than three characters, the front is whatever is there. Return a new string, which is three copies of the front.

// Output:
// frontThree("Python") ➞ "PytPytPyt"
// frontThree("Cucumber") ➞ "CucCucCuc"
// frontThree("bioshock") ➞ "biobiobio"

// slice
export const frontThreeV1 = (str) => {
  if (typeof str !== "string" || str.length === 0) return "Invalid input";
  return str.trim().slice(0, 3).repeat(3);
};
// substring
export const frontThreeV2 = (str) => {
  if (typeof str !== "string" || str.length === 0) return "Invalid input";
  return str.trim().substring(0, 3).repeat(3);
};
