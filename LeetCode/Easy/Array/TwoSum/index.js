"usestrict";
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// Version 01:
twoSum = (nums, target) => {
  if (nums.length == "" || typeof target !== "number") return -1;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] + nums[i] == target) {
        return [i, j];
      }
    }
  }
};
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
