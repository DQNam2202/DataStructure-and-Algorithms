import { divisibleByFive } from "./20-DivisibleByFive";

describe("Check if an Integer is Divisible By Five", () => {
  it("should return Invalid Number when n is not a number", () => {
    ["5", [], {}, null, undefined].forEach((item) => {
      expect(divisibleByFive(item)).toBe("Invalid number");
    });
  });

  it("should true if an integer is evenly divisible by 5", () => {
    [5, 55, -55, 45, 30, -15, 90, 100, -125].forEach((item) => {
      expect(divisibleByFive(item)).toBe(true);
    });
  });

  it("should false if an integer is not evenly divisible by 5", () => {
    [33, -37, 21, 89, 14, 28, 72].forEach((item) => {
      expect(divisibleByFive(item)).toBe(false);
    });
  });
});
