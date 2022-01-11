import { checkV1, checkV2, checkV3, checkV4 } from "./14-ArrayContainNumber";

describe("checkV1()", () => {
  it("should return Invalid input when array is not a Object and ele is not a number", () => {
    expect(checkV1(1, "2")).toBe("Invalid input");
    expect(checkV1(1, [])).toBe("Invalid input");
    expect(checkV1(1, {})).toBe("Invalid input");
    expect(checkV1(1, null)).toBe("Invalid input");
    expect(checkV1(1, undefined)).toBe("Invalid input");
    expect(checkV1("1", [])).toBe("Invalid input");
    expect(checkV1("1", "2")).toBe("Invalid input");
    expect(checkV1("1", {})).toBe("Invalid input");
    expect(checkV1("1", null)).toBe("Invalid input");
    expect(checkV1("1", undefined)).toBe("Invalid input");
    expect(checkV1(undefined, undefined)).toBe("Invalid input");
    expect(checkV1(undefined, {})).toBe("Invalid input");
    expect(checkV1(undefined, null)).toBe("Invalid input");
    expect(checkV1(undefined, "2")).toBe("Invalid input");
    expect(checkV1(undefined, [])).toBe("Invalid input");
  });

  it("should return [] if arr is empty", () => {
    expect(checkV1([], 6)).toStrictEqual([]);
  });

  it("should return true if an array contains a particular number", () => {
    expect(checkV1([1, 2, 3, 4, 5], 3)).toBe(true);
    expect(checkV1([5, 5, 5, 6], 5)).toBe(true);
  });

  it("should return false if an array is not contains a particular number", () => {
    expect(checkV1([1, 1, 2, 1, 1], 3)).toBe(false);
  });
});

describe("checkV2()", () => {
  it("should return Invalid input when array is not a Object and ele is not a number", () => {
    expect(checkV2(1, "2")).toBe("Invalid input");
    expect(checkV2(1, [])).toBe("Invalid input");
    expect(checkV2(1, {})).toBe("Invalid input");
    expect(checkV2(1, null)).toBe("Invalid input");
    expect(checkV2(1, undefined)).toBe("Invalid input");
    expect(checkV2("1", [])).toBe("Invalid input");
    expect(checkV2("1", "2")).toBe("Invalid input");
    expect(checkV2("1", {})).toBe("Invalid input");
    expect(checkV2("1", null)).toBe("Invalid input");
    expect(checkV2("1", undefined)).toBe("Invalid input");
    expect(checkV2(undefined, undefined)).toBe("Invalid input");
    expect(checkV2(undefined, {})).toBe("Invalid input");
    expect(checkV2(undefined, null)).toBe("Invalid input");
    expect(checkV2(undefined, "2")).toBe("Invalid input");
    expect(checkV2(undefined, [])).toBe("Invalid input");
  });

  it("should return [] if arr is empty", () => {
    expect(checkV2([], 6)).toStrictEqual([]);
  });

  it("should return true if an array contains a particular number", () => {
    expect(checkV2([1, 2, 3, 4, 5], 3)).toBe(true);
    expect(checkV2([5, 5, 5, 6], 5)).toBe(true);
  });

  it("should return false if an array is not contains a particular number", () => {
    expect(checkV2([1, 1, 2, 1, 1], 3)).toBe(false);
  });
});

describe("checkV3()", () => {
  it("should return Invalid input when array is not a Object and ele is not a number", () => {
    expect(checkV3(1, "2")).toBe("Invalid input");
    expect(checkV3(1, [])).toBe("Invalid input");
    expect(checkV3(1, {})).toBe("Invalid input");
    expect(checkV3(1, null)).toBe("Invalid input");
    expect(checkV3(1, undefined)).toBe("Invalid input");
    expect(checkV3("1", [])).toBe("Invalid input");
    expect(checkV3("1", "2")).toBe("Invalid input");
    expect(checkV3("1", {})).toBe("Invalid input");
    expect(checkV3("1", null)).toBe("Invalid input");
    expect(checkV3("1", undefined)).toBe("Invalid input");
    expect(checkV3(undefined, undefined)).toBe("Invalid input");
    expect(checkV3(undefined, {})).toBe("Invalid input");
    expect(checkV3(undefined, null)).toBe("Invalid input");
    expect(checkV3(undefined, "2")).toBe("Invalid input");
    expect(checkV3(undefined, [])).toBe("Invalid input");
  });

  it("should return [] if arr is empty", () => {
    expect(checkV3([], 6)).toStrictEqual([]);
  });

  it("should return true if an array contains a particular number", () => {
    expect(checkV3([1, 2, 3, 4, 5], 3)).toBe(true);
    expect(checkV3([5, 5, 5, 6], 5)).toBe(true);
  });

  it("should return false if an array is not contains a particular number", () => {
    expect(checkV3([1, 1, 2, 1, 1], 3)).toBe(false);
  });
});

describe("checkV4()", () => {
  it("should return Invalid input when array is not a Object and ele is not a number", () => {
    expect(checkV4(1, "2")).toBe("Invalid input");
    expect(checkV4(1, [])).toBe("Invalid input");
    expect(checkV4(1, {})).toBe("Invalid input");
    expect(checkV4(1, null)).toBe("Invalid input");
    expect(checkV4(1, undefined)).toBe("Invalid input");
    expect(checkV4("1", [])).toBe("Invalid input");
    expect(checkV4("1", "2")).toBe("Invalid input");
    expect(checkV4("1", {})).toBe("Invalid input");
    expect(checkV4("1", null)).toBe("Invalid input");
    expect(checkV4("1", undefined)).toBe("Invalid input");
    expect(checkV4(undefined, undefined)).toBe("Invalid input");
    expect(checkV4(undefined, {})).toBe("Invalid input");
    expect(checkV4(undefined, null)).toBe("Invalid input");
    expect(checkV4(undefined, "2")).toBe("Invalid input");
    expect(checkV4(undefined, [])).toBe("Invalid input");
  });

  it("should return [] if arr is empty", () => {
    expect(checkV4([], 6)).toStrictEqual([]);
  });

  it("should return true if an array contains a particular number", () => {
    expect(checkV4([1, 2, 3, 4, 5], 3)).toBe(true);
    expect(checkV4([5, 5, 5, 6], 5)).toBe(true);
  });

  it("should return false if an array is not contains a particular number", () => {
    expect(checkV4([1, 1, 2, 1, 1], 3)).toBe(false);
  });
});
