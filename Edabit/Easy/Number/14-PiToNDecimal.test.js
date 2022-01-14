import { myPi } from "./14-PiToNDecimal";

describe("Pi to N Decimal Places", () => {
  it("should return Invalid input when n is not a number", () => {
    ["1", [], {}, null, undefined].forEach((item) => {
      expect(myPi(item)).toBe("Invalid input");
    });
  });

  it("should returns PI to n decimal places.", () => {
    expect(myPi(5)).toBe(3.14159);
    expect(myPi(4)).toBe(3.1416);
    expect(myPi(15)).toBe(3.141592653589793);
  });

  it("should return Invalid input when n > 15", () => {
    expect(myPi(16)).toBe("Invalid input");
  });
});
