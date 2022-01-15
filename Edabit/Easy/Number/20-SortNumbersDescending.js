// Create a function that takes any nonnegative number as an argument and return it with it's digits in descending order. Descending order is when you sort from highest to lowest.

// Examples
// sortDescending(123) ➞ 321
// sortDescending(1254859723) ➞ 9875543221
// sortDescending(73065) ➞ 76530

export const sortDescending = (numb) => {
  if (typeof numb !== "number") return "Invalid input";
  const numbList = numb.toString().split("");
  return Number(numbList.sort((a, b) => (a < b ? 1 : -1)).join(""));
};

const sortingNumb = (numb) => {
  if (typeof numb !== "number") return "Invalid input";
  const numbList = numb.toString().split("");
  return Number(
    numbList
      .sort((a, b) => (a > b ? 1 : -1))
      .reverse()
      .join("")
  );
};
