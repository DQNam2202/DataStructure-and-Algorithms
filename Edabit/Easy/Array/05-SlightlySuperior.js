// You will be given two extremely similar arrays, but exactly one of the items in an array will be valued slightly higher than its counterpart (which means that evaluating the value > the other value will return true).

// Output:
// isFirstSuperior([1, 2, 4], [1, 2, 3]) ➞ true
// isFirstSuperior(["a", "d", "c"], ["a", "b", "c"]) ➞ true
// isFirstSuperior(["zebra", "ostrich", "whale"], ["ant", "ostrich", "whale"]) ➞ true
// isFirstSuperior([1, 2, 3, 4], [1, 2, 4, 4]) ➞ false
// isFirstSuperior([true, 10, "zebra"], [true, 10, "zebra"]) ➞ false

export const isFirstSuperior = (arr1, arr2) => {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) return "Invalid input";
  if (arr1.length === 0 || arr2.length === 0) return [];
  let check = false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] > arr2[i]) {
      check = true;
    }
  }
  return check;
};
