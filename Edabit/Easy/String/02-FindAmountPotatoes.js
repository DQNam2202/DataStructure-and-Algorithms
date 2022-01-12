// Create a function to return the of potatoes there are in a string.

// Output:
// potatoes("potato") ➞ 1
// potatoes("potatopotato") ➞ 2
// potatoes("potatoapple") ➞ 1

export const potatoes = (str) => {
  if (typeof str !== "string" || str.length === 0) return "Invalid input";
  return str.trim().match(/potato/g).length;
};
