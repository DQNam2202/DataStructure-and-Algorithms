"use strict";
// Hám swap hoán đổi vị trí trong mảng
// a temp b
const swap = (arr, a, b) => {
  if (a < 0 && b < 0) return -1;
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
};
// Vòng loop 1: số lần lặp lại việc so sánh và việc swap => số tối đa là n-1, số cặp ở phía trong cũng là số lần loop
// => mỗi lần loop sẽ giảm xuống 1 cặp
// Vòng loop 2: cũng bắt đầu từ 0 cho đến n - 2 rồi thực hiện tiếp tục cho đến khi sắp xếp hoàn tất
// Lưu ý: bubbleSort chỉ hiệu quả với Array nhỏ độ phức tạp O(n), nếu quá lớn thì độ phúc tạp thuật toán lên tới O(n^2) với n là số phần tử
// Ví dụ: Bộ bài 52 lá vậy sẽ có tối đa 51 lần Loop, mỗi lần Loop sẽ sinh ra 51 cặp và sẽ giảm dần
const bubbleSort = (arr, n) => {
  if (arr.length !== n) return -1;
  for (let i = 0; i < n - 1; i++) {
    // n-2 đã so sánh với n-1 và swap nếu cần rồi !
    for (let j = 0; j < n - i - 1; j++) {
      // Nếu thằng đầu mà lớn hơn thằng ở phía sau => swap
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
};
// Data text:
const array = [10, 2, 6, 7, 8, 5];
const array01 = [1, 10, 6, 2, 8, 9];
const array02 = [100, 55, 62, 79, 83, 1];
console.log(bubbleSort(array, array.length));
console.log(bubbleSort(array01, array01.length));
console.log(bubbleSort(array02, array02.length));
console.log(bubbleSort(array, 5));
