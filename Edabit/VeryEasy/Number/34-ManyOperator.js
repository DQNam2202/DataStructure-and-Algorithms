//! 34. Some basic arithmetic operators are +, -, *, /, and %. In this challenge you will be given three parameters, num1, num2, and an operator. Use the operator on number 1 and 2.

// Output:
// operate(1, 2, "+") ➞ 3
// operate(7, 10, "-") ➞ -3
// operate(20, 10, "%") ➞ 0

// using Operator
export const operateV1 = (numb1, numb2, operator) => {
  if (
    typeof numb1 !== "number" ||
    typeof numb2 !== "number" ||
    typeof operator !== "string"
  )
    return "Invalid input";
  const str = numb1 + operator + numb2;
  return eval(str);
};
// Using concat
export const operateV2 = (numb1, numb2, operator) => {
  if (
    typeof numb1 !== "number" ||
    typeof numb2 !== "number" ||
    typeof operator !== "string"
  )
    return "Invalid input";
  const str = "".concat(numb1, operator, numb2);
  return eval(str);
};
// Using String Template
export const operateV3 = (numb1, numb2, operator) => {
  if (
    typeof numb1 !== "number" ||
    typeof numb2 !== "number" ||
    typeof operator !== "string"
  )
    return "Invalid input";
  return eval(`${numb1}${operator}${numb2}`);
};
// Using Array.join("")
export const operateV4 = (numb1, numb2, operator) => {
  if (
    typeof numb1 !== "number" ||
    typeof numb2 !== "number" ||
    typeof operator !== "string"
  )
    return "Invalid input";
  const expression = [numb1, operator, numb2];
  return eval([...expression].join(""));
};
