import { filterArray } from "./06-FilterString";

describe("Filter out Strings from an Array", () => {
  it("should return Invalid input when arr is not an Object", () => {
    [1, "1", undefined].forEach((item) => {
      expect(filterArray(item)).toBe("Invalid input");
    });
  });

  it("should return [] when arr is empty", () => {
    expect(filterArray([])).toStrictEqual([]);
  });

  it("should return a new array without the strings after filter string", () => {
    expect(filterArray([1, 2, "a", "b"])).toStrictEqual([1, 2]);
    expect(filterArray([1, "a", "b", 0, 15])).toStrictEqual([1, 0, 15]);
    expect(filterArray([1, 2, "aasf", "1", "123", 123])).toStrictEqual([
      1, 2, 123,
    ]);
  });
});
