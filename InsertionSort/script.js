/**
  Ex: [5,2,6]
  Mảng đã sắp xếp: 5
  Mảng không được sắp xếp: 2, 6
  Phần tử đầu tiên trong mảng không được sắp xếp của chúng tôi là 2. 2 <5
  => vì vậy chúng ta di chuyển 5 sang phải một chỗ. =>   a[j+1] = a[j]
  Mảng đã sắp xếp: _, 5
  => 2 được đặt vào đúng vị trí của nó.
  => nếu thỏa thì => a[j+1] = current
 */
"use strict";
const insertion_Sort = (array) => {
  for (let i = 1; i < array.length; i++) {
    // Choosing the first element in our unsorted subarray
    let current = array[i];
    // The last element of our sorted subarray
    let j = i - 1;
    /* Move elements of arr[0..i-1], that are 
        greater than key, to one position ahead 
        of their current position */
    while (j >= 0 && array[j] > current) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = current;
  }
  return array;
};

// Data text:
console.log(insertion_Sort([3, 0, 2, 5, -1, 4, 1]));
console.log(
  insertion_Sort([
    2, 6, 5, 12, -1, 3, 8, 7, 1, -4, 0, 23, 1, -55, 20, 37, 54, 210, -23, 7,
    483, 9339, 29, -3, 90, -2, 81, 54, 7372, -92, 93, 93, 18, -43, 21,
  ])
);
