import { leapYear } from "./24-leapYear";

describe("Find Out the Leap Year", () => {
  it("should return Invalid year when year is not a number", () => {
    ["2020", {}, [], null, undefined].forEach((item) => {
      expect(leapYear(item)).toBe("Invalid year");
    });
  });

  it("should return true if the year is a leap year", () => {
    [2004, 2008, 2012, 2016, 2020, 2024, 2028, 2032, 2036].forEach((item) => {
      expect(leapYear(item)).toBe(true);
    });
  });

  it("should false if the year is not a leap year", () => {
    [2003, 2007, 2013, 2017, 2021, 2025, 2029, 2031, 2035].forEach((item) => {
      expect(leapYear(item)).toBe(false);
    });
  });
});
