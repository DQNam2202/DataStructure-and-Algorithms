import { sortNumAscending } from "./14-SortNumber";

describe("Sort Numbers in Ascending Order", () => {
  it("should return [] when arr is not an Object", () => {
    [1, "2", undefined].forEach((item) => {
      expect(sortNumAscending(item)).toStrictEqual([]);
    });
  });

  it("should return a new array, sorted in ascending order (smallest to biggest).", () => {
    expect(sortNumAscending([1, 2, 10, 50, 5])).toStrictEqual([
      1, 2, 5, 10, 50,
    ]);
    expect(sortNumAscending([80, 29, 4, -95, -24, 85])).toStrictEqual([
      -95, -24, 4, 29, 80, 85,
    ]);
    expect(sortNumAscending(null)).toStrictEqual([]);
    expect(sortNumAscending([])).toStrictEqual([]);
  });

  it("should return [] when arr is empty", () => {
    expect(sortNumAscending([])).toStrictEqual([]);
  });
});
