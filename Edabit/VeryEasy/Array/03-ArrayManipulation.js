//! 03. Help fix all the bugs in the function incrementItems! It is intended to add 1 to every element in the array!

// Output:
// incrementItems([0, 1, 2, 3]) ➞     [1, 2, 3, 4]
// incrementItems([2, 4, 6, 8]) ➞     [3, 5, 7, 9]
// incrementItems([-1, -2, -3, -4]) ➞ [0, -1, -2, -3]

// Using for
export const incrementItemsV1 = (arr) => {
  if (!Array.isArray(arr)) return "Invalid input";
  if (arr.length === 0) return [];
  let numbList = [];
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    numbList.push(value + 1);
  }
  return numbList;
};

// Using forEach
export const incrementItemsV2 = (arr) => {
  if (!Array.isArray(arr)) return "Invalid input";
  if (arr.length === 0) return [];
  let numbList = [];
  arr.forEach((item) => {
    numbList.push(item + 1);
  });
  return numbList;
};

// Using forin
export const incrementItemsV3 = (arr) => {
  if (!Array.isArray(arr)) return "Invalid input";
  if (arr.length === 0) return [];
  let numbList = [];
  for (let item of arr) {
    numbList.push(item + 1);
  }
  return numbList;
};

// Using map
export const incrementItemsV4 = (arr) => {
  if (!Array.isArray(arr)) return "Invalid input";
  if (arr.length === 0) return [];
  return arr.map((item, idx) => item + 1);
};
