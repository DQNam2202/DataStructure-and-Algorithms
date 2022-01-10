// Create a function that takes an object argument sizes (contains width, length, height keys) and returns the volume of the box.

// Output:
// volumeOfBox({ width: 2, length: 5, height: 1 }) ➞ 10
// volumeOfBox({ width: 4, length: 2, height: 2 }) ➞ 16
// volumeOfBox({ width: 2, length: 3, height: 5 }) ➞ 30

// Version 01:
export const volumeOfBox = (sizes) => {
  if (typeof sizes !== "object" || Array.isArray(sizes) || sizes === null)
    return "Invalid input";
  let total = 1;
  for (const key in sizes) {
    total *= sizes[key];
  }
  return total;
};
// Version 02: Using Object.values()
export const volumeOfBoxV2 = (sizes) => {
  if (typeof sizes !== "object" || Array.isArray(sizes) || sizes === null)
    return "Invalid input";
  let total = 1;
  let listNumb = Object.values(sizes);
  for (let item of listNumb) {
    total *= item;
  }
  return total;
};
