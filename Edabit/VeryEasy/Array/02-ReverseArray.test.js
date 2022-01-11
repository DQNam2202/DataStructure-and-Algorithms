import { reverseV1, reverseV2 } from "./02-ReverseArray";

describe("reverseV1()", () => {
  it("should return Invalid Input when arr is not a object", () => {
    [1, "1", undefined].forEach((item) => {
      expect(reverseV1(item)).toBe("Invalid input");
    });
  });

  it("should return empty array when arr is empty", () => {
    expect(reverseV1([])).toStrictEqual([]);
  });

  it("should return reverse array", () => {
    expect(reverseV1([1, 2, 3, 4])).toStrictEqual([4, 3, 2, 1]);
    expect(reverseV1([9, 9, 2, 3, 4])).toStrictEqual([4, 3, 2, 9, 9]);
    expect(reverseV1([9, 9, 2, 3, 4, 8, 9])).toStrictEqual([
      9, 8, 4, 3, 2, 9, 9,
    ]);
  });
});

describe("reverseV2()", () => {
  it("should return Invalid Input when arr is not a object", () => {
    [1, "1", undefined].forEach((item) => {
      expect(reverseV2(item)).toBe("Invalid input");
    });
  });

  it("should return empty array when arr is empty", () => {
    expect(reverseV2([])).toStrictEqual([]);
  });

  it("should return reverse array", () => {
    expect(reverseV2([1, 2, 3, 4])).toStrictEqual([4, 3, 2, 1]);
    expect(reverseV2([9, 9, 2, 3, 4])).toStrictEqual([4, 3, 2, 9, 9]);
    expect(reverseV2([9, 9, 2, 3, 4, 8, 9])).toStrictEqual([
      9, 8, 4, 3, 2, 9, 9,
    ]);
  });
});
