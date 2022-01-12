// Given a number, return an array containing the two halves of the number. If the number is odd, make the rightmost number higher.

// Output
// numberSplit(4) ➞ [2, 2]
// numberSplit(10) ➞ [5, 5]
// numberSplit(11) ➞ [5, 6]
// numberSplit(-9) ➞ [-5, -4]

export const numberSplit = (numb) => {
  if (typeof numb !== "number") return "Invalid input";
  let num = Math.sign(numb);
  let a = Math.floor(Math.abs(numb) / 2);
  let b = Math.abs(numb) - a;
  if (numb > 0) {
    return [a * num, b * num];
  }
  return [b * num, a * num];
};
