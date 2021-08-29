// Phân loại: Giải thuật sắp xếp
// Phức tạp thời gian: Trung bình O(n log n)
// Xấu nhất: O(n2)
// Phức tạp dữ liệu: Khác nhau tùy vào cách hiện thực
// Tối ưu: Thỉnh thoảng

const quick_Sort = (arr) => {
  // Validation
  if (arr.length < 2) return "";
  // Lấy index cuối
  const pivotIndex = arr.length - 1;
  const pivot = arr[pivotIndex];
  // Khởi tạo 2 mảng rông trái và phải
  // Trái: chứa những thằng nhỏ hơn pivot
  // Phải: chứa những thằng lớn hơn pivot
  const arrLeft = [];
  const arrRight = [];
  let currentItem;
  // 'i < pivotIndex' => chúng ta sẽ không loop qua 'pivot' nữa
  for (let i = 0; i < pivotIndex; i++) {
    currentItem = arr[i];
    if (currentItem > pivot) {
      arrRight.push(currentItem);
    } else {
      arrLeft.push(currentItem);
    }
  }
  return [...quick_Sort(arrLeft), pivot, ...quick_Sort(arrRight)];
};
// Data text:
console.log(quick_Sort([100, 2, 5, 4, 7, 5, 6, 8, 0, 12, 34, 15]));
console.log(quick_Sort([100, 2, 52, 24, 7, 53, 6, 8]));
console.log(quick_Sort([10, 80, 30, 90, 40, 50, 70]));
