import {
  incrementItemsV1,
  incrementItemsV2,
  incrementItemsV3,
  incrementItemsV4,
} from "./03-ArrayManipulation";

describe("incrementItemsV1()", () => {
  it("should return Invalid input when arr is not array", () => {
    [1, "1", undefined].forEach((item) => {
      expect(incrementItemsV1(item)).toBe("Invalid input");
    });
  });

  it("should return empty array when input is empty", () => {
    expect(incrementItemsV1([])).toStrictEqual([]);
  });

  it("should return new array when intended to add 1 to every element in the array!", () => {
    expect(incrementItemsV1([0, 1, 2, 3])).toStrictEqual([1, 2, 3, 4]);
    expect(incrementItemsV1([2, 4, 6, 8])).toStrictEqual([3, 5, 7, 9]);
    expect(incrementItemsV1([-1, -2, -3, -4])).toStrictEqual([0, -1, -2, -3]);
  });
});

describe("incrementItemsV2()", () => {
  it("should return Invalid input when arr is not array", () => {
    [1, "1", undefined].forEach((item) => {
      expect(incrementItemsV2(item)).toBe("Invalid input");
    });
  });

  it("should return empty array when input is empty", () => {
    expect(incrementItemsV2([])).toStrictEqual([]);
  });

  it("should return new array when intended to add 1 to every element in the array!", () => {
    expect(incrementItemsV2([0, 1, 2, 3])).toStrictEqual([1, 2, 3, 4]);
    expect(incrementItemsV2([2, 4, 6, 8])).toStrictEqual([3, 5, 7, 9]);
    expect(incrementItemsV2([-1, -2, -3, -4])).toStrictEqual([0, -1, -2, -3]);
  });
});

describe("incrementItemsV3()", () => {
  it("should return Invalid input when arr is not array", () => {
    [1, "1", undefined].forEach((item) => {
      expect(incrementItemsV3(item)).toBe("Invalid input");
    });
  });

  it("should return empty array when input is empty", () => {
    expect(incrementItemsV3([])).toStrictEqual([]);
  });

  it("should return new array when intended to add 1 to every element in the array!", () => {
    expect(incrementItemsV3([0, 1, 2, 3])).toStrictEqual([1, 2, 3, 4]);
    expect(incrementItemsV3([2, 4, 6, 8])).toStrictEqual([3, 5, 7, 9]);
    expect(incrementItemsV3([-1, -2, -3, -4])).toStrictEqual([0, -1, -2, -3]);
  });
});

describe("incrementItemsV4()", () => {
  it("should return Invalid input when arr is not array", () => {
    [1, "1", undefined].forEach((item) => {
      expect(incrementItemsV4(item)).toBe("Invalid input");
    });
  });

  it("should return empty array when input is empty", () => {
    expect(incrementItemsV4([])).toStrictEqual([]);
  });

  it("should return new array when intended to add 1 to every element in the array!", () => {
    expect(incrementItemsV4([0, 1, 2, 3])).toStrictEqual([1, 2, 3, 4]);
    expect(incrementItemsV4([2, 4, 6, 8])).toStrictEqual([3, 5, 7, 9]);
    expect(incrementItemsV4([-1, -2, -3, -4])).toStrictEqual([0, -1, -2, -3]);
  });
});
