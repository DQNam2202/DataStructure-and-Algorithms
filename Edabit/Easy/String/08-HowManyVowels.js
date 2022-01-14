// Create a function that takes a string and returns the number (count) of vowels contained within it.

// Output:
// countVowels("Celebration") ➞ 5
// countVowels("Palm") ➞ 1
// countVowels("Prediction") ➞ 4

// Using regex
export const countVowelsV1 = (str) => {
  if (typeof str !== "string" || str.length === 0) return "Invalid input";
  return str.trim().match(/[aeoui]/gi).length;
};
// Using includes
export const countVowelsV2 = (str) => {
  if (typeof str !== "string" || str.length === 0) return "Invalid input";
  let wordList = str.trim().split("");
  let vowelsList = ["a", "e", "o", "u", "i"];
  let count = 0;
  for (let item of wordList) {
    if (vowelsList.includes(item)) {
      count++;
    }
  }
  return count;
};
// filter
export const countVowelsV3 = (str) => {
  if (typeof str !== "string" || str.length === 0) return "Invalid input";
  let vowels = "aeoui";
  return [...str].filter((item) => vowels.includes(item)).length;
};
