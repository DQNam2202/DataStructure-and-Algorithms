// Sum Two Integer
export const sumTwoInteger = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') return 'Invalid number';
  if (a <= 0 || a > 100 || b <= 0 || b > 100) return 0;
  return a + b;
};
// Sum three number
export const sumThreeNumber = (a, b, c) => {
  if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number')
    return 'Invalid number';
  return a + b + c;
};
