// Due to a programming concept known as truthiness, certain values can be evaluated to (i.e. take the place of) booleans. For example, 1 (or any number other than 0) is often equivalent to true, and 0 is often equivalent to false.

//? Output
// flipBool(true) ➞ 0
// flipBool(false) ➞ 1
// flipBool(1) ➞ 0
// flipBool(0) ➞

export const flipBool = (bool) => {
  if (typeof bool !== "number" && typeof bool !== "boolean")
    return "Invalid input";
  return !bool ? 1 : 0;
};
