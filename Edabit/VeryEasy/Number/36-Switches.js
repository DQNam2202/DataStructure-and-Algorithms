// Create a function that returns how many possible arrangements can come from a certain number of switches (on / off). In other words, for a given number of switches, how many different patterns of on and off can we have?

// Output:
// posCom(1) ➞ 2
// posCom(3) ➞ 8
// posCom(10) ➞ 1024

//? Notes: All numbers will be whole and positive.

// usign Math.pow()
export const posComV1 = (numb) => {
  if (typeof numb !== "number") return "Invalid input";
  return numb > 0 ? Math.pow(2, numb) : "Invalid input";
};
console.log(posComV1(-1));
// Using opertator
export const posComV2 = (numb) => {
  if (typeof numb !== "number") return "Invalid input";
  return numb > 0 ? 2 ** numb : "Invalid input";
};
