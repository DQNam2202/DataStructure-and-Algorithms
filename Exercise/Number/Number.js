/**
  1.1 Viết function tính diện tích hình chữ nhật function rectangle()
  1.2 Viết function tính chu vi hình chữ nhật function perimeterOfRectangle()
  1.3 Viết function tính diện tích hình tròn function circle()
 */

/**
  2.1 Viết function kiểm tra số chẵn hay số lẻ function Odd/Even()
  2.2 Viết function kiểm tra số chia hết cho 5 function divisible()
  2.3 Viết function kiểm tra số chính phương function perfectSquare()
  2.4 Viết function kiểm tra số nguyên tố function isPrime()
  2.5 Viết function kiểm tra số hoàn thiện function isPerfectNumb()
*/

/**
  3.1 Viết function chuyển đổi giờ sang giây, function convertHourToSeconds()
  3.2 Cho 3 chữ số tìm Max, function max(a,b,c)
  3.3 Cho 3 chữ số tìm Max là số chẵn, function maxEven(a,b,c)
*/

/**
  4.1 Rút trích chữ số ở hàng đơn vị của một số có 3 chữ Số, function extractTheOnes()
  4.2 Rút trích chữ số ở hàng chục của một số có 3 chữ Số, function extractTheTens()
  4.3 Rút trích chữ số ở hàng trăm vị của một số có 3 chữ Số, function extractTheHundres()
  4.4 Tính tổng các chữ số của một số có 3 chữ Số, function sumAllDigits()
*/

/**
  5. Bài toán gọi taxi
    Viết hàm gọi taxi getTaxiCount(passagersCount) nhận vào số hàng khách và trả về là số taxi cần gọi để chở hết số khách đó
  Yêu cầu:
    + Khi chỉ số khách lớn hơn 4, ưu tiên dùng xe 7 chỗ
    + Nếu số khách nhỏ hơn hoặc bằng 4 dùng xe 4 chỗ
*/

/**
  6. Tìm chữ số lớn nhất của một số nguyên dương
    Viết hàm function getMaxDigit(n) {} để tìm ra chữ số lớn nhất của một số nguyên dương n (0 <= n < 1000)
  Yêu cầu:
    + getMaxDigit(1) --> 1
    + getMaxDigit(2) --> 2
 */

/**
  7. So sánh 2 số nguyên
    Viết hàm compareNumbers(a, b) nhận vào 2 số nguyên bất kỳ:
  Trả về:
    + 1 nếu a > b
    + 0 nếu a = b
    + -1 nếu a < b
*/

/**
  8. Kiểm tra tối đa có 3 chữ số đối xứng hay không ?
    Viết hàm isSymmetricNumber(n) để nhận vào số nguyên dương n có tối đa 3 chữ số và trả về true nếu n là số đối xứng ngược lại trả về false
  Giả sử:
    + Tham số n truyền vào luôn luôn là số có tối đa 3 chữ số (0 --> 999)
    + Số đối xứng là số mà đọc từ trái sang phải nó giống như đọc từ phải sang trái.
*/

/**
  9. Viết một hàm JavaScript để chuyển đổi một số từ cơ sở này sang cơ sở khác
  Lưu ý: Cơ số phải nằm trong khoảng tử 20 đến 36
  Test Data :
    + base_convert('E164',16,8)  --> "160544"
    + base_convert(1000,2,8)     --> "10"
*/

/**
  10. Viết một hàm JavaScript để chuyển một số nhị phân thành một số thập phân.
  Test Data :
    + bin_to_dec('110011')  --> 51
    + bin_to_dec('100')     --> 4
*/

/**
  11. Viết một hàm JavaScript để chuyển đổi một số thập phân thành số nhị phân, thập lục phân hoặc bát phân.
  Test Data :
    + dec_to_bho(120,'B')  --> "1111000"
    + dec_to_bho(120,'H')  --> "78"
    + dec_to_bho(120,'O')  --> "170"
*/

/**
  12.Viết một hàm JavaScript để tạo một số nguyên ngẫu nhiên
  Test Data :
    + rand(20,1)  --> 15
    + rand(1,10)  --> 5
    + rand(6)     --> 1
    + rand()      --> 0
*/

/**
  13. Tìm giá trị max và giá trị min có trong mảng
*/

/**
  14. Viết một hàm JavaScript để nhận ước chung lớn nhất (gcd) của hai số nguyên
  Lưu ý: Theo Wikipedia - Trong toán học, ước chung lớn nhất (gcd) của hai hoặc nhiều số nguyên:
  + Khi ít nhất một trong số chúng không phải là số 0,
  + Là số nguyên dương lớn nhất chia các số không có dư.
  Example:  8 và 12 là 4.
  Test Data :
    + gcd_two_numbers(12, 13) --> 1
    + gcd_two_numbers(9, 3) --> 3
*/

/**
  15. Viết một hàm JavaScript để kiểm tra xem một số có phải là lũy thừa của 2 hay không
  Test Data :
    + power_of_2(16)  --> true
    + power_of_2(18)  --> false
    + power_of_2(256) --> true
*/

/**
  16. Viết một hàm JavaScript để làm tròn một số đến các chữ số thập phân cho trước.
  Test Data :
    + precise_round(12.375,2)       --> 12.38
    + precise_round(-10.3079499, 3) --> -10.308
    + precise_round(10.49999,0)     --> 10
    + precise_round(10.49999,2)     --> 10.50
*/

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

/**
  18. Viết một hàm Javascript tính tổng các giá trị có trong một mảng
  Test Data :
    + sum([1,2,3])        --> 6
    + sum([100,-200,3])   --> -97
    + sum([1,2,'a',3])    --> 6
*/

/**
  19. Viết một hàm JavaScript để tính tích các giá trị trong một mảng.
  Test Data :
    + product([1,2,3])        --> 6
    + product([100,-200,3])   --> -6000
    + product([1,2,'a',3])    --> 6
*/

/**
  20.Tạo một hàm Pitago trong Javascript
  Lưu ý: Định lý Pitago cho chúng ta biết mối quan hệ trong mọi tam giác vuông là: c^2 = a^2 + b62, trong đó c là cạnh huyền và a, b là hai chân của tam giác
  Test Data :
    + pythagorean_theorem(2, 4) --> 4.47213595499958
    + pythagorean_theorem(3, 4) --> 5
*/

/**
  21. Viết một hàm JavaScript để tính căn thứ n của một số.
  Test Data :
    + nthroot(64, 2)  --> 8
    + nthroot(64, -2) --> 0.125
*/

/**
  22. Viết một hàm JavaScript để chuyển một số dương thành số âm.
  Test Data :
    + pos_to_neg(15) --> -15
*/

/**
  23. Viết một hàm JavaScript để lấy số cao nhất từ ​​ba số khác nhau.
  Test Data :
    + highestOfThree(-5, 4, 2)  --> 4
*/

/**
  24. Viết một hàm JavaScript để đếm các chữ số của một số nguyên.
*/

/**
  25. Viết một hàm JavaScript để nhận tất cả các số nguyên tố từ 0 đến một số được chỉ định.
  Test Data :
    + primeFactorsTo(5)   --> [2, 3, 5]
    + primeFactorsTo(15)  --> [2, 3, 5, 7, 11, 13]
*/
