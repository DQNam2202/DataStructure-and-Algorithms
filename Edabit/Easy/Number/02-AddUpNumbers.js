//! Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

// Output:
// addUp(4) ➞ 10
// addUp(13) ➞ 91
// addUp(600) ➞ 180300

//? Notes
// Expect any positive number between 1 and 1000.

// Using for....
export const addUpV1 = (numb) => {
  if (typeof numb !== "number" || numb < 1 || numb > 1000)
    return "Invalid input";
  let sum = 0;
  for (let i = 1; i <= numb; i++) {
    sum += i;
  }
  return sum;
};
// Using while
export const addUpV2 = (numb) => {
  if (typeof numb !== "number" || numb < 1 || numb > 1000)
    return "Invalid input";
  let sum = 0;
  let i = 1;
  while (i <= numb) {
    sum += i;
    i++;
  }
  return sum;
};
// Using Array.from
export const addUpV3 = (numb) => {
  if (typeof numb !== "number" || numb < 1 || numb > 1000)
    return "Invalid input";
  let numbList = Array.from({ length: numb }, (item, idx) => idx + 1);
  let sum = 0;
  for (let item of numbList) {
    sum += item;
  }
  return sum;
};
