import { getAbsSum } from "./13-AbsoluteSum";

describe("Absolute Sum", () => {
  it("should return Invalid input when arr is not a Object", () => {
    [1, "2", undefined].forEach((item) => {
      expect(getAbsSum(item)).toBe("Invalid input");
    });
  });

  it("should return [] when arr is empty", () => {
    expect(getAbsSum([])).toStrictEqual([]);
  });

  it("should return the sum of the absolute value of each element.", () => {
    expect(getAbsSum([2, -1, 4, 8, 10])).toBe(25);
    expect(getAbsSum([-3, -4, -10, -2, -3])).toBe(22);
    expect(getAbsSum([2, 4, 6, 8, 10])).toBe(30);
    expect(getAbsSum([-1])).toBe(1);
  });
});
