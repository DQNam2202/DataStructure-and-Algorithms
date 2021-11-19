// Tip-Strick: chuyển đổi định dạng ngày tháng năm sang kiểu VietNam: now.toLocaleDateString('vi-VN')
// 0. Format date: dd/mm/yyyy -> nếu tháng và ngày nhỏ hơn 10 thì phải để trước một chữ số như 01/01/2020
// Version 01:
const formatDate = (date) => {
  const now = new Date(date);
  const day = now.getDate();
  const month = now.getMonth() + 1;
  const year = now.getFullYear();
  const prefixMonth = month < 10 ? "0" : "";
  const prefixDay = day < 10 ? "0" : "";
  return `${prefixDay}${day}/${prefixMonth}${month}/${year}`;
};
// Version 02: Sử dụng cách viết gọn lại prefixMonth, prefixDay để giảm số lần viết của các biến
const formatDateVer02 = (date) => {
  const now = new Date(date);
  const day = now.getDate();
  const month = now.getMonth() + 1;
  const year = now.getFullYear();
  return `${day < 10 ? `0${day}` : day}/${
    month < 10 ? `0${month}` : month
  }/${year}`;
};
// Version 03: Using Array
const formatDateVer03 = (date) => {
  const now = new Date(date).toLocaleDateString("vi-VN");
  const arrDate = now.split("/");
  return `${arrDate[0] < 10 ? `0${arrDate[0]}` : arrDate[0]}/${
    arrDate[1] < 10 ? `0${arrDate[1]}` : arrDate[1]
  }/${arrDate[2]}`;
};
/**
  1: Viết chương trình nhập vào năm sinh in ra số tuổi - Mức độ dễ
  Example: myAge(birthYear)
*/
const myAge = (birthYear) => {
  const yearCurrent = new Date().getFullYear();
  return yearCurrent - birthYear;
};
/**
  2: Viết chương trình đếm ngược thời gian theo từng giây. Dựa vào thời gian đầu vào.
  Example:
    + Thời gian làm bài là 30 phút nếu chạy về 0 thì thông báo hết thời gian
    + countDown(myTime)
  //?: setTimeout(function(){}, 1000) => thực hiện chức năng nào đó sau khoảng thời gian nhất định, sau bao lâu thì xuất hiện
  // TODO: Ứng dụng xuất hiện quảng trong website
  //?: setInterval(function(){}, 1000) => Thực hiện chức năng liên tục, chạy liên tục (tốn tài nguyên CPU) -> Sử dụng clearInterval() để dừng chạy
  // TODO: Ứng dụng đồng hồ bấm giờ, hay events nào đó sau bao lâu sẽ kết thúc
*/
const countDown = (time) => {
  const interval = setInterval(function () {
    if (time === 0) {
      clearInterval(interval);
      console.log("Time Up");
    }
    console.log(time);
    time--;
  }, 1000);
};
// CountDown Ver02
const countDownVer02 = (date) => {
  const SECOND = 60;
  const timer = date * SECOND;
  let counter = 0;
  const interval = setInterval(() => {
    counter++;
    console.log(counter);
    if (counter === timer) {
      clearInterval(interval);
      console.log("Time Up");
    }
  }, 1000);
};
/**
  3. Viết một hàm JavaScript để kiểm tra xem một 'đầu vào' có phải là một //! đối tượng ngày tháng hay không.
  Test Data :
    + console.log(is_date("October 13, 2014 11:13:00"));
    + console.log(is_date(new Date(86400000)));
    + console.log(is_date(new Date(99,5,24,11,33,30,0)));
    + console.log(is_date([1, 2, 4, 0]));
  Output : false | true | true | false
  //? Hint: [object Date]: Object.prototype.toString.call(new Date())
  //? Hint: [object Array]: Object.prototype.toString.call([1,2,3])
  //? Hint: [object String]: Object.prototype.toString.call('string')
*/
//! Check Validation DateTime
const is_date = (date) => {
  return Date.parse(date) !== NaN ? true : false;
};
//! Check Validation DateTime using instanceof
const is_dateVer02 = (date) => {
  return date instanceof Date;
};
//! Check Datime Using Object.properties
const is_dateVer03 = (date) => {
  return Object.prototype.toString.call(date) === "[object Date]"
    ? true
    : false;
};
/**
  4. Viết một hàm JavaScript để lấy ngày hiện tại.Lưu ý: Move the number of paroit.
  Test Data :
    + console.log(curday('/'));
    + console.log(curday('-'));
  Output : "11/13/2014" | "11-13-2014"
*/
//! Version01: Using split and join
const curday = (separator) => {
  if (separator === undefined) separator = "/";
  const dateNow = new Date().toLocaleDateString("vi-VN");
  return dateNow.split("/").join(separator);
};
//! Version02: Using Resgex
const curdayVer02 = (separator) => {
  if (separator === undefined) separator = "/";
  const dateNow = new Date().toLocaleDateString("vi-VN");
  return dateNow.replace(/\//g, separator);
};
//! Version03: Using String.Array
const curdayVer03 = (separator) => {
  if (separator === undefined) separator = "/";
  const dateNow = new Date().toLocaleDateString("vi-VN");
  const arrTimer = dateNow.split("/");
  return `${arrTimer[0]}${separator}${arrTimer[1]}${separator}${arrTimer[2]}`;
};
/**
  5. Viết một hàm JavaScript để lấy số ngày trong tháng.
  Test Data :
    + console.log(getDaysInMonth(1, 2012));
    + console.log(getDaysInMonth(2, 2012));
    + console.log(getDaysInMonth(9, 2012));
    + console.log(getDaysInMonth(12, 2012));
  Output : 31 | 29 | 30 | 31
  //? Hint: new Date(year, month, 0).getDate() -> lấy được ngày của tháng
  //* Example: new Date(2012, 1, 0).getDate() => 31 -> tháng 12 năm 2011
*/
const getDaysInMonth = (month, year) => {
  if (typeof month !== "number" || typeof year !== "number")
    return "Invalid Input";
  return new Date(year, month, 0).getDate();
};

/**
  6. Viết một hàm JavaScript để lấy tên tháng từ một ngày cụ thể
  Test Data :
    + console.log(month_name(new Date("10/11/2009")));
    + console.log(month_name(new Date("11/13/2014")));
  Output : "October" | "November"
*/
const month_name = (date) => {
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return month[new Date(date).getMonth()];
};

/**
  7. Viết một hàm JavaScript để so sánh ngày (tức là lớn hơn, nhỏ hơn hoặc bằng).
  Test Data :
    + console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:00')));
    + console.log(compare_dates(new Date('11/14/2013 00:01'), new Date('11/14/2013 00:00')));
    + console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:01')));
  Output : "Date1 = Date2" | "Date1 > Date2" | "Date2 > Date1"
*/
//! Version01: Using Date.getTime() || Date.parse()
const compare_dates = (date1, date2) => {
  const timer1 = Date.parse(date1);
  const timer2 = Date.parse(date2);
  if (timer1 === timer2) return "Date1 = Date2";
  if (timer1 > timer2) return "Date1 > Date2";
  return "Date2 > Date1";
};
// Version 02
const compare_datesVer02 = (date1, date2) => {
  if (date1 > date2) {
    return "Date1 > Date2";
  } else if (date1 < date2) {
    return "Date2 > Date1";
  }
  return "Date1 = Date2";
};
/**
  8. Viết một hàm JavaScript để thêm số phút đã chỉ định vào đối tượng Ngày.
  Test Data :
    + console.log(add_minutes(new Date(2014,10,2), 30).toString());
  Output : "Sun Nov 02 2014 00:30:00 GMT+0530 (India Standard Time)"
*/
//! Using Date.setMinutes
const add_minutes = (date, minutes) => {
  if (typeof date !== "object" || typeof minutes !== "number")
    return "Invalid Input";
  return new Date(date.setMinutes(minutes)).toString();
};
//! Using minutes * 60*1000
const add_minutesVer02 = (date, minutes) => {
  const MINUTES_PER_MILISECONDS = 60000;
  if (typeof date !== "object" || typeof minutes !== "number")
    return "Invalid Input";
  return new Date(
    date.getTime() + minutes * MINUTES_PER_MILISECONDS
  ).toString();
};
/**
  9. Viết một hàm JavaScript để kiểm tra xem một ngày có phải là ngày cuối tuần hay không.
  -> Lưu ý: Sử dụng định nghĩa tiêu chuẩn vào Thứ Bảy / Chủ Nhật cho một ngày cuối tuần.
  Test Data :
    + console.log(is_weekend('Nov 15, 2014'));
    + console.log(is_weekend('Nov 16, 2014'));
    + console.log(is_weekend('Nov 17, 2014'));
  Output : "weekend" | "weekend" | undefined
*/
const is_weekend = (date) => {
  const day = new Date(date).getDay();
  return day === 0 || day === 6 ? "weekend" : undefined;
};
//! Using Math
const is_weekendVer02 = (date) => {
  const day = new Date(date).getDay();
  return day % 6 === 0 ? "weekend" : undefined;
};
/**
  10. Viết một hàm JavaScript để nhận được sự khác biệt giữa hai ngày trong ngày.
  Test Data :
    + console.log(date_diff_indays('04/02/2014', '11/04/2014'));
    + console.log(date_diff_indays('12/02/2014', '11/04/2014'));
  Output : 216 | -28
*/
const date_diff_indays = (date1, date2) => {
  //? Convert date to miliseconds
  const timer1 = Date.parse(date1);
  const timer2 = Date.parse(date2);
  return Math.round((timer2 - timer1) / (1000 * 60 * 60 * 24));
};
//! không muốn lấy khoảng cách âm giữ hai khoảng thời gian
const date_diff_indaysVer02 = (date1, date2) => {
  //? Convert date to miliseconds
  const timer1 = new Date(date1).getTime();
  const timer2 = new Date(date2).getTime();
  const PER_DAY = 8.64e7; // (1000 * 60 * 60 * 24) = 86.400.000
  return Math.round(Math.abs((timer1 - timer2) / PER_DAY));
};

/**
  11. Viết một hàm JavaScript để xem ngày cuối cùng của tháng.
  Test Data :
    + console.log(lastday(2014,0)); // Tháng 1
    + console.log(lastday(2014,1)); // Tháng 2
    + console.log(lastday(2014,11));
  Output : 31 |  28 |  31
*/
const lastDay = (year, month) => {
  if (typeof year !== "number" || typeof month !== "number")
    return "Invalid Input";
  return new Date(year, month + 1, 0).getDate();
};
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
//! Version 01: Using Date.setDate()
const yesterday = (date) => {
  const timer = new Date(date).getDate();
  return new Date(new Date(date).setDate(timer - 1));
};
//! Version 02: Using getTime()
const yesterdayVer02 = (date) => {
  const timeDay = 86400;
  const timer = new Date(date).getTime();
  return new Date(new Date(timer - timeDay).setHours(0, 0, 0, 0));
};
/**
  13. Viết một hàm JavaScript để lấy ngày nhỏ nhất từ một mảng ngày tháng.
  Test Data :
    console.log(min_date(['2015/02/01', '2015/02/02', '2015/01/03']));
  Output : "2015/01/03"
*/
//? Tái sử dụng cho các hàm bên dưới
const formatDates = (date) => {
  const now = new Date(date).toLocaleDateString("vi-VN");
  const arrDate = now.split("/");
  return `${arrDate[2]}/${arrDate[1] < 10 ? `0${arrDate[1]}` : arrDate[1]}/${
    arrDate[0] < 10 ? `0${arrDate[0]}` : arrDate[0]
  }`;
};
//! Version 01: Using Array()
const min_date = (dates) => {
  if (Array.isArray(dates) === false) return "Invalid Input";
  const newArrDate = [];
  for (let item of dates) {
    newArrDate.push(new Date(item).getTime());
  }
  return formatDates(new Date(Math.min(...newArrDate)));
};
//! Version 02: Using Map()
const min_dateVer02 = (dates) => {
  return Array.isArray(dates) === false
    ? "Invalid Input"
    : formatDates(
        dates.map((item) => new Date(item).getTime()).sort((a, b) => a - b)[0]
      );
};
// Find Min Day In Array
//! Version 01: Using Array()
const max_date = (dates) => {
  if (Array.isArray(dates) === false) return "Invalid Input";
  const newArrDate = [];
  for (let item of dates) {
    newArrDate.push(new Date(item).getTime());
  }
  return formatDates(new Date(Math.max(...newArrDate)));
};
//! Version 02: Using Map()
const max_dateVer02 = (dates) => {
  return Array.isArray(dates) === false
    ? "Invalid Input"
    : formatDates(
        dates.map((item) => new Date(item).getTime()).sort((a, b) => b - a)[0]
      );
};
/**
  14. Viết một hàm JavaScript sẽ trả về số phút theo giờ và phút
  Test Data :
    console.log(timeConvert(200));
  Output : "200 minutes = 3 hour(s) and 20 minute(s)."
*/
const timeConvert = (minutes) => {
  if (typeof minutes !== "number") return "Invalid Input";
  ``;
  const hour = Math.floor(minutes / 60);
  const minute = minutes % 60;
  return `${minutes} minutes = ${hour} hour(s) and ${minute} minute(s).`;
};
/**
  15. Viết một hàm JavaScript để lấy số ngày trong năm.
  Test Data :
    + console.log(days_of_a_year(2015));
    + console.log(days_of_a_year(2016));
  Output: 365 | 366
  //? Hint:
    + Năm nhuận là năm chia hết cho 400
    + Năm nhuận là năm chia hết cho 4 nhưng không chia hết cho 100
  //TODO: Trái đất của chúng ta cần 365.25 ngày để quay hết một vòng quanh mặt trời. Phần dư 0.25 thực ra đã làm tròn, con số thực tế là `365.2425` ngày để trái đất quay được một vòng. Giá trị sai số này 0.0075 ngày(0.25-0.2425) khi nhân với 400 chúng ta sẽ có thêm 3 ngày nữa. Do đó, để lịch của ta chính xác, các chu kỳ 100, 200 và 300 chỉ có 24 năm nhuận thay vì 25. Riêng chu kỳ thứ 400 sẽ có 25 năm nhuận. Điều đó đảm bảo rằng chu kỳ 400 năm sẽ có 97(24+24+24+25) năm nhuận. Như vậy, cứ 400 năm chúng ta sẽ có 97 năm nhuận, không phải 100 nhé.
*/
//! Using Date.
const days_of_a_year = (year) => {
  if (typeof year !== "number") return "Invalid Input";
  const timerNow = new Date(year, 0, 1).getTime();
  const timeNext = new Date(year + 1, 0, 1).getTime();
  const PER_DAY_YEAR = 8.64e7; // (1000 * 60 * 60 * 24) = 86.400.000
  return Math.round((timeNext - timerNow) / PER_DAY_YEAR);
};
// Version02: Using Hint
const days_of_a_yearVer02 = (year) => {
  if (typeof year !== "number") return "Invalid Input";
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0) ? 366 : 365;
};
/**
  16. Viết một hàm JavaScript để lấy quý (1 đến 4) trong năm.
  Test Data :
    + console.log(quarter_of_the_year(new Date(2015, 1, 21)));
    + console.log(quarter_of_the_year(new Date(2015, 10, 18)));
  Output: 1 | 4
*/
const quarter_of_the_year = (date) => {
  if (typeof date !== "object") return "Invalid Input";
  const month = date.getMonth();
  return Math.ceil(month / 3);
};
//! Using: If/Else
const quarter_of_the_yearVer02 = (date) => {
  if (typeof date !== "object") return "Invalid Input";
  const month = date.getMonth() + 1;
  if (month <= 3) return 1;
  if (month > 3 && month <= 6) return 2;
  if (month > 6 && month <= 9) return 3;
  return 4;
};
/**
  17. Viết một hàm JavaScript để đếm số ngày đã trôi qua kể từ đầu năm.
  Test Data :
    console.log(days_passed(new Date(2015, 0, 15)));
    console.log(days_passed(new Date(2015, 11, 14)));
  Output: 15 | 348
*/
const days_passed = (date) => {
  const day = new Date(date);
  const startDay = new Date(day.getFullYear(), 0, 0).getTime();
  const endDay = date.getTime();
  const PER_DAY_OF_YEAR = 8.64e7; // (1000 * 60 * 60 * 24) = 86.400.000
  return Math.ceil((endDay - startDay) / PER_DAY_OF_YEAR);
};
/**
  18. Viết một hàm JavaScript để lấy ngày trong tháng, 2 chữ số với các số 0 ở đầu
  Test Data :
    d= new Date(2015, 10, 1) --> console.log(day_of_the_month(d));
  Ouput: "01"
*/
const getDayInMonth = (year, month, day) => {
  if (
    typeof year !== "number" ||
    typeof year !== "number" ||
    typeof year !== "number"
  )
    return "Invalid Input";
  const result = new Date(year, month, day).getDate();
  return result < 10 ? `0${result}` : result + "";
};
/**
  19. Viết một hàm JavaScript để có được biểu diễn dạng văn bản của một ngày (ba chữ cái, từ Thứ Hai đến Chủ Nhật).
  Test Data :
    dt = new Date(2015, 10, 1) --> console.log(short_Days(dt));
  Ouput: "Sun"
*/
const arrayDay = () => {
  let newDayArr = [];
  const array = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  for (let item of array) {
    newDayArr.push(item.substring(0, 3));
  }
  return newDayArr;
};
const short_Days = (date) => {
  if (typeof date !== "object") return "Invalid Input";
  const day = date.getDay();
  const arrDays = arrayDay();
  return arrDays[day];
};
/**
  20. Viết một hàm JavaScript để có được biểu diễn văn bản đầy đủ của ngày trong tuần (Chủ nhật đến Thứ bảy).
  Test Data :
    dt = new Date(2015, 10, 1) --> console.log(long_Days(dt));
  Output:  "Sunday"
*/
const long_Days = (date) => {
  if (typeof date !== "object") return "Invalid Input";
  const array = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = date.getDay();
  return array[day];
};

