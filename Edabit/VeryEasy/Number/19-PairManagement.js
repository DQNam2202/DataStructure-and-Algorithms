//! 19. Given two arguments, return an array which contains these two arguments.
// Output
// makePair(1, 2) ➞ [1, 2]
// makePair(51, 21) ➞ [51, 21]
// makePair(512124, 215) ➞ [512124, 215]

export const makePair = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") return false;
  return [a, b];
};
