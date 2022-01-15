// Return the Index of the First Vowel
// Create a function that returns the index of the first vowel in a string.

// output:
// firstVowel("apple") ➞ 0
// firstVowel("hello") ➞ 1
// firstVowel("STRAWBERRY") ➞ 3
// firstVowel("pInEaPPLe") ➞ 1

export const firstVowel = (str) => {
  if (typeof str !== "string" || str.length === 0) return "Invalid input";
  const vowels = ["a", "i", "u", "o", "e"];
  let wordList = str.trim().toLowerCase().split("");
  let vowelList = wordList.filter((item) => vowels.includes(item));
  return wordList.findIndex((item) => item === vowelList[0]);
};
