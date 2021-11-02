/**
  1. Viết function in hoa ký tự đầu tiên của chuỗi, tất cả ký tự còn lại sẽ là viết thường, function capitalize()
*/
const capitalize = (str) => {
  const firstLetter = str.toLowerCase()[0].toUpperCase();
  const res = str.toLowerCase().slice(1);
  return `${firstLetter}${res}`;
};
/**
  2. Kiểm tra trong chuỗi có chứa domain '@gmail.com' hay không ? function hasEmail()
*/
const hasEmail = (emailAddress) => {
  return emailAddress.includes("@gmail.com");
};
/**
  3. Biến đổi về dạng chuẩn hóa theo yêu cầu của đề bài: parameterize('hello-nam')
*/
const parameterize = (str) => {
  if (typeof str !== "string") return "";
  return str.trim().replace(" ", "-");
};
/**
  4. Viết function truncate(text,maxLenght) kiểm tra chiều dài của chuỗi, nếu nó lớn hơn độ dài quy định thì, thay thế chỗ đoạn chữ thừa thành ellipsis character "..."
    + String.fromCodePoint(8230)
    + \u2026 ==> '...'
*/
const truncate = (text, maxLenght) => {
  if (typeof text !== "string" || text.length > maxLenght) {
    return `${text.trim().slice(0, maxLenght - 1)}${String.fromCodePoint(
      8230
    )}`;
  }
  return text;
};

const truncateVer02 = (str, maxLenght) => {
  if (typeof str !== "string" || str.length > maxLenght) {
    return `${str.trim().slice(0, maxLenght - 1)}\u2026`;
  }
  return str;
};
/**
  5. Tìm và xóa nguyên âm trong câu văn đầu
    Viết hàm function removeVowel(str) để tìm và remove tất cả các nguyên âm có trong câu văn đầu vào
  Hint: nguyên âm là các ký tự: u,i,e,a,i
*/
// version 01:
const removeVowel = (str) => {
  if (typeof str !== "string" || str.length === "") return null;
  return str
    .trim()
    .toLowerCase()
    .split()
    .map((item) => {
      return item.replace(/[uieou]/g, "");
    })
    .join("");
};
// Version 02:
const removeVowelVer02 = (str) => {
  if (typeof str !== "string" || str.length === "") return null;
  return str
    .trim()
    .toLowerCase()
    .replace(/[uieou]/gi, "");
};
// Version 03:
const removeVowelVer03 = (str) => {
  if (typeof str !== "string" || str.length === "") return null;
  const vowel = {
    a: true,
    e: true,
    u: true,
    o: true,
    i: true,
  };
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (!vowel[str[i].toLowerCase()]) {
      result += str[i];
    }
  }
  return result;
};
/**
  6. Format số giây luôn hiển thị hai chữ số
  Viết hàm formatSeconds(seconds) nhận vào là số giây (0 <= seconds < 60) và trả về chuỗi luôn có hai chữ số của số giây
  Bài này áp dụng trong thực tế khi muốn xây show đồng hồ điện tử để cho đẹp, mình đảm bảo luôn show 2 chữ số. dù số giờ phút giây có 1 chữ số.
  Yêu cầu:
    + Version01: sử dụng if/else
    + Version02: sử dụng slice()
*/
// + Version01: sử dụng if/else
const formatSeconds = (seconds) => {
  return seconds < 10 ? `${0}${seconds}` : `${seconds + ""}`;
};
// + Version02: sử dụng slice()
const formatSecondsVer02 = (seconds) => {
  if (seconds < 0 || seconds > 60) return -1;
  if (seconds < 10) {
    return `${0}${seconds.toString().slice(0)}`;
  }
  return seconds + "";
};
/**
  6. Convert số giây sang chuỗi hh::mm::ss
  Viết hàm formatTime(seconds) nhận vào số giây seconds với (0 <= seconds < 86400)
  Trả về là một chuỗi định dạng hh::mm::ss
  Yêu cầu:
    + hh: là số giờ
    + mm: là số phút
    + ss: là số giây
*/
const formatTime = (seconds) => {
  const PER_HOUR = 3600;
  const PER_MINUTE = 60;
  let hours = Math.floor(seconds / 3600);
  let minute = Math.floor((seconds - hours * PER_HOUR) / PER_MINUTE);
  seconds = seconds - hours * PER_HOUR - minute * PER_MINUTE;
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minute < 10) {
    minute = `0${minute}`;
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  return `${hours}:${minute}:${seconds}`;
};
/**
  7.Kiểm tra URL có sử dụng phương thức bảo mật
  Viết hàm isSecureURL(url) nhận vào một là một url và trả về true nếu url có sử dụng phương thức bảo mật ngược lại và trả về false
  Quy ước URL được xem là có sử dụng phương thức bảo mật nếu bắt đầu bằng:
    + https
    + wss
  Example:
    isSecureURL('http://example.com') --> false vì phải bắt đầu bằng https chứ không phải http
    isSecureURL('https://example.com') --> true
    isSecureURL('wss://example.com') --> true
    isSecureURL('ws://example.com') --> false
*/
// Version 01:
const isSecureURL = (url) => {
  if (typeof url !== "string") return null;
  const strUrl = url.trim().slice(0, url.trim().indexOf(":"));
  return strUrl === "https" || strUrl === "wss" ? true : false;
};
// Version 02: Sử dụng indexOf
const isSecureURLVer02 = (url) => {
  if (typeof url !== "string") return null;
  const strHttp = url.trim().indexOf("https");
  const strWss = url.trim().indexOf("wss");
  return strHttp !== -1 || strWss !== -1 ? true : false;
};

