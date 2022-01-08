import {
  parseArrayV1,
  parseArrayV2,
  parseArrayV3,
  parseArrayV4,
} from "./07-ConvertArrayItemToString";

describe("parseArrayV1()", () => {
  it("should return Invalid input when arr is not Object", () => {
    [1, "1", undefined].forEach((item) => {
      expect(parseArrayV1(item)).toBe("Invalid input");
    });
  });

  it("should return empty array when array is empty", () => {
    expect(parseArrayV1([])).toStrictEqual([]);
  });

  it("Convert integers to strings and return the new array", () => {
    expect(parseArrayV1([1, 2, "a", "b"])).toStrictEqual(["1", "2", "a", "b"]);
    expect(parseArrayV1(["abc", 123, "def", 456])).toStrictEqual([
      "abc",
      "123",
      "def",
      "456",
    ]);
    expect(parseArrayV1([1, 2, 3, 17, 24, 3, "a", "123b"])).toStrictEqual([
      "1",
      "2",
      "3",
      "17",
      "24",
      "3",
      "a",
      "123b",
    ]);
  });
});

describe("parseArrayV2()", () => {
  it("should return Invalid input when arr is not Object", () => {
    [1, "1", undefined].forEach((item) => {
      expect(parseArrayV2(item)).toBe("Invalid input");
    });
  });

  it("should return empty array when array is empty", () => {
    expect(parseArrayV2([])).toStrictEqual([]);
  });

  it("Convert integers to strings and return the new array", () => {
    expect(parseArrayV2([1, 2, "a", "b"])).toStrictEqual(["1", "2", "a", "b"]);
    expect(parseArrayV2(["abc", 123, "def", 456])).toStrictEqual([
      "abc",
      "123",
      "def",
      "456",
    ]);
    expect(parseArrayV2([1, 2, 3, 17, 24, 3, "a", "123b"])).toStrictEqual([
      "1",
      "2",
      "3",
      "17",
      "24",
      "3",
      "a",
      "123b",
    ]);
  });
});

describe("parseArrayV3()", () => {
  it("should return Invalid input when arr is not Object", () => {
    [1, "1", undefined].forEach((item) => {
      expect(parseArrayV3(item)).toBe("Invalid input");
    });
  });

  it("should return empty array when array is empty", () => {
    expect(parseArrayV3([])).toStrictEqual([]);
  });

  it("Convert integers to strings and return the new array", () => {
    expect(parseArrayV3([1, 2, "a", "b"])).toStrictEqual(["1", "2", "a", "b"]);
    expect(parseArrayV3(["abc", 123, "def", 456])).toStrictEqual([
      "abc",
      "123",
      "def",
      "456",
    ]);
    expect(parseArrayV3([1, 2, 3, 17, 24, 3, "a", "123b"])).toStrictEqual([
      "1",
      "2",
      "3",
      "17",
      "24",
      "3",
      "a",
      "123b",
    ]);
  });
});

describe("parseArrayV4()", () => {
  it("should return Invalid input when arr is not Object", () => {
    [1, "1", undefined].forEach((item) => {
      expect(parseArrayV4(item)).toBe("Invalid input");
    });
  });

  it("should return empty array when array is empty", () => {
    expect(parseArrayV4([])).toStrictEqual([]);
  });

  it("Convert integers to strings and return the new array", () => {
    expect(parseArrayV4([1, 2, "a", "b"])).toStrictEqual(["1", "2", "a", "b"]);
    expect(parseArrayV4(["abc", 123, "def", 456])).toStrictEqual([
      "abc",
      "123",
      "def",
      "456",
    ]);
    expect(parseArrayV4([1, 2, 3, 17, 24, 3, "a", "123b"])).toStrictEqual([
      "1",
      "2",
      "3",
      "17",
      "24",
      "3",
      "a",
      "123b",
    ]);
  });
});
