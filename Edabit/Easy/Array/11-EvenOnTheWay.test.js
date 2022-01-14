import { getOnlyEvensV1, getOnlyEvensV2 } from "./11-EvenOnTheWay";

describe("getOnlyEvensV1()", () => {
  it("should return Invalid input when arr is not a Object", () => {
    ["1", 1, undefined].forEach((item) => {
      expect(getOnlyEvensV1(item)).toBe("Invalid input");
    });
  });

  it("should return [] when arr is empty", () => {
    expect(getOnlyEvensV1([])).toStrictEqual([]);
  });

  it("should return an array which contains all the even numbers in the original array", () => {
    expect(getOnlyEvensV1([1, 3, 2, 6, 4, 8])).toStrictEqual([2, 4]);
    expect(getOnlyEvensV1([0, 1, 2, 3, 4])).toStrictEqual([0, 2, 4]);
    expect(getOnlyEvensV1([1, 2, 3, 4, 5])).toStrictEqual([]);
  });
});

describe("getOnlyEvensV2()", () => {
  it("should return Invalid input when arr is not a Object", () => {
    ["1", 1, undefined].forEach((item) => {
      expect(getOnlyEvensV2(item)).toBe("Invalid input");
    });
  });

  it("should return [] when arr is empty", () => {
    expect(getOnlyEvensV2([])).toStrictEqual([]);
  });

  it("should return an array which contains all the even numbers in the original array", () => {
    expect(getOnlyEvensV2([1, 3, 2, 6, 4, 8])).toStrictEqual([2, 4]);
    expect(getOnlyEvensV2([0, 1, 2, 3, 4])).toStrictEqual([0, 2, 4]);
    expect(getOnlyEvensV2([1, 2, 3, 4, 5])).toStrictEqual([]);
  });
});
