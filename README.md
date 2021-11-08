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

Lưu ý rằng chúng ta có thể gọi hàm khai báo TRƯỚC khi hàm thực sự được khai báo

</p>
</details>
