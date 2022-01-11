import { makePair } from "./19-PairManagement";
describe("makePair()", () => {
  it("should return false when a and b is not a number", () => {
    expect(makePair("1", "2")).toBe(false);
    expect(makePair("1", [])).toBe(false);
    expect(makePair("1", {})).toBe(false);
    expect(makePair("1", null)).toBe(false);
    expect(makePair("1", undefined)).toBe(false);
    expect(makePair([], [])).toBe(false);
    expect(makePair([], "2")).toBe(false);
    expect(makePair([], null)).toBe(false);
    expect(makePair([], {})).toBe(false);
    expect(makePair([], undefined)).toBe(false);
    expect(makePair({}, {})).toBe(false);
    expect(makePair({}, "1")).toBe(false);
    expect(makePair({}, [])).toBe(false);
    expect(makePair({}, null)).toBe(false);
    expect(makePair({}, null)).toBe(false);
    expect(makePair(null, null)).toBe(false);
    expect(makePair(null, "1")).toBe(false);
    expect(makePair(null, {})).toBe(false);
    expect(makePair(null, [])).toBe(false);
    expect(makePair(null, undefined)).toBe(false);
    expect(makePair(undefined, undefined)).toBe(false);
    expect(makePair(undefined, "1")).toBe(false);
    expect(makePair(undefined, {})).toBe(false);
    expect(makePair(undefined, [])).toBe(false);
    expect(makePair(undefined, null)).toBe(false);
  });

  it("should return array when a and b is correct", () => {
    expect(makePair(1, 1000)).toStrictEqual([1, 1000]);
    expect(makePair(11, 10)).toStrictEqual([11, 10]);
    expect(makePair(1, 12)).toStrictEqual([1, 12]);
    expect(makePair(-21, 0)).toStrictEqual([-21, 0]);
  });
});
