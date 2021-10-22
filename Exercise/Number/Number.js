/**
  1.1 Viết function tính diện tích hình chữ nhật function rectangle()
  1.2 Viết function tính chu vi hình chữ nhật function perimeterOfRectangle()
  1.3 Viết function tính diện tích hình tròn function circle()
 */
// 1.1
const rectangle = (width, height) => {
  if (width <= 0 || height <= 0) return "";
  return width * height;
};
// 1.2
const perimeterOfRectangel = (width, height) => (width + height) * 2;
// 1.3
const theAreaOfcircle = (radius) => (radius ** 2 * Math.PI).toFixed(2);
/**
  2.1 Viết function kiểm tra số chẵn hay số lẻ function Odd/Even()
  2.2 Viết function kiểm tra số chia hết cho 5 function divisible()
  2.3 Viết function kiểm tra số chính phương function perfectSquare()
  2.4 Viết function kiểm tra số nguyên tố function isPrime()
  2.5 Viết function kiểm tra số hoàn thiện function isPerfectNumb()
*/
// 2.1
const OddNumber = (numb) => {
  if (numb < 0 || numb !== "Number") return -1;
  return numb % 2 === 0 ? false : true;
};
// EvenNumber
const evenNumber = (numb) => {
  if (numb < 0 || typeof numb !== "Number") return -1;
  return numb % 2 === 0 ? true : false;
};
// 2.2
const divisible = (numb) => {
  if (numb < 0 || typeof numb !== "Number") return -1;
  return numb % 5 === 0 ? true : false;
};
// 2.3
const perfectSquare = (numb) => {
  if (numb < 0 || typeof numb !== "Number") return -1;
  return numb === Math.sqrt(numb) ** 2 ? true : false;
};
// 2.4
const isPrimeNumber = (numb) => {
  if (numb < 0 || typeof numb !== "Number") return -1;
  if (numb < 2) return false;
  for (let i = 2; i < Math.sqrt(numb); i++) {
    if (numb % i === 0) return false;
  }
  return true;
};
// 2.5
const isPerfectNumb = (numb) => {
  let result = 0;
  if (numb < 1 || typeof numb !== "Number") return -1;
  for (let i = 1; i < numb; i++) {
    if (numb % i === 0) {
      result += i;
    }
  }
  return numb === result ? true : false;
};
/**
  3.1 Viết function chuyển đổi giờ sang giây, function convertHourToSeconds()
  3.2 Cho 3 chữ số tìm Max, function max(a,b,c)
  3.3 Cho 3 chữ số tìm Max là số chẵn, function maxEven(a,b,c)
*/
// 3.1
const convertHourToSeconds = (hour) => hour * 3600;
// 3.2
const findMaxOfThreeNumb = (a, b, c) => {
  let max = a;
  if (b > max) max = b;
  if (c > max) max = c;
  return max;
};
// 3.3
const findMaxEvenNumb = (a, b, c) => {
  let max = Number.NEGATIVE_INFINITY;
  if (a > max && evenNumber(a)) max = a;
  if (b > max && evenNumber(b)) max = b;
  if (c > max && evenNumber(c)) max = c;
  return max;
};
/**
  4.1 Rút trích chữ số ở hàng đơn vị của một số có 3 chữ Số, function extractTheOnes()
  4.2 Rút trích chữ số ở hàng chục của một số có 3 chữ Số, function extractTheTens()
  4.3 Rút trích chữ số ở hàng trăm vị của một số có 3 chữ Số, function extractTheHundres()
  4.4 Tính tổng các chữ số của một số có 3 chữ Số, function sumAllDigits()
*/
// 4.1
const extractTheOnes = (numb) => {
  return numb % 10;
};
// 4.2
const extractTheTens = (numb) => {
  return Math.trunc(numb / 10) % 10;
};
//4.3
const extractTheHundres = (numb) => {
  return Math.trunc(numb / 100);
};
const sumAllDigits = (numb) => {
  const ones = numb % 10;
  const tens = Math.trunc(numb / 10) % 10;
  const hundered = Math.trunc(numb / 100);
  return ones + tens + hundered;
};

