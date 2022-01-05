import { maxNumV1, maxNumV2, maxNumV3 } from "./18-BuggyCodePart2";
describe("maxNumV1()", () => {
  it("should return false when a and b is not a number", () => {
    expect(maxNumV1("1", "2")).toBe(false);
    expect(maxNumV1("1", [])).toBe(false);
    expect(maxNumV1("1", {})).toBe(false);
    expect(maxNumV1("1", null)).toBe(false);
    expect(maxNumV1("1", undefined)).toBe(false);
    expect(maxNumV1([], [])).toBe(false);
    expect(maxNumV1([], "2")).toBe(false);
    expect(maxNumV1([], null)).toBe(false);
    expect(maxNumV1([], {})).toBe(false);
    expect(maxNumV1([], undefined)).toBe(false);
    expect(maxNumV1({}, {})).toBe(false);
    expect(maxNumV1({}, "1")).toBe(false);
    expect(maxNumV1({}, [])).toBe(false);
    expect(maxNumV1({}, null)).toBe(false);
    expect(maxNumV1({}, null)).toBe(false);
    expect(maxNumV1(null, null)).toBe(false);
    expect(maxNumV1(null, "1")).toBe(false);
    expect(maxNumV1(null, {})).toBe(false);
    expect(maxNumV1(null, [])).toBe(false);
    expect(maxNumV1(null, undefined)).toBe(false);
    expect(maxNumV1(undefined, undefined)).toBe(false);
    expect(maxNumV1(undefined, "1")).toBe(false);
    expect(maxNumV1(undefined, {})).toBe(false);
    expect(maxNumV1(undefined, [])).toBe(false);
    expect(maxNumV1(undefined, null)).toBe(false);
  });

  it("should return max when a and b is correct", () => {
    expect(maxNumV1(1, 1000)).toBe(1000);
    expect(maxNumV1(11, 10)).toBe(11);
    expect(maxNumV1(1, 12)).toBe(12);
    expect(maxNumV1(-21, 0)).toBe(0);
  });
});

describe("maxNumV2()", () => {
  it("should return false when a and b is not a number", () => {
    expect(maxNumV2("1", "2")).toBe(false);
    expect(maxNumV2("1", [])).toBe(false);
    expect(maxNumV2("1", {})).toBe(false);
    expect(maxNumV2("1", null)).toBe(false);
    expect(maxNumV2("1", undefined)).toBe(false);
    expect(maxNumV2([], [])).toBe(false);
    expect(maxNumV2([], "2")).toBe(false);
    expect(maxNumV2([], null)).toBe(false);
    expect(maxNumV2([], {})).toBe(false);
    expect(maxNumV2([], undefined)).toBe(false);
    expect(maxNumV2({}, {})).toBe(false);
    expect(maxNumV2({}, "1")).toBe(false);
    expect(maxNumV2({}, [])).toBe(false);
    expect(maxNumV2({}, null)).toBe(false);
    expect(maxNumV2({}, null)).toBe(false);
    expect(maxNumV2(null, null)).toBe(false);
    expect(maxNumV2(null, "1")).toBe(false);
    expect(maxNumV2(null, {})).toBe(false);
    expect(maxNumV2(null, [])).toBe(false);
    expect(maxNumV2(null, undefined)).toBe(false);
    expect(maxNumV2(undefined, undefined)).toBe(false);
    expect(maxNumV2(undefined, "1")).toBe(false);
    expect(maxNumV2(undefined, {})).toBe(false);
    expect(maxNumV2(undefined, [])).toBe(false);
    expect(maxNumV2(undefined, null)).toBe(false);
  });

  it("should return max when a and b is correct", () => {
    expect(maxNumV2(1, 1000)).toBe(1000);
    expect(maxNumV2(11, 10)).toBe(11);
    expect(maxNumV2(1, 12)).toBe(12);
    expect(maxNumV2(-21, 0)).toBe(0);
  });
});

describe("maxNumV3()", () => {
  it("should return false when a and b is not a number", () => {
    expect(maxNumV3("1", "2")).toBe(false);
    expect(maxNumV3("1", [])).toBe(false);
    expect(maxNumV3("1", {})).toBe(false);
    expect(maxNumV3("1", null)).toBe(false);
    expect(maxNumV3("1", undefined)).toBe(false);
    expect(maxNumV3([], [])).toBe(false);
    expect(maxNumV3([], "2")).toBe(false);
    expect(maxNumV3([], null)).toBe(false);
    expect(maxNumV3([], {})).toBe(false);
    expect(maxNumV3([], undefined)).toBe(false);
    expect(maxNumV3({}, {})).toBe(false);
    expect(maxNumV3({}, "1")).toBe(false);
    expect(maxNumV3({}, [])).toBe(false);
    expect(maxNumV3({}, null)).toBe(false);
    expect(maxNumV3({}, null)).toBe(false);
    expect(maxNumV3(null, null)).toBe(false);
    expect(maxNumV3(null, "1")).toBe(false);
    expect(maxNumV3(null, {})).toBe(false);
    expect(maxNumV3(null, [])).toBe(false);
    expect(maxNumV3(null, undefined)).toBe(false);
    expect(maxNumV3(undefined, undefined)).toBe(false);
    expect(maxNumV3(undefined, "1")).toBe(false);
    expect(maxNumV3(undefined, {})).toBe(false);
    expect(maxNumV3(undefined, [])).toBe(false);
    expect(maxNumV3(undefined, null)).toBe(false);
  });

  it("should return max when a and b is correct", () => {
    expect(maxNumV3(1, 1000)).toBe(1000);
    expect(maxNumV3(11, 10)).toBe(11);
    expect(maxNumV3(1, 12)).toBe(12);
    expect(maxNumV3(-21, 0)).toBe(0);
  });
});
