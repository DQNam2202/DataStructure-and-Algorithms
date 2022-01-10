// Create a function that takes two numbers num1, num2, and an array arr and returns an array containing all the numbers in arr greater than num1 and less than num2.

// Output:
// arrBetween(3, 8, [1, 5, 95, 0, 4, 7]) ➞ [5, 4, 7]
// arrBetween(1, 10, [1, 10, 25, 8, 11, 6]) ➞ [8, 6]
// arrBetween(7, 32, [1, 2, 3, 78]) ➞ []

// Version01 : Sử dụng for.
export const arrBetween = (numb1, numb2, array) => {
  if (
    typeof numb1 !== "number" ||
    typeof numb2 !== "number" ||
    !Array.isArray(array)
  )
    return "Invalid input";
  if (array.length === 0) return [];
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > numb1 && array[i] < numb2) {
      newArr.push(array[i]);
    }
  }
  return newArr;
};
// Version02 : Sử dụng forEach
export const arrBetweenV2 = (numb1, numb2, array) => {
  if (
    typeof numb1 !== "number" ||
    typeof numb2 !== "number" ||
    !Array.isArray(array)
  )
    return "Invalid input";
  if (array.length === 0) return [];
  let newArr = [];
  array.forEach((item) => {
    if (numb1 < item && numb2 > item) {
      newArr.push(item);
    }
  });
  return newArr;
};
// Version03 : Sử dụng for..of
export const arrBetweenV3 = (numb1, numb2, array) => {
  if (
    typeof numb1 !== "number" ||
    typeof numb2 !== "number" ||
    !Array.isArray(array)
  )
    return "Invalid input";
  if (array.length === 0) return [];
  let newArr = [];
  for (let item of array) {
    if (numb1 < item && numb2 > item) {
      newArr.push(item);
    }
  }
  return newArr;
};
