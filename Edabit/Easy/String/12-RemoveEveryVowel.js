// Remove Every Vowel from a String
// Create a function that takes a string and returns a new string with all vowels removed.

// Examples
// removeVowels("I have never seen a thin person drinking Diet Coke.")
// ➞ " hv nvr sn  thn prsn drnkng Dt Ck."

// removeVowels("We're gonna build a wall!")
// ➞ "W'r gnn bld  wll!"

// removeVowels("Happy Thanksgiving to all--even the haters and losers!")
// ➞ "Hppy Thnksgvng t ll--vn th htrs nd lsrs!"

export const removeVowels = (str) => {
  if (typeof str !== "string" || str.length === 0) return "Invalid input";
  let wordList = str.trim().split("");
  let vowels = ["a", "e", "u", "i", "o"];
  let newArr = [];
  for (let item of wordList) {
    if (!vowels.includes(item.toLowerCase())) {
      newArr.push(item);
    }
  }
  return newArr.join("");
};

const removeVowel = (str) => {
  if (typeof str !== "string" || str.length === 0) return "Invalid input";
  let wordList = str.trim().split("");
  return [...wordList]
    .filter((item) => !"eaoui".includes(item.toLowerCase()))
    .join("");
};
