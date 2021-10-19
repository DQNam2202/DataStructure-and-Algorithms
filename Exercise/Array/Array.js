/**
  1: Đảo ngược 1 chuỗi 'Duong Quoc Nam' => 'Nam Quoc Duong'
*/

/**
  2: Đảo ngược một chuỗi bao gồm các ký tự 'Duong Quoc Nam' => 'maN couQ gnouD'
*/

/**
  3: In hoa các chữ cái đầu trong 1 chuỗi 'duong quoc nam' => 'Duong Quoc Nam'
*/

/**
  4. Cho một mảng gồm nhiều giá trị:
  - Example: [1,1000,false,null,"Duong Quoc Nam","",undefined,"javascripts",[1,2,3]].
  Yêu Cầu:
    + Viết chương trình loại bỏ các giá trị falsy ra khỏi mảng chỉ giữ lại giá trị truthhy.
    + Hint: giá trị falsy là 0, null, undefined, false, NaN, ""
*/

/**
  5. Cho 1 mảng phức tạp [[1,2,3,[false, null]], [1,5,6,["javascripts"]], [888, 666, [98]]].
  Result:
    + [1,2,3,false, null,1,5,6,"javascripts",888,666,98]
*/

/**
  6. Đảo ngược số nguyên. Math.sign(Sô nguyên | Số âm):
   Trong đó:
    + Khi nhập vào số nguyên thì giá trị trả về là 1
    + Khi nhập vào số âm thì giá trị trả về là -1
*/

/**
  7. Viết chương trình có tên là fizzBuzz với đầu vào là một số nguyên, và cho chạy từ 1 đến số nguyên đó rồi kiệm tra:
    + Nếu số nguyên đó chia hết cho 2 thì in ra chữ 'Fizz'.
    + Nếu chia hết cho 3 thì in ra chữ 'Buzz'.
    + Nếu chia hết cho 2 và 3 thì in ra chữ 'FizzBuzz'
*/

/**
  8: Cho một chuỗi bất kỳ, đếm số lượng ký tự 'vowels' có trong chuỗi.
  Hint:
    + vowels: là các ký tự u e a o i
*/

/**
  9. Cho một mảng gồm các giá trị số [1,2,3,1,1,1,2,2,2,5,5,5,7,6,9,8,8,8].
  Viết một function trả về 1 mảng với các giá trị unique.
  Result: [1,2,3,4,5,6,7,8]
*/

/**
  10: Viết chương trình xử lý 1 mảng lớn thành nhiều mảng con dự vào một số nguyên đầu vào.
  Example ([1,2,3,4,5],2) -> [[1,2], [3,4], [5]]
*/

/**
  11. Viết một hàm JavaScript để kiểm tra xem 'đầu vào' có phải là một mảng hay không.
  Test Data :
    + isArray('w3resource') --> false
    + isArray([1, 2, 4, 0]) --> true
*/

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

/**
  14. Viết một hàm JavaScript để lấy phần tử cuối cùng của một mảng.
  Truyền tham số 'n' sẽ trả về 'n' phần tử cuối cùng của mảng
  Test Data :
    + last([7, 9, 0, -2])   --> -2
    + last([7, 9, 0, -2],3) --> [9, 0, -2]
    + last([7, 9, 0, -2],6) --> [7, 9, 0, -2]
*/

/**
  15. Viết một chương trình JavaScript đơn giản để nối tất cả các phần tử của mảng sau thành một chuỗi
  Sample array : myColor = ["Red", "Green", "White", "Black"];
  Result :
    + "Red,Green,White,Black"
    + "Red,Green,White,Black"
    + "Red+Green+White+Black"
*/

/**
  16. Viết chương trình JavaScript chấp nhận một số làm đầu vào và chèn dấu gạch ngang (-) vào giữa hai số chẵn.
  Example:
  + 025468  --> 0-254-6-8.
*/

/**
  17. Viết chương trình JavaScript để sắp xếp các mục của một mảng.
  Example:
    + [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ]; -->  [-4, -3, 1, 2, 3, 5, 6, 7, 8]
*/

/**
  18. Viết chương trình JavaScript để tìm mục xuất hiện thường xuyên nhất trong một mảng.
  Example:
    + [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3] --> a (5 lần)
*/

/**
  19. Viết một chương trình JavaScript chấp nhận một chuỗi làm đầu vào và hoán đổi trường hợp của mỗi ký tự.
  Example:
    + 'The Quick Brown Fox' -->  'tHE qUICK bROWN fOX'.
    + 'Javascript' --> 'jAVASCRIPT'
*/

/**
  20. Viết chương trình JavaScript để tìm tổng bình phương của một vectơ số.
  Example:
    + [0,1,2,3,4] --> 30
  Giải Thich: 0^2 + 1^2 + 2^2 + 3^2 + 4^2 = 30
*/

/**
  21. Viết chương trình JavaScript để tính tổng và tích của một mảng số nguyên
*/

/**
  22. Viết một chương trình JavaScript để xáo trộn một mảng
*/

/**
  23. Viết chương trình JavaScript để thực hiện tìm kiếm nhị phân
  Lưu ý: Thuật toán tìm kiếm nhị phân hoặc tìm kiếm nửa khoảng tìm vị trí của giá trị đầu vào được chỉ định trong một mảng được sắp xếp theo giá trị khóa.
  Example: array : [1, 2, 3, 4, 5, 7, 8, 9];
    + binary_Search(items, 1) --> 0
    + binary_Search(items, 4) --> 3
*/

/**
  24. Có hai mảng với các giá trị riêng lẻ
    + array1 = [1,0,2,3,4];
    + array2 = [3,5,6,7,8,13];
  => Hãy viết một chương trình JavaScript để tính tổng của mỗi giá trị chỉ mục riêng lẻ từ các mảng đã cho.
  Output : [4, 5, 8, 10, 12, 13] --> (array1[0] + array2[0] = 4)
*/

/**
  25. Viết chương trình JavaScript để tìm các giá trị trùng lặp trong một mảng JavaScript.
*/

/**
  26. Viết một chương trình JavaScript để tính toán hợp nhất của hai mảng.
  Sample Data :
    + union([1, 2, 3], [100, 2, 1, 10]) --> [1, 2, 3, 10, 100]
*/

/**
  27. Write a JavaScript program to flatten a nested (any depth) array
  Example :
    + flatten([1, [2], [3, [[4]]],[5,6]]) --> [1, 2, 3, 4, 5, 6]
*/

/**
  28. Viết một hàm JavaScript để tìm sự khác biệt của hai mảng.
  Test Data :
    + difference([1, 2, 3], [100, 2, 1, 10])   --> ["3", "10", "100"]
    + difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]) --> ["6"]
    + difference([1, 2, 3], [100, 2, 1, 10])   --> ["3", "10", "100"]
*/

/**
  29. Viết một hàm JavaScript để hợp nhất hai mảng và loại bỏ tất cả các phần tử trùng lặp.
  Example:
    array1 = [1, 2, 3];
    array2 = [2, 30, 1];
  + merge_array(array1, array2) --> [3, 2, 30, 1]
*/

/**
  30. Viết một hàm JavaScript để xóa một phần tử cụ thể khỏi một mảng.
  Example:
    + remove_array_element([2, 5, 9, 6], 5) --> [2, 9, 6]
*/
