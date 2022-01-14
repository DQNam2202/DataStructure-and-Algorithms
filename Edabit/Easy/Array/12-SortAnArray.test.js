import { sortByLength } from "./12-SortAnArray";

describe("Sort an Array by String length", () => {
  it("should return Invalid input when arr is not a Object", () => {
    [1, "2", undefined].forEach((item) => {
      expect(sortByLength(item)).toBe("Invalid input");
    });
  });

  it("should return [] when arr is empty", () => {
    expect(sortByLength([])).toStrictEqual([]);
  });

  it("should return an array, sorted from shortest to longest.", () => {
    expect(sortByLength(["Google", "Apple", "Microsoft"])).toStrictEqual([
      "Apple",
      "Google",
      "Microsoft",
    ]);
    expect(
      sortByLength(["Leonardo", "Michelangelo", "Raphael", "Donatello"])
    ).toStrictEqual(["Raphael", "Leonardo", "Donatello", "Michelangelo"]);
    expect(sortByLength(["Turing", "Einstein", "Jung"])).toStrictEqual([
      "Jung",
      "Turing",
      "Einstein",
    ]);
  });
});
