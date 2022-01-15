import { set } from "./16-TransformIntoArray";

describe("set()", () => {
  it("should return Invalid input when arr is not an Object", () => {
    [1, "2", undefined].forEach((item) => {
      expect(set(item)).toBe("Invalid input");
    });
  });

  it("should return new arry after sorts an array and removes all duplicate items", () => {
    expect(set([1, 3, 3, 5, 5])).toStrictEqual([1, 3, 5]);
    expect(set([4, 4, 4, 4])).toStrictEqual([4]);
    expect(set([5, 7, 8, 9, 10, 15])).toStrictEqual([5, 7, 8, 9, 10, 15]);
    expect(set([3, 3, 3, 2, 1])).toStrictEqual([1, 2, 3]);
  });

  it("should return [] when arr is empty", () => {
    expect(set([])).toStrictEqual([]);
  });
});
