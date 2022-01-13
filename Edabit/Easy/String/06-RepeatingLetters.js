// Repeating Letters
// Create a function that takes a string and returns a string in which each character is repeated once.

// Examples
// doubleChar("String") ➞ "SSttrriinngg"
// doubleChar("Hello World!") ➞ "HHeelllloo  WWoorrlldd!!"
// doubleChar("1234!_ ") ➞ "11223344!!__  "

// using map
export const doubleChar = (str) => {
  if (typeof str !== "string" || str.length === 0) return "Invalid input";
  let wordList = str.split("");
  return [...wordList].map((item, idx) => item.repeat(2)).join("");
};
// Using for..of
const doubleCharV2 = (str) => {
  if (typeof str !== "string" || str.length === 0) return "Invalid input";
  let wordList = str.split("");
  let newArr = [];
  for (let item of wordList) {
    newArr.push(item.repeat(2));
  }
  return newArr.join("");
};
