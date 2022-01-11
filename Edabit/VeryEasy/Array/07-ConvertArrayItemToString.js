// Create a function that takes an array of integers and strings. Convert integers to strings and return the new array.

// Output:
// parseArray([1, 2, "a", "b"]) ➞ ["1", "2", "a", "b"]
// parseArray(["abc", 123, "def", 456]) ➞ ["abc", "123", "def", "456"]
// parseArray([1, 2, 3, 17, 24, 3, "a", "123b"]) ➞ ["1", "2", "3", "17", "24", "3", "a", "123b"]
// parseArray([]) ➞ []

// using for
export const parseArrayV1 = (arr) => {
  if (!Array.isArray(arr)) return "Invalid input";
  if (arr.length === 0) return [];
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (typeof item !== "string") {
      newArr.push(item.toString());
    } else {
      newArr.push(item);
    }
  }
  return newArr;
};
// using forEach
export const parseArrayV2 = (arr) => {
  if (!Array.isArray(arr)) return "Invalid input";
  if (arr.length === 0) return [];
  let newArr = [];
  [...arr].forEach((item) => {
    if (typeof item !== "string") {
      newArr.push(item.toString());
    } else {
      newArr.push(item);
    }
  });
  return newArr;
};
// using for...of
export const parseArrayV3 = (arr) => {
  if (!Array.isArray(arr)) return "Invalid input";
  if (arr.length === 0) return [];
  let newArr = [];
  for (let item of arr) {
    if (typeof item !== "string") {
      newArr.push(item.toString());
    } else {
      newArr.push(item);
    }
  }
  return newArr;
};
// using map
export const parseArrayV4 = (arr) => {
  if (!Array.isArray(arr)) return "Invalid input";
  if (arr.length === 0) return [];
  return [...arr].map((item, idx) => {
    return typeof item !== "string" ? item.toString() : item;
  });
};
