// Create a recursive function that takes two parameters and repeats the string n number of times. The first parameter txt is the string to be repeated and the second parameter is the number of times the string is to be repeated.

// String.prototype.repeat() is not allowed

// Output:
// repetition("ab", 3) ➞ "ababab"
// repetition("kiwi", 1) ➞ "kiwi"
// repetition("cherry", 2) ➞ "cherrycherry"

// Using using a while loop
export const repetitionV1 = (txt, numb) => {
  if (typeof txt !== "string" || typeof numb !== "number")
    return "Invalid input";
  if (txt.length === 0 || numb < 0) return "";
  let word = "";
  while (numb > 0) {
    word += txt;
    numb--;
  }
  return word;
};
// using recursion
/*  Example:
    1st call         3                 "abc" + ("abc", 3 - 1)
    2nd call         2                 "abc" + ("abc", 2 - 1)
    3rd call         1                 "abc" => if (times === 1) return string;
    4th call         0                  ""   => if (times <= 0) return "";
*/
export const repetitionV2 = (txt, numb) => {
  if (typeof txt !== "string" || typeof numb !== "number")
    return "Invalid input";
  if (txt.length === 0 || numb < 0) return "";
  if (numb === 1) {
    return txt;
  } else {
    return txt + repetitionV2(txt, numb - 1);
  }
};
// Using map
export const repetitionV3 = (txt, numb) => {
  if (typeof txt !== "string" || typeof numb !== "number")
    return "Invalid input";
  if (txt.length === 0 || numb < 0) return "";
  return [...Array(numb)].map((_, idx) => txt).join("");
};
// using ES6 repeat() method
const repeatStr = (str, numb) => {
  if (typeof str !== "string" || typeof numb !== "number")
    return "Invalid input";
  if (str.length === 0 || numb < 0) return "";
  return str.trim().repeat(numb);
};

// using Arraay().join()
const repeatStrV2 = (str, numb) => {
  if (typeof str !== "string" || typeof numb !== "number")
    return "Invalid input";
  if (str.length === 0 || numb < 0) return "";
  return [...Array(numb + 1)].join(str);
};
console.log(repeatStrV2("ab", 3));
