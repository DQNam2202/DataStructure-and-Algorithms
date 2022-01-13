import { sumOfCubesV1, sumOfCubesV2 } from "./12-SumCubes";

describe("sumOfCubesV1", () => {
  it("should return Invalid input when arr is not a Object", () => {
    [1, "1", undefined].forEach((item) => {
      expect(sumOfCubesV1(item)).toBe("Invalid input");
    });
  });

  it("should return 0 when arr is empty", () => {
    expect(sumOfCubesV1([])).toBe(0);
  });

  it("should return the sum of its cubes", () => {
    expect(sumOfCubesV1([1, 5, 9])).toBe(855);
    expect(sumOfCubesV1([3, 4, 5])).toBe(216);
    expect(sumOfCubesV1([2])).toBe(8);
  });
});

describe("sumOfCubesV2", () => {
  it("should return Invalid input when arr is not a Object", () => {
    [1, "1", undefined].forEach((item) => {
      expect(sumOfCubesV2(item)).toBe("Invalid input");
    });
  });

  it("should return 0 when arr is empty", () => {
    expect(sumOfCubesV2([])).toBe(0);
  });

  it("should return the sum of its cubes", () => {
    expect(sumOfCubesV2([1, 5, 9])).toBe(855);
    expect(sumOfCubesV2([3, 4, 5])).toBe(216);
    expect(sumOfCubesV2([2])).toBe(8);
  });
});
