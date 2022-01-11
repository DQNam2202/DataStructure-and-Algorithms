// Create a function that calculates the number of different squares in an n * n square grid. Check the Resources tab.

// Output:
// numberSquares(2) ➞ 5
// numberSquares(4) ➞ 30
// numberSquares(5) ➞ 55

// Using for
export const numberSquaresV1 = (numb) => {
  if (typeof numb !== "number") return "Invalid input";
  let sum = 0;
  for (let i = 1; i <= numb; i++) {
    sum += Math.pow(i, 2);
  }
  return sum;
};

// Using Array.from()
export const numberSquaresV3 = (numb) => {
  if (typeof numb !== "number") return "Invalid input";
  let sum = 0;
  let numbList = Array.from({ length: numb }, (item, idx) => (idx + 1) ** 2);
  for (let item of numbList) {
    sum += item;
  }
  return sum;
};
