// Check if a string title is a title string or not. A title string is one which has all the words in the string start with a upper case letter.

// Examples
// checkTitle("A Mind Boggling Achievement") ➞ true
// checkTitle("A Simple Java Script Program!") ➞ true
// checkTitle("Water is transparent") ➞ false

export const checkTitle = (str) => {
  if (typeof str !== "string" || str.length === 0) return "Invalid input";
  let wordList = str.trim().split(" ");
  let check = false;
  for (let i = 0; i < wordList.length; i++) {
    if (wordList[0] === wordList[i].toUpperCase()) {
      check = true;
    }
  }
  return check;
};