/**
  21. Viết một hàm JavaScript để có được biểu diễn văn bản đầy đủ của một tháng, chẳng hạn như tháng Giêng hoặc tháng Sáu.
  Test Data :
    dt = new Date(2015, 10, 1) --> console.log(full_month(dt));
  Output: "November"
*/
const full_month = (date) => {
  if (typeof date !== "object") return "Invalid Input";
  const array = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = date.getMonth();
  return array[month];
};
/**
  22. Viết một hàm JavaScript để có được biểu diễn số của một tháng, với các số 0 ở đầu (01 đến 12).
  Test Data :
    dt = new Date(2015, 10, 1) --> console.log(numeric_month(dt));
  Ouput: "11"
*/
//! Using date.getMonth()
const numeric_month = (date) => {
  if (typeof date !== "object") return "Invalid Input";
  const month = date.getMonth() + 1;
  return month < 10 ? `0${month}` : month + "";
};
//! Using Array
const numeric_monthVer02 = (date) => {
  if (typeof date !== "object") return "Invalid Input";
  const arrayTimer = date.toLocaleDateString("vi-VI").split("/");
  return arrayTimer[1] < 10 ? `0${arrayTimer[1]}` : arrayTimer[1];
};
/**
  23. Viết một hàm JavaScript để có được biểu diễn số đầy đủ của một năm (4 chữ số).
  Test Data :
    dt = new Date(2015, 10, 1) --> console.log(full_year(dt));
  Output:  2015
*/
//! Using date.getFullYear()
const full_year = (date) => {
  if (typeof date !== "object") return "Invalid Input";
  return date.getFullYear();
};
//! Using Array
const full_yearVer02 = (date) => {
  if (typeof date !== "object") return "Invalid Input";
  const arrayTimer = date.toLocaleDateString("vi-VI").split("/");
  return arrayTimer[2];
};
/**
  24. Viết một hàm JavaScript để có được biểu diễn hai chữ số của một năm
  Test Data :
    dt = new Date(1989, 10, 1) --> console.log(sort_year(dt));
  Output:  "89"
*/
//! Using date.getFullYear()
const sort_year = (date) => {
  if (typeof date !== "object") return "Invalid Input";
  return date.getFullYear().toString().substring(2);
};
//! Using Array
const sort_yearVer02 = (date) => {
  if (typeof date !== "object") return "Invalid Input";
  const arrayTimer = date.toLocaleDateString("vi-VI").split("/");
  return arrayTimer[2].substring(2);
};
/**
  25. Viết một hàm JavaScript để thêm các tháng cụ thể vào một ngày.
  Test Data :
    dt = new Date(2014,10,2) --> console.log(add_months(dt, 10).toString());
  Output : "Wed Sep 02 2015 00:00:00 GMT+0530 (India Standard Time)"
*/
const add_months = (date, months) => {
  if (typeof date !== "object") return "Invalid Input";
  const newDate = new Date(date);
  newDate.setMonth(newDate.getMonth() + months);
  return newDate;
};
/**
  26. Viết một hàm JavaScript để nhận chênh lệch thời gian tính bằng phút giữa hai ngày.
  Test Data :
    dt1 = new Date("October 13, 2014 11:11:00");
    dt2 = new Date("October 13, 2014 11:13:00");
  => console.log(diff_minutes(dt1, dt2));
  Output:  2
*/
//! Using getTime()
const diff_minutes = (date1, date2) => {
  if (typeof date1 !== "object" || typeof date2 !== "object")
    return "Invalid Input";
  const timer01 = date1.getTime();
  const timer02 = date2.getTime();
  const PER_MINUTE = 60000;
  return Math.round((timer02 - timer01) / PER_MINUTE);
};
//! Using getMinutes()
const diff_minutesVer02 = (date1, date2) => {
  if (typeof date1 !== "object" || typeof date2 !== "object")
    return "Invalid Input";
  const minutes = date2.getMinutes() - date1.getMinutes();
  return minutes;
};
/**
  27. Viết hàm JavaScript để nhận chênh lệch thời gian tính theo giờ giữa hai ngày.
  Test Data :
    dt1 = new Date("October 13, 2014 08:11:00");
    dt2 = new Date("October 13, 2014 11:13:00");
  => console.log(diff_hours(dt1, dt2));
  Output:  3
*/
//! Using getTime()
const diff_hours = (date1, date2) => {
  if (typeof date1 !== "object" || typeof date2 !== "object")
    return "Invalid Input";
  const timer01 = date1.getTime();
  const timer02 = date2.getTime();
  const PER_HOUR = 3600000; //? 3600000 = 60 * 60 * 1000
  return Math.round((timer02 - timer01) / PER_HOUR);
};
//! Using getHours()
const diff_hoursVer02 = (date1, date2) => {
  if (typeof date1 !== "object" || typeof date2 !== "object")
    return "Invalid Input";
  const hours = date2.getHours() - date1.getHours();
  return Math.abs(hours);
};