/**
  5. Bài toán gọi taxi
    Viết hàm gọi taxi getTaxiCount(passagersCount) nhận vào số hàng khách và trả về là số taxi cần gọi để chở hết số khách đó
  Yêu cầu:
    + Khi chỉ số khách lớn hơn 4, ưu tiên dùng xe 7 chỗ
    + Nếu số khách nhỏ hơn hoặc bằng 4 dùng xe 4 chỗ
  Example:
    + getTaxiCount(3)  -->  1 xe 4 chỗ
    + getTaxiCount(6)  -->  1 xe 7 chỗ
    + getTaxiCount(10)  --> 2 xe vì 1 xe 7 và 1 xe 4
    + getTaxiCount(20)  --> 3 xe 7 chỗ
*/
const getTaxiCount = (passagersCount) => {
  if (passagersCount <= 4) return 1;
  if (passagersCount > 4) return Math.ceil(passagersCount / 7);
};
/**
  6. Tìm chữ số lớn nhất của một số nguyên dương
    Viết hàm function getMaxDigit(n) {} để tìm ra chữ số lớn nhất của một số nguyên dương n (0 <= n < 1000)
  Yêu cầu:
    + getMaxDigit(1) --> 1
    + getMaxDigit(2) --> 2
 */
const getMaxDigit = (numb) => {
  if (numb < 0 || numb >= 1000) return -1;
  const ones = numb % 10;
  const tens = Math.trunc(numb / 10) % 10;
  const hundred = Math.trunc(numb / 100);
  let max = ones;
  if (tens > max) max = tens;
  if (hundred > max) max = hundred;
  return max;
};
// * Sử dụng chuỗi để giải quyết
const getMaxDigitVer02 = (numb) => {
  // ! Convert Number to String
  let newNumb = numb + "";
  return Number(Math.max(...newNumb.split("")));
};
/**
  7. So sánh 2 số nguyên
    Viết hàm compareNumbers(a, b) nhận vào 2 số nguyên bất kỳ:
  Trả về:
    + 1 nếu a > b
    + 0 nếu a = b
    + -1 nếu a < b
*/
const compareNumbers = (a, b) => {
  if (a === b) return 0;
  if (a > b) return 1;
  if (a < b) return -1;
};
/**
  8. Kiểm tra tối đa có 3 chữ số đối xứng hay không ?
    Viết hàm isSymmetricNumber(n) để nhận vào số nguyên dương n có tối đa 3 chữ số và trả về true nếu n là số đối xứng ngược lại trả về false
  Giả sử:
    + Tham số n truyền vào luôn luôn là số có tối đa 3 chữ số (0 --> 999)
    + Số đối xứng là số mà đọc từ trái sang phải nó giống như đọc từ phải sang trái.
*/
// ! Sử dụng chuỗi để giải quyết số có 3 chữ số
const isSymmetricNumberVer01 = (numb) => {
  if (numb < 0 || numb >= 1000) return -1;
  const str = numb + "";
  return str[0] === str[str.length - 1] ? true : false;
};
// ! Sử dụng mảng để giải quyết số có 3 chữ số
const isSymmetricNumberVer02 = (numb) => {
  if (numb < 0 || numb >= 1000) return -1;
  let arrNumb = numb.toString().trim().split("");
  return arrNumb[0] === arrNumb[arrNumb.length - 1] ? true : false;
};
// ! Sử dụng number để giải quyết cho mọi loại số đối xứng
const isSymmetricNumberVer03 = (n) => {
  if (n < 0 || n > 1000) return -1;
  var soNghichDao = 0;
  var number = n;
  while (number > 0) {
    var sc = number % 10;
    soNghichDao = soNghichDao * 10 + sc;
    number = Math.floor(number / 10);
  }
  return soNghichDao === n ? true : false;
};
/**
  9. Viết một hàm JavaScript để chuyển đổi một số từ cơ sở này sang cơ sở khác
  Lưu ý: Cơ số phải nằm trong khoảng tử 20 đến 36
  Test Data :
    + base_convert('E164',16,8)  --> "160544"
    + base_convert(1000,2,8)     --> "10"
*/
// ! Chuyển một số sang hệ nào đó sử dụng parseInt(number, radix)
const baseConvert = (number, intitalBase, changeBase) => {
  if ((intitalBase && changeBase) < 2 || (intitalBase && changeBase) > 36)
    return `Base between 2 to 36`;
  return parseInt(number.toString(), intitalBase).toString(changeBase);
};
/**
  10. Viết một hàm JavaScript để chuyển một số nhị phân thành một số thập phân.
  Test Data :
    + bin_to_dec('110011')  --> 51
    + bin_to_dec('100')     --> 4
*/
const convertBinToDec = (numb) => {
  const BIN = 2;
  const DEC = 10;
  return parseInt(numb.toString(), BIN).toString(DEC);
};
/**
  11. Viết một hàm JavaScript để chuyển đổi một số thập phân thành số nhị phân, thập lục phân hoặc bát phân.
  Test Data :
    + dec_to_bho(120,'B')  --> "1111000"
    + dec_to_bho(120,'H')  --> "78"
    + dec_to_bho(120,'O')  --> "170"
*/
const decToBHO = (numb, base) => {
  const DEC = 10;
  const BIN = 2;
  const HEC = 16;
  const OCT = 8;
  if (numb < 0) {
    numb = 0xffffffff + n + 1;
  }
  switch (base) {
    case "B": {
      return +parseInt(numb.toString(), DEC).toString(BIN);
      break;
    }
    case "H": {
      return +parseInt(numb.toString(), DEC).toString(HEC);
      break;
    }
    case "O": {
      return +parseInt(numb.toString(), DEC).toString(OCT);
      break;
    }
    default:
      return `Error....`;
  }
};
/**
  12.Viết một hàm JavaScript để tạo một số nguyên ngẫu nhiên
  Test Data :
    + rand(20,1)  --> 15
    + rand(1,10)  --> 5
    + rand(6)     --> 1
    + rand()      --> 0
*/
const random = (min, max) => {
  if (min == null || max == null) return 0;
  if (max == null) {
    min = max;
    max = 0;
  }
  return min + Math.floor(Math.random() * (max - min + 1));
};
/**
  13. Tìm giá trị max và giá trị min có trong mảng
*/
const findMinToArr = (arr) => {
  if (typeof arr !== "object") return -1;
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
};
/**
  14. Viết một hàm JavaScript để nhận ước chung lớn nhất (gcd) của hai số nguyên
  Lưu ý: Theo Wikipedia - Trong toán học, ước chung lớn nhất (gcd) của hai hoặc nhiều số nguyên:
  + Khi ít nhất một trong số chúng không phải là số 0,
  + Là số nguyên dương lớn nhất chia các số không có dư.
  Example:  8 và 12 là 4.
  Test Data :
    + gcd_two_numbers(12, 13) --> 1
    + gcd_two_numbers(9, 3) --> 3
  Mô tả:
    +  (8,36)
    +  (36,4)
    +  (4,4)
    +  0 => return 4
*/
const gcdTwoNumber = (a, b) => {
  // ! Không được là số âm và không phải là số
  if (typeof a !== "number" || typeof b !== "number") return false;
  let x = Math.abs(a);
  let y = Math.abs(b);
  while (y) {
    let t = y;
    y = y % x;
    x = t;
  }
  return x;
};
/**
  15. Viết một hàm JavaScript để kiểm tra xem một số có phải là lũy thừa của 2 hay không
  Test Data :
    + power_of_2(16)  --> true
    + power_of_2(18)  --> false
    + power_of_2(256) --> true
*/
const powerOfTwo = (numb) => {
  if (typeof numb !== "number" || numb < 0) return -1;
  return Math.sqrt(numb) % 2 === 0 ? true : false;
};
// Version 02:
const powerOfTwoVer02 = (number) => {
  return number % Math.sqrt(number) === 0;
};
/**
  16. Viết một hàm JavaScript để làm tròn một số đến các chữ số thập phân cho trước.
  Test Data :
    + precise_round(12.375,2)       --> 12.38
    + precise_round(-10.3079499, 3) --> -10.308
    + precise_round(10.49999,0)     --> 10
    + precise_round(10.49999,2)     --> 10.50
*/
const preciseRound = (number, radix) => {
  return +number.toFixed(radix);
};
/**
  17. Viết một hàm JavaScript để kiểm tra xem một biến có phải là số hay không
  Test Data :
    + isNumeric(12)     --> true
    + isNumeric('abcd') --> false
    + isNumeric('12')   --> true
    + isNumeric(' ')    --> false
    + isNumeric(1.20)   --> true
    + isNumeric(-200)   --> true
*/
const isNumberic = (number) => {
  return typeof number === "number" ? true : false;
};

