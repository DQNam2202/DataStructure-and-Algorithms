//! Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
// const solution_one = (str, ending) => {
//   if (str.length === 0 || ending.length === 0) return true;
//   const newStr = str.split('').slice(-ending.length).join('');
//   return newStr === ending ? true : false;
// };
const solution_two = (str, ending) => {
  if (str.length === 0 || ending.length === 0) return true;
  return str.endsWith(ending) ? true : false;
};

console.log(solution_two('abc', '')); // true
console.log(solution_two('abc', 'bc')); // true
console.log(solution_two('abc', 'd')); // false
console.log(solution_two('abcde', 'cde')); // true
console.log(solution_two('abcde', 'abc')); // false
