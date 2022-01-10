// Given a Rubik's Cube with a side length of n, return the number of individual stickers that are needed to cover the whole cube.

// Output:
// howManyStickers(1) ➞ 6
// howManyStickers(2) ➞ 24
// howManyStickers(3) ➞ 54

export const howManyStickersV1 = (n) => {
  if (typeof n !== "number") return "Invalid input";
  return n ** 2 * 6;
};

export const howManyStickersV2 = (n) => {
  if (typeof n !== "number") return "Invalid input";
  return Math.pow(n, 2) * 6;
};
