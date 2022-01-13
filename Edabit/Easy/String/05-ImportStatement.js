// When importing objects from a module in Python, the syntax usually is as follows:
// from module_name import object
// Given a string of an incorrect import statement, return the fixed string. All import statements will be the wrong way round.

// Examples
// fixImport("import object from module_name") ➞ "from module_name import object"
// fixImport("import randint from random") ➞ "from random import randint"
// fixImport("import pi from math") ➞ "from math import pi"

export const fixImport = (str) => {
  if (typeof str !== "string" || str.length === 0) return "Invalid input";
  let wordList = str.trim().split(" ");
  let spliceWord = wordList.splice(0, 2);
  return [...wordList, ...spliceWord].join(" ");
};
