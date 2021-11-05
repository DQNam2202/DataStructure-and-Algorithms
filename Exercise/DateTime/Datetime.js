/**
  1: Viết chương trình nhập vào năm sinh in ra số tuổi - Mức độ dễ
  Example: myAge(birthYear)
*/

/**
  2: Viết chương trình đếm ngược thời gian theo từng giây. Dựa vào thời gian đầu vào.
  Example:
    + Thời gian làm bài là 30 phút nếu chạy về 0 thì thông báo hết thời gian
    + countDown(myTime)
*/

/**
  3. Viết một hàm JavaScript để kiểm tra xem một 'đầu vào' có phải là một đối tượng ngày tháng hay không.
  Test Data :
    + console.log(is_date("October 13, 2014 11:13:00"));
    + console.log(is_date(new Date(86400000)));
    + console.log(is_date(new Date(99,5,24,11,33,30,0)));
    + console.log(is_date([1, 2, 4, 0]));
  Output : false | true | true | false
*/

/**
  4. Viết một hàm JavaScript để lấy ngày hiện tại.Lưu ý: Chuyển dấu phân tách làm đối số.
  Test Data :
    + console.log(curday('/'));
    + console.log(curday('-'));
  Output : "11/13/2014" | "11-13-2014"
*/

/**
  5. Viết một hàm JavaScript để lấy số ngày trong tháng.
  Test Data :
    + console.log(getDaysInMonth(1, 2012));
    + console.log(getDaysInMonth(2, 2012));
    + console.log(getDaysInMonth(9, 2012));
    + console.log(getDaysInMonth(12, 2012));
  Output : 31 | 29 | 30 | 31
*/

/**
  6. Viết một hàm JavaScript để lấy tên tháng từ một ngày cụ thể
  Test Data :
    + console.log(month_name(new Date("10/11/2009")));
    + console.log(month_name(new Date("11/13/2014")));
  Output : "October" | "November"
*/

/**
  7. Viết một hàm JavaScript để so sánh ngày (tức là lớn hơn, nhỏ hơn hoặc bằng).
  Test Data :
    + console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:00')));
    + console.log(compare_dates(new Date('11/14/2013 00:01'), new Date('11/14/2013 00:00')));
    + console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:01')));
  Output : "Date1 = Date2" | "Date1 > Date2" | "Date2 > Date1"
*/

/**
  8. Viết một hàm JavaScript để thêm số phút đã chỉ định vào đối tượng Ngày.
  Test Data :
    + console.log(add_minutes(new Date(2014,10,2), 30).toString());
  Output : "Sun Nov 02 2014 00:30:00 GMT+0530 (India Standard Time)"
*/

/**
  9. Viết một hàm JavaScript để kiểm tra xem một ngày có phải là ngày cuối tuần hay không.
  -> Lưu ý: Sử dụng định nghĩa tiêu chuẩn vào Thứ Bảy / Chủ Nhật cho một ngày cuối tuần.
  Test Data :
    + console.log(is_weekend('Nov 15, 2014'));
    + console.log(is_weekend('Nov 16, 2014'));
    + console.log(is_weekend('Nov 17, 2014'));
  Output : "weekend" | "weekend" | undefined
*/

/**
  10. Viết một hàm JavaScript để nhận được sự khác biệt giữa hai ngày trong ngày.
  Test Data :
    + console.log(date_diff_indays('04/02/2014', '11/04/2014'));
    + console.log(date_diff_indays('12/02/2014', '11/04/2014'));
  Output : 216 | -28
*/

/**
  11. Viết một hàm JavaScript để xem ngày cuối cùng của tháng.
  Test Data :
    + console.log(lastday(2014,0));
    + console.log(lastday(2014,1));
    + console.log(lastday(2014,11));
  Output : 31 |  28 |  31
*/

/**
  12. Viết một hàm JavaScript để tính toán 'ngày hôm qua'
  Test Data :
    + console.log(yesterday('Nov 15, 2014'));
    + console.log(yesterday('Nov 16, 2015'));
    + console.log(yesterday('Nov 17, 2016'));
  Output :
    + "Fri Nov 14 2014 00:00:00 GMT+0530 (India Standard Time)"
    + "Sun Nov 15 2015 00:00:00 GMT+0530 (India Standard Time)"
    + "Wed Nov 16 2016 00:00:00 GMT+0530 (India Standard Time)"
*/

/**
  13. Viết một hàm JavaScript để lấy ngày tối đa từ một mảng ngày tháng.
  Test Data :
    console.log(min_date(['2015/02/01', '2015/02/02', '2015/01/03']));
  Output : "2015/01/03"
*/

/**
  14. Viết một hàm JavaScript sẽ trả về số phút theo giờ và phút
  Test Data :
    console.log(timeConvert(200));
  Output : "200 minutes = 3 hour(s) and 20 minute(s)."
*/

/**
  15. Viết một hàm JavaScript để lấy số ngày trong năm.
  Test Data :
    + console.log(days_of_a_year(2015));
    + console.log(days_of_a_year(2016));
  Output: 365 | 366
*/

/**
  16. Viết một hàm JavaScript để lấy quý (1 đến 4) trong năm.
  Test Data :
    + console.log(quarter_of_the_year(new Date(2015, 1, 21)));
    + console.log(quarter_of_the_year(new Date(2015, 10, 18)));
  Output: 2 | 4
*/

