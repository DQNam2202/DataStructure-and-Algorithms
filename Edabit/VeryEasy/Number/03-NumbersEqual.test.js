import { isSameNumb } from "./03-NumbersEqual";

describe("Are The Number Equal", () => {
  it("should return Invalid number when numb1 and numb2 is not a number", () => {
    expect(isSameNumb(2, "2")).toBe(false);
    expect(isSameNumb("1", 1)).toBe(false);
    expect(isSameNumb("1", "2")).toBe(false);
    expect(isSameNumb("1", [])).toBe(false);
    expect(isSameNumb("1", {})).toBe(false);
    expect(isSameNumb("1", null)).toBe(false);
    expect(isSameNumb("1", undefined)).toBe(false);
    expect(isSameNumb([], [])).toBe(false);
    expect(isSameNumb([], "2")).toBe(false);
    expect(isSameNumb([], null)).toBe(false);
    expect(isSameNumb([], {})).toBe(false);
    expect(isSameNumb([], undefined)).toBe(false);
    expect(isSameNumb({}, {})).toBe(false);
    expect(isSameNumb({}, "1")).toBe(false);
    expect(isSameNumb({}, [])).toBe(false);
    expect(isSameNumb({}, null)).toBe(false);
    expect(isSameNumb({}, null)).toBe(false);
    expect(isSameNumb(null, null)).toBe(false);
    expect(isSameNumb(null, "1")).toBe(false);
    expect(isSameNumb(null, {})).toBe(false);
    expect(isSameNumb(null, [])).toBe(false);
    expect(isSameNumb(null, undefined)).toBe(false);
    expect(isSameNumb(undefined, undefined)).toBe(false);
    expect(isSameNumb(undefined, "1")).toBe(false);
    expect(isSameNumb(undefined, {})).toBe(false);
    expect(isSameNumb(undefined, [])).toBe(false);
    expect(isSameNumb(undefined, null)).toBe(false);
  });
  it("should return false when numb1 different numb2 or numb2 different numb1", () => {
    expect(isSameNumb(1, 8)).toBe(false);
    expect(isSameNumb(8, 2)).toBe(false);
  });

  it("should return true when numb1 is equal numb2", () => {
    expect(isSameNumb(2, 2)).toBe(true);
    expect(isSameNumb(4, 4)).toBe(true);
    expect(isSameNumb(22, 22)).toBe(true);
  });
});