// Version 03: Sử dụng startsWith
const isSecureURLVer03 = (url) => {
  if (typeof url !== "string") return null;
  return url.startsWith("https") || url.startsWith("wss") ? true : false;
};
/**
  8. Rút trích domain từ địa chỉ email
    Viết hàm extractDomain(email) nhận vào địa chỉ email, trả về phần domain sau ký tự @
  Example:
    + extractDomain("") --> ""
    + extractDomain("nam@gmail.com") --> "gmail.com"
    + extractDomain("bob@abc.com") --> "abc"
  Yêu cầu:
    + Sử dụng split
    + Sử dụng indexOf và Slice()
*/
// Sử dụng split
const extractDomain = (email) => {
  if (typeof email !== "string") return "";
  return email.slice(
    +email
      .trim()
      .split("")
      .findIndex((item) => item === "@") + 1
  );
};
// Sử dụng split email Version 2
const extractDomainVer02 = (email) => {
  return typeof email === "string" ? email.trim().split("@")[1] : "";
};
// Sử dụng indexOf and Slice()
const extractDomainVer03 = (email) => {
  const index = email.trim().indexOf("@") + 1;
  return typeof email === "string" ? email.trim().slice(index) : "";
};
/**
  9. Truy tìm mật mã
    Viết hàm firstSecret(code) để truy tìm chuỗi mật mã theo quy tắc như sau.
    Bỏ đi các ký tự HOA trong code, chuỗi còn lại chính là mật mã cần tìm.
  Lưu ý: không dùng hàm reaplaceAll() và không dùng regular expression(regex)
  Example:
    + findSecret("SUPPERCODE") --> ""
    + findSecret("SUPERhelloCODE") --> "hello"
    + findSecret("eaABFHsyUEYSJfrontJSKJSHend") --> "easyfrontend"
  Chú ý: được phép dùng vòng lặp for để duyệt bài trong chuỗi này
*/
const firstSecretCode = (code) => {
  if (typeof code !== "string") return "";
  let result = "";
  for (let i = 0; i < code.length; i++) {
    if (code[i] === code[i].toLowerCase()) {
      result += code[i];
    }
  }
  return result;
};
// Version02:
const firstSecretCodeVer02 = (code) => {
  let result = [];
  const arrSerectCode = code.trim().split("");
  for (let item of arrSerectCode) {
    if (item === item.toLowerCase()) {
      result.push(item);
    }
  }
  return result.join("");
};
// Version02: Sử dụng regex pattern loại bỏ những chữ không phải là chữ thường ra khỏi
const firstSecretCodeVer03 = (code) => {
  return code.replace(/[^a-z]/g, "");
};
/**
  9. Trả về fullname khi biết first và last name
    Viết hàm getFullName(firstName, lastName) nhận vào firstName và lastName và trả về chuỗi fullName
  Quy tắc  để tạo chuỗi fullname như sau:
    + firstName và lastName là optional (có thể không có)
    + fullName không có khoảng trắng thừa ở đầu và cuối chuỗi
    + firstName và lastName cần viết hoa chữ cái đầu tiên, chữ cái còn lại viết thường
  Example:
    + getFullName("Alice") --> "Alice"
    + getFullName("Alice","") --> "Alice"
    + getFullName("","Nguyen") --> "Nguyen"
    + getFullName("Bob","Tran") --> "Bob Tran"
    + getFullName("john","pHAm") --> "John Pham"
*/

/**
  10. Viết một hàm JavaScript để kiểm tra xem một chuỗi có bắt đầu bằng một chuỗi được chỉ định hay không ?
  Test Data: startsWith('js string exercises', 'js') --> true
*/

/**
 * 11. Kiểm tra 1 chuỗi có phải là chuỗi là chuỗi trống hay không ?
  Test Data:
    + is_Blank('')--> true
    + is_Blank('abc')--> false
*/

/**
  12. Viết một hàm JavaScript để trích xuất một số ký tự được chỉ định từ một chuỗi, function truncateString('String',number)
  Test Data:
    + truncateString("Robin Singh",4) --> "Robi"
*/

/**
  13. Viết một hàm JavaScript để tham số hóa một chuỗi
  Test Data:
    + string_parameterize("Robin Singh from USA.") --> "robin-singh-from-usa"
*/

/**
  14. Viết một hàm JavaScript để viết hoa chữ cái đầu tiên của mỗi từ trong một chuỗi.
  Test Data:
    + capitalize_Words('js string exercises') --> "Js String Exercises"
*/

