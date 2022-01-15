import { findLargestNums } from "./15-FindLargestNumbs";

describe("Find The Largest Number in a group of Arrays", () => {
  it("should return Invalid input when arr is not a Object", () => {
    [1, "1", undefined].forEach((item) => {
      expect(findLargestNums(item)).toBe("Invalid input");
    });
  });

  it("should return a new (single) array with the largest numbers of each.", () => {
    expect(
      findLargestNums([
        [4, 2, 7, 1],
        [20, 70, 40, 90],
        [1, 2, 0],
      ])
    ).toStrictEqual([7, 90, 2]);
    expect(
      findLargestNums([
        [0.4321, 0.7634, 0.652],
        [1.324, 9.32, 2.5423, 6.4314],
        [9, 3, 6, 3],
      ])
    ).toStrictEqual([0.7634, 9.32, 9]);
    expect(
      findLargestNums([
        [-34, -54, -74],
        [-32, -2, -65],
        [-54, 7, -43],
      ])
    ).toStrictEqual([-34, -2, 7]);
    expect(
      findLargestNums([
        [0.34, -5, 1.34],
        [-6.432, -1.762, -1.99],
        [32, 65, -6],
      ])
    ).toStrictEqual([1.34, -1.762, 65]);
    expect(
      findLargestNums([
        [0, 0, 0, 0],
        [3, 3, 3, 3],
        [-2, -2],
      ])
    ).toStrictEqual([0, 3, -2]);
  });

  it("should return [] when arr is empty", () => {
    expect(findLargestNums([])).toStrictEqual([]);
  });
});
