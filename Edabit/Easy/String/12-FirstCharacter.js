// Word without First Character
//! 12. Create a function that takes a word and returns the new word without including the first character.

// Output:
// newWord("apple") ➞ "pple"
// newWord("cherry") ➞ "herry"
// newWord("plum") ➞ "lum"

// Using for
export const newWordV1 = (word) => {
  if (typeof word !== "string" || word.length === 0) return "Invalid input";
  let wordList = word.trim().split("");
  let newStr = [];
  for (let i = 1; i <= wordList.length; i++) {
    newStr.push(wordList[i]);
  }
  return newStr.join("");
};
// Using slice
export const newWordV2 = (word) => {
  if (typeof word !== "string" || word.length === 0) return "Invalid input";
  return [...word].slice(1).join("");
};
// Using splice
export const newWordV3 = (word) => {
  if (typeof word !== "string" || word.length === 0) return "Invalid input";
  return [...word].splice(1, word.length - 1).join("");
};
// Using shift()
export const newWordV4 = (word) => {
  if (typeof word !== "string" || word.length === 0) return "Invalid input";
  const cloneWord = [...word];
  cloneWord.shift();
  return cloneWord.join("");
};
