/**
 *! 17. A vehicle needs 10 times the amount of fuel than the distance it travels. However, it must always carry a minimum of 100 fuel before setting off.
 * Output
    + calculateFuel(15) ➞ 150
    + calculateFuel(23.5) ➞ 235
    + calculateFuel(3) ➞ 100
  *? Notes
    + Distance will be a number greater than zero.
    + Return 100 if the calculated fuel turns out to be less than 100.
*/

export const calculateFuel = (n) => {
  if (typeof n !== "number") return false;
  return n < 10 ? 100 : n * 10;
};
