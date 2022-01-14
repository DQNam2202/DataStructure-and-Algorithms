// Pi to N Decimal Places
// Given a number n, write a function that returns PI to n decimal places.

// Examples
// myPi(5) ➞ 3.14159
// myPi(4) ➞ 3.1416
// myPi(15) ➞ 3.141592653589793

export const myPi = (n) => {
  if (typeof n !== "number") return "Invalid input";
  return n <= 15 ? Number(Math.PI.toFixed(n)) : "Invalid input";
};
