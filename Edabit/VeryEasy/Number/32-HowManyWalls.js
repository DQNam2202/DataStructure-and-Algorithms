/**
 *! 32. Create a function that returns the number of complete walls that I can paint, before I need to head to the shops to buy more.
    + n is the number of square meters I can paint.
    + w and h are the widths and heights of a single wall in meters.
 */

// Output:
// howManyWalls(100, 4, 5) ➞ 5
// howManyWalls(10, 15, 12) ➞ 0
// howManyWalls(41, 3, 6) ➞ 2

export const howManyWalls = (n, w, h) => {
  if (typeof n !== "number" || typeof w !== "number" || typeof h !== "number")
    return "Invalid input";
  const areaSquare = w * h;
  return Math.floor(n / areaSquare);
};
