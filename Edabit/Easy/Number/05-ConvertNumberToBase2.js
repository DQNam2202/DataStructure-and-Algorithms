// Create a function that returns a base-2 (binary) representation of a base-10 (decimal) string number. To convert is simple: ((2) means base-2 and (10) means base-10) 010101001(2) = 1 + 8 + 32 + 128.

// Output:
// binary(1) ➞ "1" // 1*1 = 1
// binary(5) ➞ "101" // 1*1 + 1*4 = 5
// binary(10) ➞ "1010" // 1*2 + 1*8 = 10

export const binary = (numb) => {
  if (typeof numb !== "number") return "Invalid input";
  return numb.toString(2);
};