/**
  28. Viết hàm JavaScript để nhận chênh lệch thời gian giữa hai ngày.
  Test Data :
    dt1 = new Date("October 13, 2014 08:11:00");
    dt2 = new Date("October 19, 2014 11:13:00");
  => console.log(diff_days(dt1, dt2));
  Output:  6
*/
//! Using getTime()
const diff_days = (date1, date2) => {
  if (typeof date1 !== "object" || typeof date2 !== "object")
    return "Invalid Input";
  const timer01 = date1.getTime();
  const timer02 = date2.getTime();
  const PER_DAY = 86400000; //? 86400000 = 24 * 60 * 60 * 1000
  return Math.round((timer02 - timer01) / PER_DAY);
};
//! Using getDate()
const diff_daysVer02 = (date1, date2) => {
  if (typeof date1 !== "object" || typeof date2 !== "object")
    return "Invalid Input";
  const days = date2.getDate() - date1.getDate();
  return Math.abs(days);
};
/**
  29. Viết một hàm JavaScript để nhận được sự khác biệt về thời gian theo tuần giữa hai ngày
  Test Data :
    dt1 = new Date("June 13, 2014 08:11:00");
    dt2 = new Date("October 19, 2014 11:13:00");
  => console.log(diff_weeks(dt1, dt2));
  Output:  18
*/
//! Using getTime()
const diff_weeks = (date1, date2) => {
  if (typeof date1 !== "object" || typeof date2 !== "object")
    return "Invalid Input";
  const PER_WEEK = 604800000; //? 604800000 = 7 * 24 * 60 * 60 * 1000
  const timer01 = date1.getTime();
  const timer02 = date2.getTime();
  return Math.round((timer02 - timer01) / PER_WEEK);
};

