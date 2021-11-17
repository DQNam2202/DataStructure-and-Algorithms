# 🚀 Những câu hỏi ôn tập JavaScript cơ bản 🚀

Các câu hỏi sẽ từ cơ bản đến nâng cao: kiểm tra trình độ JavaScript của bạn, làm mới một chút về kiến thức, hay chuẩn bị cho cuộc phỏng vấn về Javascripts !

Những kiến thức này được mình tìm hiểu và rút ra thông qua những bài học từ quá trình tự học javascript trên Youtube, Udemy, v.v.v

Các đáp án được đặt dưới mỗi câu hỏi. Vì tự học là chính nên các câu trả lời của mình nếu có phần nào chưa đúng hoặc thiếu sót mong các bạn có thể đóng góp với mình để hoàn thiện hơn

---

###### 1. Output là gì?

```javascript
+true;
!"Hello World";
```

- A: `false` and `NaN`
- B: `1` and `false`
- C: `false` and `false`
- D: `NaN` and `false`

<details><summary><b>Đáp án</b></summary>
<p>

#### Đáp án: B

Phép toán cộng `+` sẽ convert một toán hạng sang dạng number. `true` là `1`, và `false` sẽ là `0`.

Chuỗi `'Hello World'` là một _truthy value_.Mà !_truthy value_ có nghĩa là _falsy value_.Câu hỏi đặt ra đổi với các bạn "có phải một giá trị truthy là falsy?". Rõ ràng câu trả lời là `false` rồi.

</p>
</details>

---

###### 2. Output là gì?

```javascript
let c = { languages: "Java!" };
let d;

d = c;
c.languages = "Javascript";
console.log(d.languages);
```

- A: `Javascript`
- B: `Java!`
- C: `undefined`
- D: `ReferenceError`

<details><summary><b>Đáp án</b></summary>
<p>

#### Đáp án: A

Trong JavaScript, tất cả các object sẽ được _tham chiếu_ khi chúng được gán \_bằng_wwwww một giá trị khác.

Đầu tiên, giá trị `c` có giá trị là một object. Sau đó, chúng ta gán `d` tham chiếu tới object mà `c` trỏ tới.

<img src="https://i.imgur.com/ko5k0fs.png" width="200">

Khi ta thay đổi giá trị của object, tất cả các biến tham chiếu cũng đều thay đổi giá trị theo.

</p>
</details>

---

###### 3. Output là gì?

```javascript
(function js(x) {
  const y = (j) => j * x;

  console.log(y(s()));

  function s() {
    return j();
  }

  function j() {
    return x ** x;
  }
})(3);
```

- A: 81
- B: 18
- C: `Undefine`
- D: 21

<details><summary><b>Đáp án</b></summary>
<p>

#### Đáp án: A

Hàm js () thực thi tự động mà không cần gọi nó và được gọi là IIFE (Immediately Invoked Function Expression) có nghĩa là khởi tạo một function và thực thi nó ngay lập tức. Lưu ý, tham số x của hàm js được truyền vào với giá trị 3.

Giá trị trả về của hàm là y(s())), có nghĩa là gọi ba hàm khác là y(), s() và j() vì hàm s() trả về j().

Hàm j() trả về x\*\*x, có nghĩa là x^x là 3^3 = 27.

Hàm y(s()) có nghĩa là y(27) suy ra ta được 27\*3 = 81.

Lưu ý: rằng chúng ta có thể gọi hàm khai báo TRƯỚC khi hàm thực sự được khai báo

</p>
</details>

---

###### 4. Output là gì?

```javascript
const js = { language: "JavaScripts", label: "difficult" };

const edu = { ...js, level: "Senior" };

const newbie = edu;

delete edu.language;

console.log(Object.keys(newbie).length);
```

- A: 5
- B: 4
- C: 2
- D: 3

<details><summary><b>Đáp án</b></summary>
<p>

#### Đáp án: C

Bài toán trên có liên quan đến một tính năng của ES6 là `spread operator(...)`.Toán tử Spread khá hữu ích để truy xuất tham số trong hàm, để hợp nhất hoặc kết hợp đối tượng và mảng trong JavaScript.

Trong biến edu, chúng ta sử dụng ... js (ở đây là toán tử spread) để kết hợp cả hai đối tượng thành một.

Sau đó, chúng ta khai báo một biến khác có tên là newbie. Lưu ý QUAN TRỌNG: Bằng cách khai báo biến như vậy, cả hai biến đều trỏ đến VỊ TRÍ CÙNG NHAU trong bộ nhớ.

Tiếp đến, chúng ta ta thấy chỉ còn lại là 2 vì edu.language đã bị xóa. Cả hai đối tượng bây giờ chỉ có hai phần tử.

</p>
</details>

---

###### 5. Output là gì?

```javascript
let a = 3;
let b = 3;
let c = new Number(3);

console.log(a == c);
console.log(a === c);
console.log(b === c);
```

- A: `true` `false` `false`
- B: `true` `false` `true`
- C: `false` `true` `true`
- D: `false` `false` `true`

