//! 07. You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.
// Output:
// points(1, 1) ➞ 5
// points(7, 5) ➞ 29
// points(38, 8) ➞ 100
export const points = (twoScore, threeScore) => {
  if (typeof twoScore !== "number" || typeof threeScore !== "number")
    return false;
  return twoScore * 2 + threeScore * 3;
};
