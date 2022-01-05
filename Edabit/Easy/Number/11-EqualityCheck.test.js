import { checkEquality } from "./11-EqualityCheck";

describe(" The equality of two different values given the parameters a and b.", () => {
  it("should return true when a and b the type and value are equal", () => {
    expect(checkEquality(1, 1)).toBe(true);
    expect(checkEquality("nam", "nam")).toBe(true);
    expect(checkEquality(true, true)).toBe(true);
    expect(checkEquality(null, null)).toBe(true);
    expect(checkEquality(undefined, undefined)).toBe(true);
  });

  it("should return false when a and b the type and value are not equal", () => {
    expect(checkEquality(1, "1")).toBe(false);
    expect(checkEquality(1, true)).toBe(false);
    expect(checkEquality(1, "1")).toBe(false);
    expect(checkEquality(null, undefined)).toBe(false);
    expect(checkEquality(null, "1")).toBe(false);
    expect(checkEquality(null, [1, 2, 3])).toBe(false);
    expect(checkEquality([1, 2, 3], "1,2,3")).toBe(false);
  });
});
