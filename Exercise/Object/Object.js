// Hàm kiểm tra Object là
const isObject = (obj) => {
  if (typeof obj === "object" && !Array.isArray(obj) && obj !== null)
    return true;
  return false;
};

// Object Student
let student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};
/**
  1: Viết chương trình JavaScript để liệt kê các thuộc tính của một đối tượng JavaScript.
  Sample object:
    var student = {
      name : "David Rayy",
      sclass : "VI",
      rollno : 12
    };
  Output: name,sclass,rollno
*/
const getKeysObject = (obj) => {
  if (!isObject(obj)) return "";
  let keys = Object.keys(obj);
  return keys.join(",");
};
/**
  2. Viết chương trình JavaScript để xóa thuộc tính rollno khỏi đối tượng sau. Đồng thời in đối tượng trước hoặc sau khi xóa thuộc tính.
  Sample object:
    var student = {
      name : "David Rayy",
      sclass : "VI",
      rollno : 12
    };
*/

const deleteKeyObject = (obj, ...keys) => {
  if (!isObject(obj)) return "";
  const cloneObj = { ...obj };
  keys.forEach((item) => {
    if (cloneObj.hasOwnProperty(item)) delete cloneObj[item];
  });
  return cloneObj;
};
console.log(deleteKeyObject(student, "rollno"));
/**
  3. Viết chương trình JavaScript để lấy độ dài của một đối tượng JavaScript
  Sample object :
    var student = {
      name : "David Rayy",
      sclass : "VI",
      rollno : 12
    };
 */
const getLengthObject = (obj) => {
  if (!isObject(obj)) return "";
  return Object.keys(obj).length;
};
console.log(getLengthObject(student));
/**
  4. Viết chương trình JavaScript để hiển thị trạng thái đọc (nghĩa là hiển thị tên sách, tên tác giả và trạng thái đọc) của những cuốn sách sau
  Sample object :
    var library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }
  ];
 */

/**
  5. Viết một chương trình JavaScript để lấy thể tích của một Cylinder có bốn chữ số thập phân bằng cách sử dụng các lớp đối tượng.
  + Công thức: Thể tích của khối trụ: V = π*r^2*h
    => trong đó r là bán kính và h là chiều cao của khối trụ.
 */

/**
  6. Viết thuật toán Bubble Sort trong Javascript
  //! Lưu ý: Sắp xếp theo bong bóng là một thuật toán sắp xếp đơn giản hoạt động bằng cách lặp đi lặp lại việc lướt qua danh sách được sắp xếp
    + Sample Data: [6,4,0, 3,-2,1]
    + Expected Output : [-2, 0, 1, 3, 4, 6]
 */

/**
  7. Viết một chương trình JavaScript trả về một tập hợp con của một chuỗi
  Sample Data: dog
    Expected Output: ["d", "do", "dog", "o", "og", "g"]
 */

/**
  8. Viết chương trình Javascript để tạo đồng hồ
  Note: Đầu ra sẽ thực hiện sau mỗi giây
  Expected Console Output :
    + "14:37:42"
    + "14:37:43"
    + "14:37:44"
    + "14:37:45"
    + "14:37:46"
    + "14:37:47"
 */

/**
  9. Viết chương trình JavaScript để tính diện tích và chu vi hình tròn.
  Lưu ý: Tạo hai phương pháp để tính diện tích và chu vi. Bán kính của hình tròn sẽ được cung cấp bởi người dùng.
 */

/**
  10. Viết chương trình JavaScript để sắp xếp một mảng các đối tượng JavaScript
  Sample Object :
  var library = [
    {
        title:  'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254
    },
    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 4264
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245
    }
  ];
  Expected Output:
  [[object Object] {
    author: "Walter Isaacson",
    libraryID: 4264,
    title: "Steve Jobs"
  }, [object Object] {
    author: "Suzanne Collins",
    libraryID: 3245,
    title: "Mockingjay: The Final Book of The Hunger Games"
  }, [object Object] {
    author: "The Road Ahead",
    libraryID: 1254,
    title: "Bill Gates"
  }]
*/

/**
  11. Viết một hàm JavaScript để in tất cả các phương thức trong một đối tượng JavaScript.
  Test Data :
    + console.log(all_properties(Array));
    ["length", "name", "arguments", "caller", "prototype", "isArray", "observe", "unobserve"]
 */

/**
  12. Viết một hàm JavaScript để phân tích cú pháp một URL
 */

/**
  13. Viết một hàm JavaScript để truy xuất tất cả các tên của các thuộc tính kế thừa và riêng của đối tượng.
 */

/**
  14. Viết một hàm JavaScript để truy xuất tất cả các giá trị thuộc tính của một đối tượng.
 */

/**
  15. Viết một hàm JavaScript để chuyển đổi một đối tượng thành danh sách các cặp '[key, value]'.
 */

/**
  16. Viết một hàm JavaScript để nhận một bản sao của đối tượng trong đó các khóa đã trở thành giá trị và giá trị của các khóa
 */

/**
  17. Viết một hàm JavaScript để kiểm tra xem một đối tượng có chứa thuộc tính nhất định hay không.
 */

/**
  18. Viết một hàm JavaScript để kiểm tra xem một giá trị đã cho có phải là một phần tử DOM hay không.
 */
