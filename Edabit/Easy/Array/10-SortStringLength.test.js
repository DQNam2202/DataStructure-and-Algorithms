import { sortByLength } from "./10-SortStringLength";

describe("Sort by String Length", () => {
  it("should return Invalid input when arr is not a Object", () => {
    [1, "2", undefined].forEach((item) => {
      expect(sortByLength(item)).toBe("Invalid input");
    });
  });

  it("should return [] when arr is empty", () => {
    expect(sortByLength([])).toStrictEqual([]);
  });

  it("should return an array of strings sorted by length in ascending order.", () => {
    expect(sortByLength(["a", "ccc", "dddd", "bb"])).toStrictEqual([
      "a",
      "bb",
      "ccc",
      "dddd",
    ]);
    expect(sortByLength(["apple", "pie", "shortcake"])).toStrictEqual([
      "pie",
      "apple",
      "shortcake",
    ]);
    expect(sortByLength(["may", "april", "september", "august"])).toStrictEqual(
      ["may", "april", "august", "september"]
    );
  });
});
