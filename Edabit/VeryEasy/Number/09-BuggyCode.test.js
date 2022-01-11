import { swapV1, swapV2 } from "./09-BuggyCode";

describe("swapVersion01()", () => {
  it("should return false when a and b is not a number", () => {
    expect(swapV1(2, "2")).toBe(false);
    expect(swapV1("1", 1)).toBe(false);
    expect(swapV1("1", "2")).toBe(false);
    expect(swapV1("1", [])).toBe(false);
    expect(swapV1("1", {})).toBe(false);
    expect(swapV1("1", null)).toBe(false);
    expect(swapV1("1", undefined)).toBe(false);
    expect(swapV1([], [])).toBe(false);
    expect(swapV1([], "2")).toBe(false);
    expect(swapV1([], null)).toBe(false);
    expect(swapV1([], {})).toBe(false);
    expect(swapV1([], undefined)).toBe(false);
    expect(swapV1({}, {})).toBe(false);
    expect(swapV1({}, "1")).toBe(false);
    expect(swapV1({}, [])).toBe(false);
    expect(swapV1({}, null)).toBe(false);
    expect(swapV1({}, null)).toBe(false);
    expect(swapV1(null, null)).toBe(false);
    expect(swapV1(null, "1")).toBe(false);
    expect(swapV1(null, {})).toBe(false);
    expect(swapV1(null, [])).toBe(false);
    expect(swapV1(null, undefined)).toBe(false);
    expect(swapV1(undefined, undefined)).toBe(false);
    expect(swapV1(undefined, "1")).toBe(false);
    expect(swapV1(undefined, {})).toBe(false);
    expect(swapV1(undefined, [])).toBe(false);
    expect(swapV1(undefined, null)).toBe(false);
  });

  it("should return array after wrap a number and b number", () => {
    expect(swapV1(100, 200)).toStrictEqual([200, 100]);
    expect(swapV1(300, 200)).toStrictEqual([200, 300]);
    expect(swapV1(200, 500)).toStrictEqual([500, 200]);
  });
});

describe("swapVersion02()", () => {
  it("should return false when a and b is not a number", () => {
    expect(swapV2(2, "2")).toBe(false);
    expect(swapV2("1", 1)).toBe(false);
    expect(swapV2("1", "2")).toBe(false);
    expect(swapV2("1", [])).toBe(false);
    expect(swapV2("1", {})).toBe(false);
    expect(swapV2("1", null)).toBe(false);
    expect(swapV2("1", undefined)).toBe(false);
    expect(swapV2([], [])).toBe(false);
    expect(swapV2([], "2")).toBe(false);
    expect(swapV2([], null)).toBe(false);
    expect(swapV2([], {})).toBe(false);
    expect(swapV2([], undefined)).toBe(false);
    expect(swapV2({}, {})).toBe(false);
    expect(swapV2({}, "1")).toBe(false);
    expect(swapV2({}, [])).toBe(false);
    expect(swapV2({}, null)).toBe(false);
    expect(swapV2({}, null)).toBe(false);
    expect(swapV2(null, null)).toBe(false);
    expect(swapV2(null, "1")).toBe(false);
    expect(swapV2(null, {})).toBe(false);
    expect(swapV2(null, [])).toBe(false);
    expect(swapV2(null, undefined)).toBe(false);
    expect(swapV2(undefined, undefined)).toBe(false);
    expect(swapV2(undefined, "1")).toBe(false);
    expect(swapV2(undefined, {})).toBe(false);
    expect(swapV2(undefined, [])).toBe(false);
    expect(swapV2(undefined, null)).toBe(false);
  });

  it("should return array after wrap a number and b number", () => {
    expect(swapV2(100, 200)).toStrictEqual([200, 100]);
    expect(swapV2(300, 200)).toStrictEqual([200, 300]);
    expect(swapV2(200, 500)).toStrictEqual([500, 200]);
  });
});
