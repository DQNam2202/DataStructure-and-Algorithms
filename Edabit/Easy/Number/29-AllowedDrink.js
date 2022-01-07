//? A bartender is writing a simple program to determine whether he should serve drinks to someone. He only serves drinks to people 18 and older and when he's not on break.

// Output:
// shouldServeDrinks(17, true) ➞ false
// shouldServeDrinks(19, false) ➞ true
// shouldServeDrinks(30, true) ➞ false

export const shouldServeDrinks = (age, onBreak) => {
  if (typeof age !== "number" || typeof onBreak !== "boolean")
    return "Invalid input";
  return age >= 18 && onBreak === false ? true : false;
};
