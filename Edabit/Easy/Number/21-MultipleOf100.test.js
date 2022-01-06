import { divisible } from "./21-MultipleOf100";

describe("Multiple of 100", () => {
  it("should return Invalid number when n is not a number", () => {
    ["1", [], {}, null, undefined].forEach((item) => {
      expect(divisible(item)).toBe("Invalid number");
    });
  });

  it("should return true if it's divisible by 100", () => {
    [100, -1000, 10000, -1000000, 10000000].forEach((item) => {
      expect(divisible(item)).toBe(true);
    });
  });

  it("should return false if it's not divisible by 100", () => {
    [1, 10, 25, 54, 52, 76, 87, 98, -10].forEach((item) => {
      expect(divisible(item)).toBe(false);
    });
  });
});
