// Write three functions to calculate the bitwise AND, bitwise OR and bitwise XOR of two numbers.

// Examples
// bitwiseAND(7, 12) ➞ 4
// bitwiseOR(7, 12) ➞ 15
// bitwiseXOR(7, 12) ➞ 11

export const bitwiseAND = (numb1, numb2) => {
  if (typeof numb1 !== "number" || typeof numb2 !== "number")
    return "Invalid input";
  return numb1 & numb2;
};
export const bitwiseOR = (numb1, numb2) => {
  if (typeof numb1 !== "number" || typeof numb2 !== "number")
    return "Invalid input";
  return numb1 | numb2;
};
export const bitwiseXOR = (numb1, numb2) => {
  if (typeof numb1 !== "number" || typeof numb2 !== "number")
    return "Invalid input";
  return numb1 ^ numb2;
};
