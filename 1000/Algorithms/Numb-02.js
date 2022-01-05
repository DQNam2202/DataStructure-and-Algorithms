// Tính S(n) = 1^2 + 2^2 + … + n^2
// version 01: using for
export const numbVer01 = (n) => {
  if (typeof n !== "number" || n < 1) return "Invalid number";
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i ** 2;
  }
  return sum;
};
// version 02: using Math.pow()
export const numbVer02 = (n) => {
  if (typeof n !== "number" || n < 1) return "Invalid number";
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += Math.pow(i, 2);
  }
  return sum;
};

// version 02: using while
export const numbVer03 = (n) => {
  if (typeof n !== "number" || n < 1) return "Invalid number";
  let i = 1;
  let sum = 0;
  while (i <= n) {
    sum += i ** 2;
    i++;
  }
  return sum;
};
// version 03: using array + for
export const numbVer04 = (n) => {
  if (typeof n !== "number" || n < 1) return "Invalid number";
  let sum = 0;
  let numbList = Array.from({ length: n }, (item, idx) => (idx + 1) ** 2);
  for (let i = 0; i < numbList.length; i++) {
    const value = numbList[i];
    sum += value;
  }
  return sum;
};

// version 04: using array + forEach
export const numbVer05 = (n) => {
  if (typeof n !== "number" || n < 1) return "Invalid number";
  let sum = 0;
  let numbList = Array.from({ length: n }, (item, idx) => Math.pow(idx + 1, 2));
  numbList.forEach((item) => {
    sum += item;
  });
  return sum;
};
// version 05: using for + forof
export const numbVer06 = (n) => {
  if (typeof n !== "number" || n < 1) return "Invalid number";
  let sum = 0;
  let numbList = Array.from({ length: n }, (item, idx) => (idx + 1) ** 2);
  for (let item of numbList) {
    sum += item;
  }
  return sum;
};
