let findEqualValue = (arr01, arr02) => {
  let arr = [];
  if (arr01.length == "" || arr02.length == "") return -1;
  for (let i = 0; i < arr01.length - 1; i++) {
    for (let j = 0; j < arr02.length - 1; j++) {
      if (arr01[i] == arr02[j]) {
        return arr.push(arr01[i]);
      }
    }
  }
};
// findEqualValue([2, 4, 6, 8], [2, 6, 9]);
console.log(findEqualValue([2, 4, 6, 8], [2, 6, 9]));
