/**
  1: Đảo ngược 1 chuỗi 'Duong Quoc Nam' => 'Nam Quoc Duong'
*/
const reservedString = (str) => {
  if (typeof str !== "string") return null;
  return str.trim().split(" ").reverse().join(" ");
};
/**
  2: Đảo ngược một chuỗi bao gồm các ký tự 'Duong Quoc Nam' => 'maN couQ gnouD'
*/
const reverseLetter = (str) => {
  if (typeof str !== "string") return null;
  return str.trim().split("").reverse().join("");
};
/**
  3: In hoa các chữ cái đầu trong 1 chuỗi 'duong quoc nam' => 'Duong Quoc Nam'
*/
const toUpperCaseFirstLetter = (str) => {
  if (typeof str !== "string") return null;
  let arrStr = [];
  const arrSplit = str.trim().split(" ");
  for (let item of arrSplit) {
    arrStr.push(`${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`);
  }
  return arrStr.join(" ");
};
/**
  4. Cho một mảng gồm nhiều giá trị:
  - Example: [1,1000,false,null,"Duong Quoc Nam","",undefined,"javascripts",[1,2,3]].
  Yêu Cầu:
    + Viết chương trình loại bỏ các giá trị falsy ra khỏi mảng chỉ giữ lại giá trị truthhy.
    + Hint: giá trị falsy là 0, null, undefined, false, NaN, ""
*/
// Version 01: Sử dụng filter(Boolean)
const removeFalsy = (arr) => {
  if (typeof arr !== "object") return null;
  return arr.filter(Boolean).flat(1);
};
// Version 02: Sử dụng dụng !!item => Boolean
const removeFalsyVer02 = (arr) => {
  if (typeof arr !== "object") return null;
  return arr.filter((item) => !!item).flat(1);
};
/**
  5. Cho 1 mảng phức tạp [[1,2,3,[false, null]], [1,5,6,["javascripts"]], [888, 666, [98]]].
  Result:
    + [1,2,3,false, null,1,5,6,"javascripts",888,666,98]
  Hint: Flatten, Đệ quy, Reduce, Spread Operator
*/
// Version 01: Flatten(gia_tri)
const arrayComplex = (arr) => {
  if (typeof arr !== "object") return null;
  return [...new Set(arr.flat(2).filter(Boolean))];
};
// Version 02: Sử dụng Flatten(Infinity)_ES6
const arrComplexVer02 = (arr) => {
  if (typeof arr !== "object") return null;
  return arr.flat(Infinity);
};
// Version 03: Sử dụng đệ quy => Sử dụng Array.
const flattenRecursion = (arr) => {
  if (typeof arr !== "object") return null;
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    // isArray: Kiểm tra xem giá trị truyền vào có phải là mảng hay không
    if (Array.isArray(arr[i])) {
      result.push(...flattenRecursion(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
};
// Version 04: Sử dụng reduce - Tối ưu hơn
const flattenReduce = (arr) => {
  if (typeof arr !== "object") return null;
  return arr.reduce((pre, cur, index) => {
    return pre.concat(Array.isArray(cur) ? flattenReduce(cur) : cur);
  }, []);
};
// Version 05: Spread Operator
// some: kiểm tra xem trong mảng đó có ít nhất một phương thức có vượt qua đc condition hay không ?
const flatSpreadOperator = (arr) => {
  if (typeof arr !== "object") return null;
  while (arr.some((item) => Array.isArray(item))) {
    arr = [].concat(...arr);
  }
  return arr;
};
/**
  6. Đảo ngược số nguyên. Math.sign(Sô nguyên | Số âm):
   Trong đó:
    + Khi nhập vào số nguyên thì giá trị trả về là 1
    + Khi nhập vào số âm thì giá trị trả về là -1
*/
const reversePosNumb = (numb) => {
  return typeof numb === "number"
    ? +Math.abs(numb).toString().trim().split("").reverse().join("") *
        Math.sign(numb)
    : null;
};
// Version 02: Sử dụng Math()
const reversePosNumbVer02 = (numb) => {
  let n = Math.abs(numb);
  let result = 0,
    digit = 0;
  while (n > 0) {
    digit = n % 10;
    result = result * 10 + digit;
    n = parseInt(n / 10);
  }
  return result * Math.sign(numb);
};
/**
  7. Viết chương trình có tên là fizzBuzz với đầu vào là một số nguyên, và cho chạy từ 1 đến số nguyên đó rồi kiểm tra:
    + Nếu số nguyên đó chia hết cho 2 thì in ra chữ 'Fizz'.
    + Nếu chia hết cho 3 thì in ra chữ 'Buzz'.
    + Nếu chia hết cho 2 và 3 thì in ra chữ 'FizzBuzz'
*/
const fizzBuzz = (numb) => {
  if (typeof numb !== "number" || numb < 0) return null;
  let result = [];
  for (let i = 1; i <= numb; i++) {
    if (i % 2 === 0 && i % 3 === 0) {
      result.push(`FizzBuzz`);
    } else if (i % 3 === 0) {
      result.push(`Buzz`);
    } else if (i % 2 === 0) {
      result.push(`Fizz`);
    }
  }
  return result;
};
/**
  8: Cho một chuỗi bất kỳ, đếm số lượng ký tự 'vowels' có trong chuỗi.
  Hint:
    + vowels: là các ký tự u e a o i
*/
// Version 01: Sử dụng includes
const coutnVowels = (str) => {
  if (typeof str !== "string") return null;
  const vowels = ["u", "e", "a", "o", "i"];
  const arr = str.trim().split("");
  let count = 0;
  for (let item of arr.toLowerCase()) {
    if (vowels.includes(item)) {
      count += 1;
    }
  }
  return count;
};
// Verison 02: Sử dụng RegularExpression
// -> Sử dụng String.Properties.match(): truy xuất kết quả của việc so khớp một chuỗi với một biểu thức chính quy.
const countVowelsUsingRegex = (str) => {
  if (typeof str !== "string") return null;
  return str.match(/[aeiou]/gi) === null ? 0 : str.match(/[aeiou]/gi).length;
};
// Version 03: Sử dụng replace kết hợp với Regex
const countVowelsUsReplace = (str) => {
  if (typeof str !== "string") return null;
  return str.replace(/[^ueaoi]/gi, "").length;
};
/**
  9. Cho một mảng gồm các giá trị số [1,2,3,1,1,1,2,2,2,5,5,5,7,6,9,8,8,8].
  Viết một function trả về 1 mảng với các giá trị unique.
  Result: [1,2,3,4,5,6,7,8]
  Hint: Sử dụng Set, Filter, Reduce
*/
// Version 01: Sử dụng Array.From(new Set(array))
const uniqueItemInArray = (arr) => {
  return typeof arr === "object"
    ? Array.from(new Set(arr)).sort((a, b) => a - b)
    : null;
};
// Version 02: Sử dụng Filter
const uniqueItemFilter = (arr) => {
  if (typeof arr !== "object") return null;
  return arr.filter((item, index) => arr.indexOf(item) === index);
};
// Version 03: Sử dụng Reduce
const uniqueItemReduce = (arr) => {
  if (typeof arr !== "object") return null;
  return arr.reduce((acc, item) => {
    if (!acc.includes(item)) {
      acc.push(item);
    }
    return acc;
  }, []);
};

/**
  10: Viết chương trình xử lý 1 mảng lớn thành nhiều mảng con dự vào một số nguyên đầu vào.
  Example ([1,2,3,4,5],2) -> [[1,2], [3,4], [5]]
*/
const splitArray = (arr, size) => {
  if (typeof arr !== "object" || typeof size !== "number") return null;
  let result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};
/**
  11. Viết một hàm JavaScript để kiểm tra xem 'đầu vào' có phải là một mảng hay không.
  Test Data :
    + isArray('w3resource') --> false
    + isArray([1, 2, 4, 0]) --> true
*/
const isArr = (arr) => {
  return Array.isArray(arr);
};
/**
  13. Viết một hàm JavaScript để lấy phần tử đầu tiên của một mảng.
  => Truyền tham số 'n' sẽ trả về 'n' phần tử đầu tiên của mảng
  Test Data :
    + first([7, 9, 0, -2])    --> 7
    + first([],3)             --> []
    + first([7, 9, 0, -2],3)  --> [7, 9, 0]
    + first([7, 9, 0, -2],6)  --> [7, 9, 0, -2]
    + first([7, 9, 0, -2],-3) --> []
*/
const first = (arr, n = 1) => {
  if (typeof arr !== "object" || typeof n !== "number") return null;
  if (arr.length === 0 || n < 0) return [];
  return arr.slice(0, n);
};
/**
  14. Viết một hàm JavaScript để lấy phần tử cuối cùng của một mảng.
  Truyền tham số 'n' sẽ trả về 'n' phần tử cuối cùng của mảng
  Test Data :
    + last([7, 9, 0, -2])   --> -2
    + last([7, 9, 0, -2],3) --> [9, 0, -2]
    + last([7, 9, 0, -2],6) --> [7, 9, 0, -2]
*/
// Version 01: Sử dụng Array.slice()
const last = (arr, n = 1) => {
  if (typeof arr !== "object" || typeof n !== "number") return null;
  if (arr.length === 0) return [];
  if (n === 1) return arr[arr.length - 1];
  return arr.length < n ? arr : arr.slice(arr.length - n);
};
// Version 02:
const lastVer02 = (arr, numb) => {
  if (Array.isArray(arr)) {
    if (numb === undefined) return arr[arr.length - 1];
    return numb > 0 ? arr.slice(-numb) : arr.slice(numb);
  }
  return null;
};
// Versionn 03:
const lastVer03 = (arr, numb) => {
  if (Array.isArray(arr)) {
    if (numb === undefined) return arr[arr.length - 1];
    return arr.slice(Math.max(arr.length - numb, 0));
  }
  return null;
};
/**
  15. Viết một chương trình JavaScript đơn giản để nối tất cả các phần tử của mảng sau thành một chuỗi
  Sample array : myColor = ["Red", "Green", "White", "Black"];
  Result :
    + "Red,Green,White,Black"
    + "Red,Green,White,Black"
    + "Red+Green+White+Black"
*/
// Sử dụng join()
const myColor = (arr, symbol) => {
  if (typeof arr !== "object") return null;
  return arr.join(`${symbol}`);
};
// Sử dụng for
const myColorFor = (arr, symbol) => {
  if (typeof arr !== "object") return null;
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    result += `${arr[i]}${symbol}`;
  }
  return result.slice(0, -1);
};
// Sử dụng for version 02
const myColorForVer02 = (arr, symbol) => {
  if (typeof arr !== "object" || typeof symbol !== "string") return null;
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    if (i !== arr.length - 1) {
      result += `${arr[i]}${symbol}`;
    } else {
      result += arr[i];
    }
  }
  return result;
};
/**
  16. Viết chương trình JavaScript chấp nhận một số làm đầu vào và chèn dấu gạch ngang (-) vào giữa hai số chẵn.
  Example:
  + 025468  --> 0-254-6-8.
*/
const insertDash = (numb) => {
  if (typeof numb !== "number") return null;
  let result = "";
  let str = numb.toString();
  for (let i = 0; i < str.length; i++) {
    // Xét phần tử đó và sau nó có chia hết cho 2 hay không ?
    if (str[i] % 2 === 0 && str[i + 1] % 2 === 0) {
      result += `${str[i]}-`;
    } else {
      result += str[i];
    }
  }
  return result;
};
// insertDash version 02: using array
const inserDashVer02 = (numb) => {
  if (typeof numb !== "number") return null;
  let result = [];
  let str = numb.toString();
  for (let i = 0; i < str.length; i++) {
    // Xét phần tử đó và sau nó có chia hết cho 2 hay không ?
    if (str[i] % 2 === 0 && str[i + 1] % 2 === 0) {
      result.push(`${str[i]}-`);
    } else {
      result.push(str[i]);
    }
  }
  return result.join("");
};
/**
  17. Viết chương trình JavaScript để sắp xếp các mục của một mảng.
  Example:
    + [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ]; -->  [-4, -3, 1, 2, 3, 5, 6, 7, 8]
*/
const sortArr = (arr) => {
  if (typeof arr !== "object") return null;
  return arr.sort((a, b) => a - b);
};
// Sorting array using bubbersort
const sortUsingBubblesort = (arr) => {
  if (typeof arr !== "object") return null;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};
/**
  18. Viết chương trình JavaScript để tìm mục xuất hiện thường xuyên nhất trong một mảng.
  Example:
    + [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3] --> a (5 lần)
*/
const countMaxItem = (arr) => {
  if (typeof arr !== "object") return null;
  let result = {};
  for (let i = 0; i < arr.length; i++) {
    if (result[arr[i]] === undefined) {
      result[arr[i]] = 1;
    } else {
      result[arr[i]]++;
    }
  }
  let max = 0;
  let maxItem = "";
  for (let key in result) {
    if (result[key] > max) {
      max = result[key];
      maxItem = key;
    }
  }
  return `${maxItem} (${max} lần)`;
};
// Version 02:
// Đếm số lần xuất hiện của giá trị trong mảng
const createObj = (arr) => {
  if (typeof arr !== "object") return null;
  return arr.reduce((obj, item) => {
    if (!obj[item]) {
      obj[item] = 1;
    } else {
      obj[item] = obj[item] + 1;
    }
    return obj;
  }, {});
};
const countMaxItemVer02 = (arr) => {
  let obj = createObj(arr);
  let max = 0;
  let maxItem = "";
  for (let key in obj) {
    if (obj[key] > max) {
      max = obj[key];
      maxItem = key;
    }
  }
  return `${maxItem} (${max} lần)`;
};
/**
  19. Viết một chương trình JavaScript chấp nhận một chuỗi làm đầu vào và hoán đổi trường hợp của mỗi ký tự.
  Example:
    + 'The Quick Brown Fox' -->  'tHE qUICK bROWN fOX'.
    + 'Javascript' --> 'jAVASCRIPT'
*/
const swapLetter = (str) => {
  if (typeof str !== "string") return null;
  let result = [];
  const arrLetter = str.split("");
  for (let item of arrLetter) {
    if (item === item.toUpperCase()) {
      result.push(item.toLowerCase());
    } else {
      result.push(item.toUpperCase());
    }
  }
  return result.join("");
};
// Sử dụng map
const swapLetterVer02 = (str) => {
  if (typeof str !== "string") return null;
  return str
    .split("")
    .map((item) =>
      item === item.toUpperCase() ? item.toLowerCase() : item.toUpperCase()
    )
    .join("");
};
// Sử dụng Reduce
const swapLetterVer03 = (str) => {
  if (typeof str !== "string") return null;
  return str.split("").reduce((result, item) => {
    return item === item.toUpperCase()
      ? result + item.toLowerCase()
      : result + item.toUpperCase();
  }, "");
};
/**
  20. Viết chương trình JavaScript để tìm tổng bình phương của một vectơ số.
  Example:
    + [0,1,2,3,4] --> 30
  Giải Thich: 0^2 + 1^2 + 2^2 + 3^2 + 4^2 = 30
*/
const sumOfSquare = (arr) => {
  if (typeof arr !== "object") return null;
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += Math.pow(arr[i], 2);
  }
  return result;
};
// Sử dụng reduce
const sumOfSquareVer02 = (arr) => {
  if (typeof arr !== "object") return null;
  return arr.reduce((result, item) => (result += Math.pow(item, 2)), 0);
};
/**
  21. Viết chương trình JavaScript để tính tổng và tích của một mảng số nguyên
*/
const sumAndProduct = (arr) => {
  if (typeof arr !== "object") return null;
  let sum = 0;
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    product *= arr[i];
  }
  return `Tổng: ${sum}, Tích: ${product}`;
};
/**
  22. Viết một chương trình JavaScript để xáo trộn một mảng
*/
// Sử dụng Math.random()
const mixArray = (arr) => {
  if (typeof arr !== "object") return null;
  return arr.sort(() => 0.5 - Math.random());
};
// Sử dụng array
const mixArrayVer02 = (arr) => {
  if (typeof arr !== "object") return null;
  let result = [];
  while (arr.length > 0) {
    let index = Math.floor(Math.random() * arr.length);
    result.push(arr[index]);
    // Exits Loop
    arr.splice(index, 1);
  }
  return result;
};
/**
  23. Viết chương trình JavaScript để thực hiện tìm kiếm nhị phân
  Lưu ý: Thuật toán tìm kiếm nhị phân hoặc tìm kiếm nửa khoảng tìm vị trí của giá trị đầu vào được chỉ định trong một mảng được sắp xếp theo giá trị khóa.
  Example: array : [1, 2, 3, 4, 5, 7, 8, 9];
    + binary_Search(items, 1) --> 0
    + binary_Search(items, 4) --> 3
*/
function binarySearch(arr, num) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === num) {
      return mid;
    } else if (num > arr[mid]) {
      start = mid + 1;
    } else if (num < arr[mid]) {
      end = mid - 1;
    }
  }
  return -1;
}
/**
  24. Có hai mảng với các giá trị riêng lẻ
    + array1 = [1,0,2,3,4];
    + array2 = [3,5,6,7,8,13];
  => Hãy viết một chương trình JavaScript để tính tổng của mỗi giá trị chỉ mục riêng lẻ từ các mảng đã cho.
  Output : [4, 5, 8, 10, 12, 13] --> (array1[0] + array2[0] = 4)
*/
// Sử dụng với 2 mảng có độ dài bằng nhau
const sumTwoArray = (arr1, arr2) => {
  if (typeof arr1 !== "object" || typeof arr2 !== "object") return null;
  return arr1.map((item, index) => item + arr2[index]);
};
// Sử dụng với 2 mảng có độ dài khác nhau
const twoArrayDiffLength = (arr1, arr2) => {
  if (typeof arr1 !== "object" || typeof arr2 !== "object") return null;
  let result = [];
  for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
    result.push((arr1[i] || 0) + (arr2[i] || 0));
  }
  return result;
};
/**
  25. Viết chương trình JavaScript để tìm các giá trị trùng lặp trong một mảng JavaScript.
*/
// Using for
const findDuplicate = (arr) => {
  if (typeof arr !== "object") return null;
  let result = {};
  for (let i = 0; i < arr.length; i++) {
    if (result[arr[i]] === undefined) {
      result[arr[i]] = 1;
    } else {
      result[arr[i]] += 1;
    }
  }
  return Object.keys(result).filter((item) => result[item] !== 1);
};
// Using reduce
const findDuplicateVer02 = (arr) => {
  if (typeof arr !== "object") return null;
  const obj = arr.reduce((result, item) => {
    if (!result[item]) {
      result[item] = 1;
    } else {
      result[item] += 1;
    }
    return result;
  }, {});
  return Object.keys(obj).filter((item) => obj[item] > 1);
};
/**
  26. Viết một chương trình JavaScript để tính toán hợp nhất của hai mảng.
  Sample Data :
    + union([1, 2, 3], [100, 2, 1, 10]) --> [1, 2, 3, 10, 100]
*/
// Using [...new Set(arr1.concat(arr2))]
const union = (arr1, arr2) => {
  if (typeof arr1 !== "object" || typeof arr2 !== "object") return null;
  return [...new Set([...arr1, ...arr2])].sort((a, b) => a - b);
};
// Using Filter
const unionVer02 = (arr1, arr2) => {
  if (typeof arr1 !== "object" || typeof arr2 !== "object") return null;
  const mergeArr = [...arr1, ...arr2];
  return mergeArr
    .filter((item, index) => mergeArr.indexOf(item) === index)
    .sort((a, b) => a - b);
};
// Usinhg reduce
const unionVer03 = (arr1, arr2) => {
  if (typeof arr1 !== "object" || typeof arr2 !== "object") return null;
  const mergeArr = [...arr1, ...arr2];
  return mergeArr
    .reduce((result, item) => {
      if (!result.includes(item)) result.push(item);
      return result;
    }, [])
    .sort((a, b) => a - b);
};
/**
  27. Viết một chương trình JavaScript để làm phẳng một mảng lồng nhau (bất kỳ độ sâu nào)
  Example :
    + flatten([1, [2], [3, [[4]]],[5,6]]) --> [1, 2, 3, 4, 5, 6]
*/
// Using Reduce
const flattenUsingReduce = (arr) => {
  if (typeof arr !== "object") return null;
  return arr.reduce((result, item) => {
    if (typeof item === "object") {
      return result.concat(flattenUsingReduce(item));
    } else {
      return result.concat(item);
    }
  }, []);
};
// Sử dụng Array.flat()
const flattenUsingFlatr = (arr) => {
  return typeof arr === "object" ? arr.flat(Infinity) : null;
};
/**
  28. Viết một hàm JavaScript để tìm sự khác biệt của hai mảng.
  Test Data :
    + difference([1, 2, 3], [100, 2, 1, 10])   --> ["3", "10", "100"]
    + difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]) --> ["6"]
    + difference([1, 2, 3], [100, 2, 1, 10])   --> ["3", "10", "100"]
*/
const difference = (arr1, arr2) => {
  if (typeof arr1 !== "object" || typeof arr2 !== "object") return null;
  const arrConcat = [...arr1.flat(Infinity), ...arr2.flat(Infinity)];
  let reuslt = {};
  for (let i = 0; i < arrConcat.length; i++) {
    if (reuslt[arrConcat[i]] === undefined) {
      reuslt[arrConcat[i]] = 1;
    } else {
      reuslt[arrConcat[i]]++;
    }
  }
  return Object.keys(reuslt).filter((item) => reuslt[item] === 1);
};
// Sử dụng Obj
const differenceVer02 = (arr1, arr2) => {
  // Check type Array
  if (typeof arr1 !== "object" || typeof arr2 !== "object") return null;
  // Flatten Array
  const arrConcat = [...arr1.flat(Infinity), ...arr2.flat(Infinity)];
  // Count the number of occurrences of the element in the array
  const obj = arrConcat.reduce((acc, item) => {
    if (!acc[item]) {
      acc[item] = 1;
    } else {
      acc[item]++;
    }
    return acc;
  }, {});
  // Filter the element that occurs only once
  let result = [];
  for (let key in obj) {
    if (obj[key] === 1) {
      result.push(key);
    }
  }
  return result;
};
/**
  29. Viết một hàm JavaScript để hợp nhất hai mảng và loại bỏ tất cả các phần tử trùng lặp.
  Example:
    array1 = [1, 2, 3];
    array2 = [2, 30, 1];
  + merge_array(array1, array2) --> [3, 2, 30, 1]
*/
// Sử dụng Set
const mergeArray = (arr1, arr2) => {
  if (typeof arr1 !== "object" || typeof arr2 !== "object") return null;
  return [...new Set(arr1.concat(arr2))];
};
// Sử dụng filter
const mergeArrayVer02 = (arr1, arr2) => {
  if (typeof arr1 !== "object" || typeof arr2 !== "object") return null;
  return arr1
    .concat(arr2)
    .filter((item, index) => arr1.concat(arr2).indexOf(item) === index);
};
// Sử dụng reduce
const mergeArrayVer03 = (arr1, arr2) => {
  if (typeof arr1 !== "object" || typeof arr2 !== "object") return null;
  return arr1.concat(arr2).reduce((acc, item) => {
    if (!acc.includes(item)) acc.push(item);
    return acc;
  }, []);
};
/**
 * 30. Viết một hàm JavaScript để xóa một phần tử cụ thể khỏi một mảng.
  Example:
    + remove_array_element([2, 5, 9, 6], 5) --> [2, 9, 6]
 */
// Using Filter
const remove_array_element = (arr, element) => {
  if (typeof arr !== "object") return null;
  return arr.filter((item) => item !== element);
};
// Using For
const remove_array_elementVer02 = (arr, element) => {
  if (typeof arr !== "object") return null;
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== element) result.push(arr[i]);
  }
  return result;
};
// Using For in
const remove_array_elementVer03 = (arr, element) => {
  if (typeof arr !== "object") return null;
  let result = [];
  let index = arr.indexOf(element) + "";
  for (let idx in arr) {
    if (idx !== index) result.push(arr[idx]);
  }
  return result;
};
// Using Splice
const remove_array_elementVer04 = (arr, element) => {
  if (typeof arr !== "object") return null;
  let index = arr.findIndex((item) => item === element);
  arr.splice(index, 1);
  return arr;
};