/**
  18. Viết một hàm Javascript tính tổng các giá trị có trong một mảng
  Test Data :
    + sum([1,2,3])        --> 6
    + sum([100,-200,3])   --> -97
    + sum([1,2,'a',3])    --> 6
*/
const sumArr = (arr) => {
  if (typeof arr !== "object") return -1;
  let arrFilter = [...arr].filter((item) => typeof item === "number");
  return [...arrFilter].reduce((sum, item) => {
    return (sum += item);
  }, 0);
};
/**
  19. Viết một hàm JavaScript để tính tích các giá trị trong một mảng.
  Test Data :
    + product([1,2,3])        --> 6
    + product([100,-200,3])   --> -6000
    + product([1,2,'a',3])    --> 6
*/
const productArr = (arr) => {
  if (typeof arr !== "object") return -1;
  let arrFilter = [...arr].filter((item) => typeof item === "number");
  return [...arrFilter].reduce((sum, item) => {
    return (sum *= item);
  }, 1);
};
/**
  20.Tạo một hàm Pitago trong Javascript
  Lưu ý: Định lý Pitago cho chúng ta biết mối quan hệ trong mọi tam giác vuông là: c^2 = a^2 + b62, trong đó c là cạnh huyền và a, b là hai chân của tam giác
  Test Data :
    + pythagorean_theorem(2, 4) --> 4.47213595499958
    + pythagorean_theorem(3, 4) --> 5
*/
const pythagoreanTheorem = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") return -1;
  return Math.sqrt(a ** 2 + b ** 2);
};
/**
  21. Viết một hàm JavaScript để tính căn thứ n của một số.
  Test Data :
    + nthroot(64, 2)  --> 8
    + nthroot(64, -2) --> 0.125
*/
const nthRoot = (number, n) => {
  if (typeof number !== "number" || typeof n !== "number") return -1;
  return n > 0 ? Math.sqrt(number) : number ** (1 / n);
};
/**
  22. Viết một hàm JavaScript để chuyển một số dương thành số âm.
  Test Data :
    + pos_to_neg(15) --> -15
*/
const posToNeg = (number) =>
  typeof number !== "number" ? `Erorr...` : (number *= -1);
/**
  23. Viết một hàm JavaScript để lấy số cao nhất từ ​​ba số khác nhau.
  Test Data :
    + highestOfThree(-5, 4, 2)  --> 4
*/
const highestOfThree = (a, b, c) => {
  if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number")
    return -1;
  let max = a;
  if (b > max) max = b;
  if (c > max) max = c;
  return max;
};
/**
  24. Viết một hàm JavaScript để đếm các chữ số của một số nguyên.
*/
const countNumb = (numb) => {
  if (typeof numb !== "number" || numb < 0) return -1;
  let arrNumb = numb + "".split("");
  return arrNumb.length;
};
/**
  25. Viết một hàm JavaScript để nhận tất cả các số nguyên tố từ 0 đến một số được chỉ định.
  Test Data :
    + primeFactorsTo(5)   --> [2, 3, 5]
    + primeFactorsTo(15)  --> [2, 3, 5, 7, 11, 13]
*/
const primeFactorsTo = (number) => {
  let arr = [];
  for (let i = 2; i <= number; i++) {
    if (isPrimeNumber(i)) {
      arr.push(i);
    }
  }
  return arr;
};
