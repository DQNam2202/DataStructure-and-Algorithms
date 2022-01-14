import { isAvgWhole } from "./16-AverageOfAllElements";

describe("isAvgWhole", () => {
  it("should return Invalid input when arr is not an Object", () => {
    [1, "1", undefined].forEach((item) => {
      expect(isAvgWhole(item)).toBe("Invalid input");
    });
  });

  it("should return [] when arr is empty", () => {
    expect(isAvgWhole([])).toStrictEqual([]);
  });

  it("should true depending on whether the average of all elements in the array is a whole number", () => {
    expect(isAvgWhole([1, 3])).toBe(true);
    expect(isAvgWhole([1, 5, 6])).toBe(true);
    expect(isAvgWhole([1, 1, 1])).toBe(true);
  });

  it("should false depending on whether the average of all elements in the array is a whole number", () => {
    expect(isAvgWhole([1, 2, 3, 4])).toBe(false);
    expect(isAvgWhole([9, 2, 2, 5])).toBe(false);
  });
});
