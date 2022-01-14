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

// Using Math.max
const highestDigitV1 = (numb) => {
  if (typeof numb !== "number") return "Invalid input";
  let numbList = numb.toString().split("");
  return Math.max(...numbList);
};

// Using For
const highestDigitV2 = (numb) => {
  if (typeof numb !== "number") return "Invalid input";
  let numbList = numb.toString().split("");
  let max = numbList[0];
  for (let i = 0; i < numbList.length; i++) {
    if (numbList[i] > max) {
      max = numbList[i];
    }
  }
  return max;
};