/**
  30. Viết một hàm JavaScript để nhận được sự khác biệt về thời gian trong các tháng giữa hai ngày.
  Test Data :
    dt1 = new Date("June 13, 2014 08:11:00");
    dt2 = new Date("October 19, 2014 11:13:00");
  =>  console.log(diff_months(dt1, dt2));
  Output:  5
*/
const diff_months = (date1, date2) => {
  if (typeof date1 !== "object" || typeof date2 !== "object")
    return "Invalid Input";
  const PER_MONTH = 2419200000; //? 2419200000 = 4 * 7 * 24 * 60 * 60 * 1000
  const timer01 = date1.getTime();
  const timer02 = date2.getTime();
  return Math.round((timer02 - timer01) / PER_MONTH);
};
/**
  31. Viết một hàm JavaScript để nhận được sự khác biệt về thời gian theo năm giữa hai ngày
  Test Data :
    dt1 = new Date("June 13, 2014 08:11:00");
    dt2 = new Date("October 19, 2017 11:13:00");
  => console.log(diff_years(dt1, dt2));
  Output:  3
  //TODO: Trái đất của chúng ta cần 365.25 ngày để quay hết một vòng quanh mặt trời. Phần dư 0.25 thực ra đã làm tròn, con số thực tế là `365.2425` ngày để trái đất quay được một vòng. Giá trị sai số này 0.0075 ngày(0.25-0.2425) khi nhân với 400 chúng ta sẽ có thêm 3 ngày nữa. Do đó, để lịch của ta chính xác, các chu kỳ 100, 200 và 300 chỉ có 24 năm nhuận thay vì 25. Riêng chu kỳ thứ 400 sẽ có 25 năm nhuận. Điều đó đảm bảo rằng chu kỳ 400 năm sẽ có 97(24+24+24+25) năm nhuận. Như vậy, cứ 400 năm chúng ta sẽ có 97 năm nhuận, không phải 100 nhé.
*/
const diff_years = (date1, date2) => {
  if (typeof date1 !== "object" || typeof date2 !== "object")
    return "Invalid Input";
  //TODO: Đọc gợi ý ở phần mô tả để bk sao là đc 365.25
  const PER_YEAR = 31557600000; //? 31557600000 = 365.25* 24 * 60 * 60 * 1000
  const timer01 = date1.getTime();
  const timer02 = date2.getTime();
  return Math.round((timer02 - timer01) / PER_YEAR);
};
/**
  32. Viết một hàm JavaScript để lấy ngày bắt đầu của tuần.
 */
