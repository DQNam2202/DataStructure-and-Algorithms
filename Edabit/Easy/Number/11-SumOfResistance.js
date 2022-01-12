// When resistors are connected together in series, the same current passes through each resistor in the chain and the total resistance, RT, of the circuit must be equal to the sum of all the individual resistors added together

// Output:
// seriesResistance([1, 5, 6, 3]) ➞ "15 ohms"
// seriesResistance([16, 3.5, 6]) ➞ "25.5 ohms"
// seriesResistance([0.5, 0.5]) ➞ "1.0 ohm"

// using for...in
export const seriesResistanceV1 = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) return "Invalid input";
  let sum = 0;
  for (let item of arr) {
    sum += item;
  }
  return sum <= 1 ? `${sum} ohm` : `${sum} ohms`;
};
// Using forEach
export const seriesResistanceV2 = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) return "Invalid input";
  let sum = 0;
  [...arr].forEach((item) => {
    sum += item;
  });
  return sum <= 1 ? `${sum} ohm` : `${sum} ohms`;
};
// Using for
export const seriesResistanceV3 = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) return "Invalid input";
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    sum += element;
  }
  return sum <= 1 ? `${sum} ohm` : `${sum} ohms`;
};
