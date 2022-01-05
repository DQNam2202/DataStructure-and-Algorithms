import { makesTen } from "./16-TwoMakesTen";

describe("Takes two arguments", () => {
  it("should return false when a and b is not a number", () => {
    expect(makesTen("1", "2")).toBe(false);
    expect(makesTen("1", [])).toBe(false);
    expect(makesTen("1", {})).toBe(false);
    expect(makesTen("1", null)).toBe(false);
    expect(makesTen("1", undefined)).toBe(false);
    expect(makesTen([], [])).toBe(false);
    expect(makesTen([], "2")).toBe(false);
    expect(makesTen([], null)).toBe(false);
    expect(makesTen([], {})).toBe(false);
    expect(makesTen([], undefined)).toBe(false);
    expect(makesTen({}, {})).toBe(false);
    expect(makesTen({}, "1")).toBe(false);
    expect(makesTen({}, [])).toBe(false);
    expect(makesTen({}, null)).toBe(false);
    expect(makesTen({}, null)).toBe(false);
    expect(makesTen(null, null)).toBe(false);
    expect(makesTen(null, "1")).toBe(false);
    expect(makesTen(null, {})).toBe(false);
    expect(makesTen(null, [])).toBe(false);
    expect(makesTen(null, undefined)).toBe(false);
    expect(makesTen(undefined, undefined)).toBe(false);
    expect(makesTen(undefined, "1")).toBe(false);
    expect(makesTen(undefined, {})).toBe(false);
    expect(makesTen(undefined, [])).toBe(false);
    expect(makesTen(undefined, null)).toBe(false);
  });
  it("should return true if one of them is 10 or if their sum is 10 ", () => {
    expect(makesTen(9, 10)).toBe(true);
    expect(makesTen(2, 10)).toBe(true);
    expect(makesTen(1, 9)).toBe(true);
    expect(makesTen(8, 2)).toBe(true);
  });

  it("should return false if one of them is not 10 or if their sum is 10 ", () => {
    expect(makesTen(9, 9)).toBe(false);
    expect(makesTen(1, 8)).toBe(false);
    expect(makesTen(3, 6)).toBe(false);
  });
});
