// Version 01:
export const swapV1 = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") return false;
  let temp;
  temp = a;
  a = b;
  b = temp;
  return [a, b];
};
console.log(swapV1(100, 200));
// Version 02:
export const swapV2 = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") return false;
  return [b, a];
};
