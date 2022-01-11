import { minMax } from "./01-FindSmallBigNumb";

describe("minMax", () => {
  it("should return Invalid input when arr is not a Object", () => {
    [1, "1", undefined].forEach((item) => {
      expect(minMax(item)).toBe("Invalid input");
    });
  });

  it("should return both the minimum and maximum numbers, in that order.", () => {
    expect(minMax([1, 2, 3, 4, 5])).toStrictEqual([1, 5]);
    expect(minMax([2334454, 5])).toStrictEqual([5, 2334454]);
    expect(minMax([1])).toStrictEqual([1, 1]);
  });

  it("should return [] when arr is empty", () => {
    expect(minMax([])).toStrictEqual([]);
  });
});
