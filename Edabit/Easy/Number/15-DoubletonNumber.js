// A natural number is a "Doubleton Number", if it contains exactly two distinct digits. For example, 23, 35, 100, 12121 are doubleton numbers, and 123 and 114455 are not.

// Examples
// doubleton(10) ➞ 12
// doubleton(120) ➞ 121
// doubleton(1234) ➞ 1311

const isDoubleTon = (num = 1) => {
  const str = String(num);
  const map = {};
  for (let i = 0; i < str.length; i++) {
    const el = str[i];
    // Kiểm tra trong Object map có thuộc tính đó chưa nếu chưa có thì thêm vào và check true
    if (!map.hasOwnProperty(el)) {
      map[el] = true;
    }
  }
  const props = Object.keys(map).length;
  // 2 thuộc tính khác nhau [0,1] | [1,3]
  return props === 2;
};
export const doubleton = (numb) => {
  if (typeof numb !== "number") return "Invalid input";
  let numbList = [];
  for (let i = numb; i <= numb * 2; i++) {
    if (isDoubleTon(i)) {
      numbList.push(i);
    }
  }
  return numbList[0] === numb ? numbList[1] : numbList[0];
};
