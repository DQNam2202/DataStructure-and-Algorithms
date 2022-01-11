import {
  arrayToStringV1,
  arrayToStringV2,
  arrayToStringV3,
  arrayToStringV4,
} from "./08-ConvertArrToString";

describe("arrayToStringV1()", () => {
  it("should return Invalid input when arr is not a Object", () => {
    [1, "1", undefined].forEach((item) => {
      expect(arrayToStringV1(item)).toBe("Invalid input");
    });
  });

  it("should return [] when arr is empty", () => {
    expect(arrayToStringV1([])).toStrictEqual([]);
  });

  it("should return a string after convert array", () => {
    expect(arrayToStringV1([1, 2, 3, 4, 5, 6])).toBe("123456");
    expect(arrayToStringV1(["a", "b", "c", "d", "e", "f"])).toBe("abcdef");
    expect(arrayToStringV1([1, 2, 3, "a", "s", "dAAAA"])).toBe("123asdAAAA");
  });
});
describe("arrayToStringV2()", () => {
  it("should return Invalid input when arr is not a Object", () => {
    [1, "1", undefined].forEach((item) => {
      expect(arrayToStringV2(item)).toBe("Invalid input");
    });
  });

  it("should return [] when arr is empty", () => {
    expect(arrayToStringV2([])).toStrictEqual([]);
  });

  it("should return a string after convert array", () => {
    expect(arrayToStringV2([1, 2, 3, 4, 5, 6])).toBe("123456");
    expect(arrayToStringV2(["a", "b", "c", "d", "e", "f"])).toBe("abcdef");
    expect(arrayToStringV2([1, 2, 3, "a", "s", "dAAAA"])).toBe("123asdAAAA");
  });
});

describe("arrayToStringV3()", () => {
  it("should return Invalid input when arr is not a Object", () => {
    [1, "1", undefined].forEach((item) => {
      expect(arrayToStringV3(item)).toBe("Invalid input");
    });
  });

  it("should return [] when arr is empty", () => {
    expect(arrayToStringV3([])).toStrictEqual([]);
  });

  it("should return a string after convert array", () => {
    expect(arrayToStringV3([1, 2, 3, 4, 5, 6])).toBe("123456");
    expect(arrayToStringV3(["a", "b", "c", "d", "e", "f"])).toBe("abcdef");
    expect(arrayToStringV3([1, 2, 3, "a", "s", "dAAAA"])).toBe("123asdAAAA");
  });
});

describe("arrayToStringV4()", () => {
  it("should return Invalid input when arr is not a Object", () => {
    [1, "1", undefined].forEach((item) => {
      expect(arrayToStringV4(item)).toBe("Invalid input");
    });
  });

  it("should return [] when arr is empty", () => {
    expect(arrayToStringV4([])).toStrictEqual([]);
  });

  it("should return a string after convert array", () => {
    expect(arrayToStringV4([1, 2, 3, 4, 5, 6])).toBe("123456");
    expect(arrayToStringV4(["a", "b", "c", "d", "e", "f"])).toBe("abcdef");
    expect(arrayToStringV4([1, 2, 3, "a", "s", "dAAAA"])).toBe("123asdAAAA");
  });
});
