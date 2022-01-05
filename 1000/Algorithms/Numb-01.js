// Bài 1: Tính S(n) = 1 + 2 + 3 + … + n
// Version 01: using for
export const numbVer01 = (n) => {
  if (typeof n !== "number" || n < 1) return "Invalid number";
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};
// Version 02: using while
export const numbVer02 = (n) => {
  if (typeof n !== "number" || n < 1) return "Invalid number";
  let i = 1;
  let sum = 0;
  while (i <= n) {
    sum += i;
    i++;
  }
  return sum;
};
// Version 03: using array -> Array.from + for
export const numbVer03 = (n) => {
  if (typeof n !== "number" || n < 1) return "Invalid number";
  let sum = 0;
  let numbList = Array.from({ length: n }, (item, idx) => idx + 1);
  for (let i = 0; i < numbList.length; i++) {
    sum += numbList[i];
  }
  return sum;
};
// Version 04: using array -> Array.from + forEach
export const numbVer04 = (n) => {
  if (typeof n !== "number" || n < 1) return "Invalid number";
  let sum = 0;
  let numbList = Array.from({ length: n }, (item, idx) => idx + 1);
  numbList.forEach((item) => {
    sum += item;
  });
  return sum;
};
// Version 05: using array -> Array.from + forIn
export const numbVer05 = (n) => {
  if (typeof n !== "number" || n < 1) return "Invalid number";
  let sum = 0;
  let numbList = Array.from({ length: n }, (item, idx) => idx + 1);
  for (let item of numbList) {
    sum += item;
  }
  return sum;
};