const startOfWeek = (date) => {
  if (typeof date !== "object") return "Invalid Input";
  const diff = date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : 1);
  return new Date(date.setDate(diff));
};
/**
  33. Viết một hàm JavaScript để lấy ngày kết thúc tuần
 */
const endOfWeek = (date) => {
  if (typeof date !== "object") return "Invalid Input";
  const dayNextWeek = new Date(date.setDate(date.getDate() + 7)).getDate();
  const lastDayOfWeek =
    new Date(new Date().setDate(dayNextWeek)).getDate() -
    new Date(new Date().setDate(dayNextWeek)).getDay() +
    (new Date(new Date().setDate(dayNextWeek)).getDay() === 0 ? -7 : 0);
  return new Date(new Date().setDate(lastDayOfWeek));
};
// Version 02:
//! Tìm số ngày để lùi về được đầu tuần: date.getDay() - 1
const endOfWeekVer02 = (date) => {
  if (typeof date !== "object") return "Invalid Input";
  return new Date(date.setDate(date.getDate() - (date.getDay() - 1) + 6));
};
/**
  34. Viết một hàm JavaScript để lấy ngày bắt đầu của tháng.
 */
const startOfMonth = (date) => {
  if (typeof date !== "object") return "Invalid Input";
  return new Date(date.setDate(1));
};
/**
  35. Viết một hàm JavaScript để lấy ngày kết thúc tháng.
 */
