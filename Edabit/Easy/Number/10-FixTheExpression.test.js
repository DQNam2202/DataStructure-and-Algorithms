import { isSeven } from "./10-FixTheExpression";

describe("Check number is equal to seven", () => {
  it("should return false when number is not a number", () => {
    expect(isSeven("12")).toBe(false);
    expect(isSeven([])).toBe(false);
    expect(isSeven({})).toBe(false);
    expect(isSeven(null)).toBe(false);
    expect(isSeven(undefined)).toBe(false);
  });

  it("should return false if number is not equal to seven", () => {
    expect(isSeven(12)).toBe(false);
    expect(isSeven(6)).toBe(false);
    expect(isSeven(-7)).toBe(false);
  });

  it("should return true if number is equal to seven", () => {
    expect(isSeven(7)).toBe(true);
  });
});