/**
  17. Viết một hàm JavaScript để đếm số ngày đã trôi qua kể từ đầu năm.
  Test Data :
    console.log(days_passed(new Date(2015, 0, 15)));
    console.log(days_passed(new Date(2015, 11, 14)));
  Output: 15 | 348
*/

/**
  18. Viết một hàm JavaScript để lấy ngày trong tháng, 2 chữ số với các số 0 ở đầu
  Test Data :
    d= new Date(2015, 10, 1) --> console.log(day_of_the_month(d));
  Ouput: "01"
*/

/**
  19. Viết một hàm JavaScript để có được biểu diễn dạng văn bản của một ngày (ba chữ cái, từ Thứ Hai đến Chủ Nhật).
  Test Data :
    dt = new Date(2015, 10, 1) --> console.log(short_Days(dt));
  Ouput: "Sun"
*/

/**
  20. Viết một hàm JavaScript để có được biểu diễn văn bản đầy đủ của ngày trong tuần (Chủ nhật đến Thứ bảy).
  Test Data :
    dt = new Date(2015, 10, 1) --> console.log(long_Days(dt));
  Output:  "Sunday"
*/

/**
  21. Viết một hàm JavaScript để có được biểu diễn văn bản đầy đủ của một tháng, chẳng hạn như tháng Giêng hoặc tháng Sáu.
  Test Data :
    dt = new Date(2015, 10, 1) --> console.log(full_month(dt));
  Output: "November"
*/

/**
  22. Viết một hàm JavaScript để có được biểu diễn số của một tháng, với các số 0 ở đầu (01 đến 12).
  Test Data :
    dt = new Date(2015, 10, 1) --> console.log(numeric_month(dt));
  Ouput: "11"
*/

/**
  23. Viết một hàm JavaScript để có được biểu diễn số đầy đủ của một năm (4 chữ số).
  Test Data :
    dt = new Date(2015, 10, 1) --> console.log(full_year(dt));
  Output:  2015
*/

/**
  24. Viết một hàm JavaScript để có được biểu diễn hai chữ số của một năm
  Test Data :
    dt = new Date(1989, 10, 1) --> console.log(sort_year(dt));
  Output:  "89"
*/

/**
  25. Viết một hàm JavaScript để thêm các tháng cụ thể vào một ngày.
  Test Data :
    dt = new Date(2014,10,2) --> console.log(add_months(dt, 10).toString());
  Output : "Wed Sep 02 2015 00:00:00 GMT+0530 (India Standard Time)"
*/

/**
  26. Viết một hàm JavaScript để nhận chênh lệch thời gian tính bằng phút giữa hai ngày.
  Test Data :
    dt1 = new Date("October 13, 2014 11:11:00");
    dt2 = new Date("October 13, 2014 11:13:00");
  => console.log(diff_minutes(dt1, dt2));
  Output:  2
*/

/**
  27. Viết hàm JavaScript để nhận chênh lệch thời gian tính theo giờ giữa hai ngày.
  Test Data :
    dt1 = new Date("October 13, 2014 08:11:00");
    dt2 = new Date("October 13, 2014 11:13:00");
  => console.log(diff_hours(dt1, dt2));
  Output:  3
*/

/**
  28. Viết hàm JavaScript để nhận chênh lệch thời gian giữa hai ngày.
  Test Data :
    dt1 = new Date("October 13, 2014 08:11:00");
    dt2 = new Date("October 19, 2014 11:13:00");
  => console.log(diff_days(dt1, dt2));
  Output:  6
*/

/**
  29. Viết một hàm JavaScript để nhận được sự khác biệt về thời gian theo tuần giữa hai ngày
  Test Data :
    dt1 = new Date("June 13, 2014 08:11:00");
    dt2 = new Date("October 19, 2014 11:13:00");
  => console.log(diff_weeks(dt1, dt2));
  Output:  18
*/

/**
  30. Viết một hàm JavaScript để nhận được sự khác biệt về thời gian trong các tháng giữa hai ngày.
  Test Data :
    dt1 = new Date("June 13, 2014 08:11:00");
    dt2 = new Date("October 19, 2014 11:13:00");
  =>  console.log(diff_months(dt1, dt2));
  Output:  5
*/

/**
  31. Viết một hàm JavaScript để nhận được sự khác biệt về thời gian theo năm giữa hai ngày
  Test Data :
    dt1 = new Date("June 13, 2014 08:11:00");
    dt2 = new Date("October 19, 2017 11:13:00");
  => console.log(diff_years(dt1, dt2));
  Output:  3
*/

/**
  32. Viết một hàm JavaScript để lấy ngày bắt đầu của tuần.
 */

/**
  33. Viết một hàm JavaScript để lấy ngày kết thúc tuần
 */

/**
  34. Viết một hàm JavaScript để lấy ngày bắt đầu của tháng.
 */

/**
  35. Viết một hàm JavaScript để lấy ngày kết thúc tháng.
 */

/**
  36. Viết chương trình có tên là time since, đầu vòa là thời gian và tính thời gian đầu vào so với thời gian hiện tại
  Example: timeSince(time)
    Bạn đang chơi với một bạn là A, sau đó bạn A offline sau đó vài ba phút thì hiển thị bạn A vừa online:
      + '3 phút trước',
      + '3 ngày trước',
      + '3'giờ trước,
      + '2 tháng trước',
      + '30 giây trước',
      + '1 năm trước'
*/
