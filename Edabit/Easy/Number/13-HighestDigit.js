// Highest Digit
// Create a function that takes a number as an argument and returns the highest digit in that number.

// Examples
// highestDigit(379) ➞ 9
// highestDigit(2) ➞ 2
// highestDigit(377401) ➞ 7

export const highestDigit = (numb) => {
  if (typeof numb !== "number") return "Invalid input";
  let numbList = numb
    .toString()
    .split("")
    .sort((a, b) => (a > b ? 1 : -1));
  return Number(numbList[numbList.length - 1]);
};
