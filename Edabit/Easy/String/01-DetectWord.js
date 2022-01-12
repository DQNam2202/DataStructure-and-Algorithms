// A word is on the loose and now has tried to hide amongst a crowd of tall letters! Help write a function to detect what the word is, knowing the following rules:

// The wanted word is in lowercase.
// The crowd of letters is all in uppercase.
// Note that the word will be spread out amongst the random letters, but their letters remain in the same order.

// Output:
// detectWord("UcUNFYGaFYFYGtNUH") ➞ "cat"
// detectWord("bEEFGBuFBRrHgUHlNFYaYr") ➞ "burglar"
// detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment") ➞ "embezzlement"

// Using filter
export const detectWordV1 = (str) => {
  if (typeof str !== "string" || str.length === 0) return "Invalid input";
  let wordList = str.trim().split("");
  let detectList = [...wordList].filter((item) => item === item.toLowerCase());
  return detectList.join("");
};
// Using for...of
export const detectWordV2 = (str) => {
  if (typeof str !== "string" || str.length === 0) return "Invalid input";
  let wordList = str.trim().split("");
  let newWords = [];
  for (let item of wordList) {
    if (item === item.toLowerCase()) {
      newWords.push(item);
    }
  }
  return newWords.join("");
};
// Using for
export const detectWordV3 = (str) => {
  if (typeof str !== "string" || str.length === 0) return "Invalid input";
  let wordList = str.trim().split("");
  let newWords = [];
  for (let i = 0; i < wordList.length; i++) {
    const ele = wordList[i];
    if (ele === ele.toLowerCase()) {
      newWords.push(ele);
    }
  }
  return newWords.join("");
};
// Using forEach
export const detectWordV4 = (str) => {
  if (typeof str !== "string" || str.length === 0) return "Invalid input";
  let wordList = str.trim().split("");
  let newWords = [];
  [...wordList].forEach((item) => {
    if (item === item.toLowerCase()) {
      newWords.push(item);
    }
  });
  return newWords.join("");
};
