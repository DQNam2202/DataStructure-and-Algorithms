// A leap year happens every four years, so it's a year that is perfectly divisible by four. However, if the year is a multiple of 100 (1800, 1900, etc), the year must be divisible by 400.
// Output:
// leapYear(2020) ➞ true
// leapYear(2021) ➞ false
// leapYear(1968) ➞ true

export const leapYear = (year) => {
  if (typeof year !== "number") return "Invalid year";
  return year % 4 === 0 && (year % 400 === 0 || year % 100 !== 0)
    ? true
    : false;
};
