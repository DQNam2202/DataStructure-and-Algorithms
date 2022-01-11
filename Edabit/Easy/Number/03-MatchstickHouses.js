// Create a function that takes a number (step) as an argument and returns the number of matchsticks in that step. See step 1, 2 and 3 in the image above.

// Examples
// matchHouses(1) ➞ 6
// matchHouses(4) ➞ 21
// matchHouses(87) ➞ 436

export const matchHouses = (step) => {
  if (typeof step !== "number" || step < 0) return "Invalid input";
  if (step === 0) return 0;
  return 5 * step + 1;
};
