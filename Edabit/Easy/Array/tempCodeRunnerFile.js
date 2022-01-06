const reverseV2 = (arr) => {
  if (!Array.isArray(arr)) return "Invalid input";
  if (arr.length === 0) return [];
  let newArr = [];
  for (let i = arr.length - 1; i <= arr.length; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
};
console.log(reverseV2([3, 2, 1]));