/**
  15. Viết một hàm JavaScript lấy một chuỗi có các chữ cái thường và chữ hoa làm tham số và chuyển đổi chữ hoa thành chữ thường và chữ thường thành chữ hoa.
  Test Data :
    + swapcase('AaBbc') --> "aAbBC"
*/

/**
  16. Viết một hàm JavaScript để chuyển đổi một chuỗi thành camelCase.
  Test Data :
    + camelize("JavaScript Exercises") --> "JavaScriptExercises"
    + camelize("JavaScript exercises") --> "JavaScriptExercises"
    + camelize("JavaScriptExercises")  --> "JavaScriptExercises"
*/

/**
  17. Write a JavaScript function to uncamelize a string
  Test Data :
    + uncamelize('helloWorld')      --> "hello world"
    + uncamelize('helloWorld','-')  --> "hello-world"
    + uncamelize('helloWorld','_')  --> "hello_world"
*/

/**
  18. Viết một hàm JavaScript để nối một chuỗi đã cho n lần (mặc định là 1).
  Test Data :
    + repeat('Ha!')   --> "Ha!"
    + repeat('Ha!',2) --> "Ha!Ha!"
    + repeat('Ha!',3) --> "Ha!Ha!Ha!"
*/

/**
  19. Viết một hàm JavaScript để chèn một chuỗi trong một chuỗi ở một vị trí  cụ thể (mặc định là 1)
  Test Data :
    + insert('We are doing some exercises.') --> "JavaScript We are doing some exercises."
    + insert('We are doing some exercises.','JavaScript') -->"We are doing some exercises."
    + insert('We are doing some exercises.','JavaScript ',18) --> "We are doing some JavaScript exercises."
*/

/**
  20. Viết một hàm JavaScript để cắt một chuỗi thành các đoạn có độ dài nhất định.
  Test Data :
    + stringChop('w3resource')   --> ["w3resource"]
    + stringChop('w3resource',2) --> ["w3", "re", "so", "ur", "ce"]
    + stringChop('w3resource',3) --> ["w3r", "eso", "urc", "e"]
*/

/**
  21. Viết một hàm JavaScript để tách các khoảng trắng ở đầu và cuối khỏi một chuỗi
  Test Data :
    + strip('w3resource ')  --> "w3resource"
    + strip(' w3resource')  --> "w3resource"
    + strip(' w3resource ') --> "w3resource"
*/

/**
  22. Viết một hàm JavaScript để chuyển đổi ASCII sang định dạng Hệ thập lục phân
  Test Data :
    + ascii_to_hexa('12')   --> "3132"
    + ascii_to_hexa('100')  --> "313030"
*/

/**
  23. Viết một hàm JavaScript để chuyển đổi hệ thập lục phân sang định dạng ASCII
  Test Data :
    + hex_to_ascii('3132')    --> "12"
    + hex_to_ascii('313030')  --> "100"
*/

/**
  24. Viết một hàm JavaScript để tìm một từ trong một chuỗi
  Test Data :
    + search_word('The quick brown fox', 'fox') --> "'fox' was found 1 times."
    + search_word('aa, bb, cc, dd, aa', 'aa')   --> "'aa' was found 2 times."
*/

/**
  25. Viết một hàm JavaScript để xóa các ký tự ASCII?
  Test Data :
    + remove_non_ascii('???????PHP-MySQL??????') --> "PHP-MySQL"
*/

/**
  26. Viết một hàm JavaScript để chuyển đổi một chuỗi thành chữ hoa tiêu đề.
  Test Data :
    + sentenceCase('PHP exercises. python exercises.') --> "Php Exercises. Python Exercises."
*/

/**
  27. Viết một hàm JavaScript để kiểm tra so sánh chuỗi không phân biệt chữ hoa chữ thường (ngoại trừ các ký tự Unicode đặc biệt).
  Test Data :
    + compare_strings('abcd', 'AbcD') --> true;
    + compare_strings('ABCD', 'Abce') --> false;
*/

/**
  28. Viết một hàm JavaScript để Uncapitalize? ký tự đầu tiên của một chuỗi.
  Test Data :
    + Uncapitalize('Js string exercises') --> "js string exercises"
*/

/**
  29. Viết hàm JavaScript để tạo tìm kiếm không phân biệt chữ hoa chữ thường
  Test Data :
    + case_insensitive_search('JavaScript Exercises', 'exercises') --> "Matched"
    + case_insensitive_search('JavaScript Exercises', 'Exercises') --> "Matched"
    + case_insensitive_search('JavaScript Exercises', 'Exercisess') --> "Not Matched"
*/

/**
  30. Viết một hàm JavaScript để kiểm tra xem ký tự tại chỉ mục (ký tự) được cung cấp có phải là chữ hoa hay không.
  Test Data :
    + isUpperCaseAt('Js STRING EXERCISES', 1)  -->  false
*/

/**
  31. Viết một hàm JavaScript để kiểm tra xem ký tự tại chỉ mục (ký tự) được cung cấp có phải là chữ thường hay không ?
  Test Data :
    + isLowerCaseAt ('Js STRING EXERCISES', 1)  --> true
*/
