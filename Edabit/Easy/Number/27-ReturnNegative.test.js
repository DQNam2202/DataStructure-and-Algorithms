import { returnNegative } from "./27-ReturnNegative";

describe("Return Negative", () => {
  it("should return invalid number when numb is not a number", () => {
    ["1", {}, [], undefined, null].forEach((item) => {
      expect(returnNegative(item)).toBe("Invalid number");
    });
  });

  it("should return negative numbers without any change.", () => {
    expect(returnNegative(4)).toBe(-4);
    expect(returnNegative(15)).toBe(-15);
    expect(returnNegative(-4)).toBe(-4);
    expect(returnNegative(-13)).toBe(-13);
  });

  it("should return 0 if numb = 0", () => {
    expect(returnNegative(0)).toBe(0);
  });
});
