// Given an array of scrabble tiles, create a function that outputs the maximum possible score a player can achieve by summing up the total number of points for all the tiles in their hand. Each hand contains 7 scrabble tiles.

// [
//   { tile: "N", score: 1 },
//   { tile: "K", score: 5 },
//   { tile: "Z", score: 10 },
//   { tile: "X", score: 8 },
//   { tile: "D", score: 2 },
//   { tile: "A", score: 1 },
//   { tile: "E", score: 1 }
// ] ➞ 28

export const maximumScore = (tileHand) => {
  if (
    typeof tileHand !== "object" ||
    !Array.isArray(tileHand) ||
    tileHand === null
  )
    return "Invalid input";
  let sum = 0;
  for (let item of tileHand) {
    sum += item.score;
  }
  return sum;
};
