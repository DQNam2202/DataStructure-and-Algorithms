// You are given two numbers, a and b. Write a function which uses an expression to return the expected output. I am not going to tell you what the expression is because that will spoil the fun! :)

// Examples
// crazyfunction(10, 20) ➞ 30
// crazyfunction(17, 35) ➞ 50
// crazyfunction(61, 233) ➞ 212

export const crazyfunction = (numb1, numb2) => {
  if (typeof numb1 !== "number" || typeof numb2 !== "number")
    return "Invalid input";
  return numb1 ^ numb2;
};