const endOfMonth = (date) => {
  if (typeof date !== "object") return "Invalid Input";
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
};
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
const timeSince = (time) => {
  const years = 31557600,
    months = 2419200,
    weeks = 345600,
    days = 86400,
    hours = 3600,
    minutes = 60;
  // get current time
  let now = new Date().getTime();
  // get remaining time
  let getRemainingTime = new Date(time).getTime();
  // Khoảng thời gian giữa 2 giai đoạn
  let gap = now - getRemainingTime;
  let seconds = Math.floor(gap / 1000);
  let timer = seconds / years;
  if (timer > 1) {
    return `${Math.floor(seconds / years)} năm trước`;
  }
  timer = seconds / months;
  if (timer > 1) {
    return `${Math.floor(seconds / months)} tháng trước`;
  }
  timer = seconds / weeks;
  if (timer > 1) {
    return `${Math.floor(seconds / weeks)} tuần trước`;
  }
  timer = seconds / days;
  if (timer > 1) {
    return `${Math.floor(seconds / days)} ngày trước`;
  }
  timer = seconds / hours;
  if (timer > 1) {
    return `${Math.floor(seconds / hours)} giờ trước`;
  }
  timer = seconds / minutes;
  if (timer > 1) {
    return `${Math.floor(seconds / minutes)} phút trước`;
  }
  return timer;
};
