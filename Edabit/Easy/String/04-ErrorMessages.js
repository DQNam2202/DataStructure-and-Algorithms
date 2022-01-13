// Create a function that takes a number as an argument and returns the appropriate error message. You should do this without using the switch or if statements.

// 1 >> "Check the fan: e1"
// 2 >> "Emergency stop: e2"
// 3 >> "Pump Error: e3"
// 4 >> "c: e4"
// 5 >> "Temperature Sensor Error: e5"
// For any other value, return 101 (you can use an if statment here).

// Examples
// error(1) ➞ "Check the fan: e1"
// error(2) ➞ "Emergency stop: e2"
// error(3) ➞ "Pump Error: e3"

export const error = (n) => {
  if (typeof n !== "number") return "Invalid input";
  return n < 6
    ? n === 1
      ? "Check the fan: e1"
      : n === 2
      ? "Emergency stop: e2"
      : n === 3
      ? "Pump Error: e3"
      : n === 4
      ? "c: e4"
      : n === 5
      ? "Temperature Sensor Error: e5"
      : ""
    : 101;
};

// Using if...else
const errorMessages = (n) => {
  if (typeof n !== "number") return "Invalid input";
  if (n === 1) {
    return "Check the fan: e1";
  } else if (n === 2) {
    return "Emergency stop: e2";
  } else if (n === 3) {
    return "Pump Error: e3";
  } else if (n === 4) {
    return "c: e4";
  } else if (n === 5) {
    return "Temperature Sensor Error: e5";
  }
  return 101;
};
// Using Switch...Case
const errorMessageV2 = (n) => {
  if (typeof n !== "number") return "Invalid input";
  switch (n) {
    case 1: {
      return "Check the fan: e1";
    }
    case 2: {
      return "Emergency stop: e2";
    }
    case 3: {
      return "Pump Error: e3";
    }
    case 4: {
      return "c: e4";
    }
    case 5: {
      return "Temperature Sensor Error: e5";
    }
    default:
      return 101;
  }
};
