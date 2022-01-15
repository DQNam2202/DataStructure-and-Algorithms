// Recursion: Factorials
// Write a function that calculates the factorial of a number recursively.

// Examples
// factorial(5) ➞ 120
// factorial(3) ➞ 6
// factorial(1) ➞ 1
// factorial(0) ➞ 1

export const factorial = (numb) => {
  if (typeof numb !== "number") return "Invalid input";
  if (numb === 0) return 1;
  let result = 1;
  for (let i = 1; i <= numb; i++) {
    result *= i;
  }
  return result;
};
