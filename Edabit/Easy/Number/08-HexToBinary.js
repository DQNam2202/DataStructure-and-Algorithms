// Hex to Binary
// Create a function that will take a HEX number and returns the binary equivalent (as a string).

// Output:
// toBinary(0xFF) ➞ "11111111"
// toBinary(0xAA) ➞ "10101010"
// toBinary(0xFA) ➞ "11111010"

export const toBinary = (numb) => {
  if (typeof numb !== "number") return "Invalid input";
  return numb.toString(2);
};