<details><summary><b>Đáp án</b></summary>
<p>

#### Đáp án: A

Vì `new Number()` là một hàm built-in Contructor của JavaScript. Trông nó có vẻ giống như là một số, nhưng thật sự không phải vậy nó là một Object với những thuộc tính được định nghĩa trong hàm `Number()`.

Khi ta sử dụng phép toán so sánh `==`, thì nó đơn giản chỉ so sánh xem 2 biến có giá trị giống nhau, chúng đều có giá trị là 3, vậy nên phép toán sẽ trả ra giá trị `true`.

Tuy nhiên, khi chúng ta sử dụng phép so sánh `===`, phép so sánh này yêu cầu cả giá trị và kiểu dữ liệu phải giống nhau. Ta có thể thấy, `new Number()`không phải là một số, nó là một Object. Nên cả hai phép toán còn lại đều trả ra `false`.

</p>
</details>

---

###### 6. Output là gì?

```javascript
function sum(a, b) {
  return a + b;
}
sum(5, "2");
```

- A: `7`
- B: `TypeError`
- C: `52`
- D: `NaN`

<details><summary><b>Đáp án</b></summary>
<p>

#### Đáp án: C

JavaScript là một ngôn ngữ `dynamically typed`: chúng ta không khai báo kiểu dữ liệu khi khai báo biến. thì giá trị đó có thể tự động convert sang một kiểu dữ liệu khác mà ta không hề hay biết, điều này được gọi là `implicit type coercion`. `Coercion` có nghĩa là convert từ kiểu này sang kiểu khác.

Trong trường hợp này thì Javascripts sẽ tự động convert số `5` sang dạng string. Trong Javascripts khi ta cộng một một số (`5`) với một chuỗi (`"2"`), số đó sẽ luôn là một string. Kết quả là một phép nối chuỗi. Vậy nên suy ra `"5" + "2"` sẽ trả về là `"52"`.

</p>
</details>

---

###### 7. Output là gì?

```javascript
let number = 2;
console.log(number++);
console.log(++number);
console.log(number);
```

- A: `2` `4` `4`
- B: `3` `3` `4`
- C: `2` `3` `3`
- D: `3` `3` `4`

<details><summary><b>Đáp án</b></summary>
<p>

#### Đáp án: A

Khi phép toán `++` nằm ở **đằng sau**: `return` first => then `increase`

1. Trả về giá trị (trả về `2`)
2. Tăng giá trị lên (number giờ là `3`)

Khi phép toán `++` nằm ở **đằng trước**: `increase` first => then `return`

1. Tăng giá trị lên (number giờ là `4`)
2. Trả về giá trị (trả về `4`)

Vậy kết quả là `2 4 4`.

</p>
</details>

---

###### 8. Output là gì?

```javascript
function checkAge(data) {
  if (data === { age: 18 }) {
    console.log("You can ride a motorcycle");
  } else if (data == { age: 18 }) {
    console.log("You can ride a car");
  } else {
    console.log(`Hmm.. You don't have an age I guess`);
  }
}
checkAge({ age: 18 });
```

- A: `You can ride a motorcycle`
- B: `You can ride a car`
- C: `Hmm.. You don't have an age I guess`
- D: `Undefine`

<details><summary><b>Đáp án</b></summary>
<p>

#### Đáp án: C

Trong Javascripts khi kiểm tra sự bằng nhau, các kiểu dữ liệu cơ bản sẽ so sánh giá trị của chúng, riêng `object` thì so sánh tham chiếu. JS sẽ kiểm tra xem các `object` có trỏ đến những vùng nhớ giống nhau hay không.

Trong khi đó hai `object` chúng ta đang so sánh lại không thỏa điều kiện đó. object đối số tham chiếu đến một vùng nhớ khác với object chúng ta dùng để kiểm tra sự bằng nhau.

Vậy nên kết quá trả về từ việc so sánh `{ age: 18 } === { age: 18 }` và `{ age: 18 } == { age: 18 }` sẽ là `false`.

</p>
</details>

---

###### 9. Output là gì?

```javascript
const sum = eval("10*10+5*5");
```

- A: `125`
- B: `NaN`
- C: `"125"`
- D: `"10*10+5*5"`

<details><summary><b>Đáp án</b></summary>
<p>

#### Đáp án: A

Giới thiệu về `eval(String)`: eval () là hàm đánh giá mã JavaScript được biểu diễn dưới dạng một chuỗi.
`String`được hiểu ở đây là một chuỗi đại diện cho một biểu thức JavaScript, câu lệnh hoặc chuỗi câu lệnh. Biểu thức có thể bao gồm các biến và thuộc tính của các đối tượng hiện có.

Trong trường hợp bài toán trên, `eval()` sẽ đánh giá biểu thức bên trong chuỗi. Nếu nó là một biểu thức, thì nó sẽ tính toán giá trị đó `10 * 10 + 5 * 5` và trả ra kết quả là `125`

</p>
</details>
