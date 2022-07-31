String.prototype.toJadenCase = function () {
  const newStr = [];
  const strList = this.toLowerCase().split(' ');
  strList.forEach(item => {
    newStr.push(`${item[0].toUpperCase()}${item.slice(1)}`);
  });
  return newStr.join(' ');
};
console.log("How can mirrors be real if our eyes aren't real".toJadenCase());

// Refactor Code
String.prototype.toJadenCaseVer2 = function () {
  return this.length === 0
    ? ''
    : this.split(' ')
        .map(item => {
          return `${item[0].toUpperCase()}${item.slice(1)}`;
        })
        .join(' ');
};
console.log(
  "How can mirrors be real if our eyes aren't real".toJadenCaseVer2(),
);
