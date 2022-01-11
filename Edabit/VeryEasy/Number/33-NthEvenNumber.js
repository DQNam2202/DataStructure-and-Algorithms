// Nth Even Number
//! 33. Create a function that takes a number n and returns the nth even number beginning with 0 as the first.

// Output
// nthEven(1) ➞ 0
// nthEven(2) ➞ 2
// nthEven(100) ➞ 198

export const nthEvenV1 = (n) => {
  if (typeof n !== "number") return "Invalid number";
  const numbEvenList = Array.from({ length: n }, (item, idx) => idx * 2);
  const idxLastList = numbEvenList.length - 1;
  return numbEvenList[idxLastList];
};

export const nthEvenV2 = (n) => {
  if (typeof n !== "number") return "Invalid number";
  let numbEvenList = [];
  for (let i = 0; i < n * 2; i += 2) {
    numbEvenList.push(i);
  }
  return numbEvenList[numbEvenList.length - 1];
};
