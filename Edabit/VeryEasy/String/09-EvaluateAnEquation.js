// Create a function that evaluates an equation.
// Ouput:
// eq("1+2") ➞ 3
// eq("6/(9-7)") ➞ 3
// eq("3+2-4") ➞ 1

// using eval()
export const eq = (str) => {
  if (typeof str !== "string") return "Invalid string";
  return eval(str.trim());
};
