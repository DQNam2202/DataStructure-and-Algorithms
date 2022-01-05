// Bài 3: Tính S(n) = 1 + 1/2 + 1/3 + … + 1/n

// version 01: using for
export const numbVer01 = (n) => {
  if (typeof n !== "number" || n < 1) return "Invalid number";
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += 1 / i;
  }
  return Number(sum.toFixed(2));
};

// version 02: using while
export const numbVer02 = (n) => {
  if (typeof n !== "number" || n < 1) return "Invalid number";
  let sum = 0;
  let i = 1;
  while (i <= n) {
    sum += 1 / i;
    i++;
  }
  return Number(sum.toFixed(2));
};

// version 03: using array + for
export const numbVer03 = (n) => {
  if (typeof n !== "number" || n < 1) return "Invalid number";
  let sum = 0;
  let numbList = Array.from({ length: n }, (item, idx) => 1 / (idx + 1));
  for (let i = 0; i < numbList.length; i++) {
    const value = numbList[i];
    sum += value;
  }
  return Number(sum.toFixed(2));
};

// version 04: using array + forEach
export const numbVer04 = (n) => {
  if (typeof n !== "number" || n < 1) return "Invalid number";
  let sum = 0;
  let numbList = Array.from({ length: n }, (item, idx) => 1 / (idx + 1));
  numbList.forEach((item) => {
    sum += item;
  });
  return Number(sum.toFixed(2));
};

// version 05: using for + forof
export const numbVer05 = (n) => {
  if (typeof n !== "number" || n < 1) return "Invalid number";
  let sum = 0;
  let numbList = Array.from({ length: n }, (item, idx) => 1 / (idx + 1));
  for (let item of numbList) {
    sum += item;
  }
  return Number(sum.toFixed(2));
};
