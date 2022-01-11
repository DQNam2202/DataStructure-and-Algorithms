/**
 *! Create a function that takes three arguments prob, prize, pay and returns true if prob * prize > pay; otherwise return false. -> profitableGamble(0.2, 50, 9)
    + should yield true, since the net profit is 1 (0.2 * 50 - 9), and 1 > 0.
 */
// output:
// profitableGamble(0.2, 50, 9) ➞ true
// profitableGamble(0.9, 1, 2) ➞ false
// profitableGamble(0.9, 3, 2) ➞ true

export const profitableGamble = (prob, prize, pay) => {
  if (
    typeof prob !== "number" ||
    typeof prize !== "number" ||
    typeof pay !== "number"
  )
    return false;
  return prob * prize > pay ? true : false;
};
