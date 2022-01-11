import { dropV1, dropV2, dropV3 } from "./04-DropEleAnArray";

describe("dropV1()", () => {
  it("should return Invalid input when arr is not a array", () => {
    expect(dropV1("1", "2")).toBe("Invalid input");
    expect(dropV1("1", [])).toBe("Invalid input");
    expect(dropV1("1", {})).toBe("Invalid input");
    expect(dropV1("1", null)).toBe("Invalid input");
    expect(dropV1("1", undefined)).toBe("Invalid input");
    expect(dropV1(1, [])).toBe("Invalid input");
    expect(dropV1(1, "2")).toBe("Invalid input");
    expect(dropV1(1, null)).toBe("Invalid input");
    expect(dropV1(1, {})).toBe("Invalid input");
    expect(dropV1(1, undefined)).toBe("Invalid input");
    expect(dropV1(undefined, undefined)).toBe("Invalid input");
    expect(dropV1(undefined, "1")).toBe("Invalid input");
    expect(dropV1(undefined, {})).toBe("Invalid input");
    expect(dropV1(undefined, [])).toBe("Invalid input");
    expect(dropV1(undefined, null)).toBe("Invalid input");
    expect(dropV1([1, 2, 3, 4], "1")).toBe("Invalid input");
    expect(dropV1([1, 2, 3, 4], {})).toBe("Invalid input");
    expect(dropV1([1, 2, 3, 4], [])).toBe("Invalid input");
    expect(dropV1([1, 2, 3, 4], null)).toBe("Invalid input");
  });

  it("should return empty array when arr is empty", () => {
    expect(dropV1([])).toStrictEqual([]);
    expect(dropV1([], 2)).toStrictEqual([]);
  });

  it("should return empty array when val greater than arr length", () => {
    expect(dropV1([1, 2, 3, 4], 5)).toStrictEqual([]);
    expect(dropV1([1, 2, 3], 6)).toStrictEqual([]);
  });

  it("should return array when val = 0 ", () => {
    expect(dropV1([1, 2, 3], 0)).toStrictEqual([1, 2, 3]);
  });

  it("should return new array when delete item", () => {
    expect(dropV1([1, 2, 3], 1)).toStrictEqual([2, 3]);
    expect(dropV1([1, 2, 3], 2)).toStrictEqual([3]);
    expect(dropV1([1, 2, 3, 4, 5, 6], 2)).toStrictEqual([3, 4, 5, 6]);
  });
});

describe("dropV2()", () => {
  it("should return Invalid input when arr is not a array", () => {
    expect(dropV2("1", "2")).toBe("Invalid input");
    expect(dropV2("1", [])).toBe("Invalid input");
    expect(dropV2("1", {})).toBe("Invalid input");
    expect(dropV2("1", null)).toBe("Invalid input");
    expect(dropV2("1", undefined)).toBe("Invalid input");
    expect(dropV2(1, [])).toBe("Invalid input");
    expect(dropV2(1, "2")).toBe("Invalid input");
    expect(dropV2(1, null)).toBe("Invalid input");
    expect(dropV2(1, {})).toBe("Invalid input");
    expect(dropV2(1, undefined)).toBe("Invalid input");
    expect(dropV2(undefined, undefined)).toBe("Invalid input");
    expect(dropV2(undefined, "1")).toBe("Invalid input");
    expect(dropV2(undefined, {})).toBe("Invalid input");
    expect(dropV2(undefined, [])).toBe("Invalid input");
    expect(dropV2(undefined, null)).toBe("Invalid input");
    expect(dropV2([1, 2, 3, 4], "1")).toBe("Invalid input");
    expect(dropV2([1, 2, 3, 4], {})).toBe("Invalid input");
    expect(dropV2([1, 2, 3, 4], [])).toBe("Invalid input");
    expect(dropV2([1, 2, 3, 4], null)).toBe("Invalid input");
  });

  it("should return empty array when arr is empty", () => {
    expect(dropV2([])).toStrictEqual([]);
    expect(dropV2([], 2)).toStrictEqual([]);
  });

  it("should return empty array when val greater than arr length", () => {
    expect(dropV2([1, 2, 3, 4], 5)).toStrictEqual([]);
    expect(dropV2([1, 2, 3], 6)).toStrictEqual([]);
  });

  it("should return array when val = 0 ", () => {
    expect(dropV2([1, 2, 3], 0)).toStrictEqual([1, 2, 3]);
  });

  it("should return new array when delete item", () => {
    expect(dropV2([1, 2, 3], 1)).toStrictEqual([2, 3]);
    expect(dropV2([1, 2, 3], 2)).toStrictEqual([3]);
    expect(dropV2([1, 2, 3, 4, 5, 6], 2)).toStrictEqual([3, 4, 5, 6]);
  });
});

describe("dropV3()", () => {
  it("should return Invalid input when arr is not a array", () => {
    expect(dropV3("1", "2")).toBe("Invalid input");
    expect(dropV3("1", [])).toBe("Invalid input");
    expect(dropV3("1", {})).toBe("Invalid input");
    expect(dropV3("1", null)).toBe("Invalid input");
    expect(dropV3("1", undefined)).toBe("Invalid input");
    expect(dropV3(1, [])).toBe("Invalid input");
    expect(dropV3(1, "2")).toBe("Invalid input");
    expect(dropV3(1, null)).toBe("Invalid input");
    expect(dropV3(1, {})).toBe("Invalid input");
    expect(dropV3(1, undefined)).toBe("Invalid input");
    expect(dropV3(undefined, undefined)).toBe("Invalid input");
    expect(dropV3(undefined, "1")).toBe("Invalid input");
    expect(dropV3(undefined, {})).toBe("Invalid input");
    expect(dropV3(undefined, [])).toBe("Invalid input");
    expect(dropV3(undefined, null)).toBe("Invalid input");
    expect(dropV3([1, 2, 3, 4], "1")).toBe("Invalid input");
    expect(dropV3([1, 2, 3, 4], {})).toBe("Invalid input");
    expect(dropV3([1, 2, 3, 4], [])).toBe("Invalid input");
    expect(dropV3([1, 2, 3, 4], null)).toBe("Invalid input");
  });

  it("should return empty array when arr is empty", () => {
    expect(dropV3([])).toStrictEqual([]);
    expect(dropV3([], 2)).toStrictEqual([]);
  });

  it("should return empty array when val greater than arr length", () => {
    expect(dropV3([1, 2, 3, 4], 5)).toStrictEqual([]);
    expect(dropV3([1, 2, 3], 6)).toStrictEqual([]);
  });

  it("should return array when val = 0 ", () => {
    expect(dropV3([1, 2, 3], 0)).toStrictEqual([1, 2, 3]);
  });

  it("should return new array when delete item", () => {
    expect(dropV3([1, 2, 3], 1)).toStrictEqual([2, 3]);
    expect(dropV3([1, 2, 3], 2)).toStrictEqual([3]);
    expect(dropV3([1, 2, 3, 4, 5, 6], 2)).toStrictEqual([3, 4, 5, 6]);
  });
});
