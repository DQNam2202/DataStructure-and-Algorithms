// Write a function that takes a two-digit number and determines if it's the largest of two possible digit swaps.

// Examples
// largestSwap(14) ➞ false
// largestSwap(27) ➞ false
// largestSwap(43) ➞ true
// largestSwap(53) ➞ true
// largestSwap(99) ➞ true

export const largestSwap = (numb) => {
  if (typeof numb !== "number") return "Invalid input";
  let numbList = numb.toString().split("");
  let swap = `${numbList[1]}${numbList[0]}`;
  return numb >= Number(swap) ? true : false;
};

const swap = (n) => {
  if (typeof n !== "number" || n < 10) return "Invalid input";
  let a = n % 10;
  let b = Math.floor(n / 10);
  return +`${a}${b}`;
};
console.log(swap(32));
// Version 02:
const swapVer2 = (numb) => {
  if (typeof numb !== "number") return "Invalid input";
  return numb >= swap(numb) ? true : false;
};
