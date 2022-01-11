import { timeForMilkAndCookies } from "./01-ChristmasEve";

describe("timeForMilkAndCookies()", () => {
  it("should return Invalid input when date is not a dateTime", () => {
    [1, "2", undefined, null, []].forEach((item) => {
      expect(timeForMilkAndCookies(item)).toBe("Invalid input");
    });
  });
  it("should return true if it's Christmas Eve (December 24th) ", () => {
    expect(timeForMilkAndCookies(new Date(2013, 11, 24))).toBe(true);
    expect(timeForMilkAndCookies(new Date(3000, 11, 24))).toBe(true);
  });
  it("should return false if it's not Christmas Eve (December 24th", () => {
    expect(timeForMilkAndCookies(new Date(2013, 0, 23))).toBe(false);
    expect(timeForMilkAndCookies(new Date(2022, 0, 11))).toBe(false);
  });
});
