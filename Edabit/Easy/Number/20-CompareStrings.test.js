import { comp } from "./20-CompareStrings";
describe("comp()", () => {
  it("should return false when a and b is not a string", () => {
    expect(comp(1, 2)).toBe(false);
    expect(comp(1, [])).toBe(false);
    expect(comp(1, {})).toBe(false);
    expect(comp(1, null)).toBe(false);
    expect(comp(1, undefined)).toBe(false);
    expect(comp([], [])).toBe(false);
    expect(comp([], 2)).toBe(false);
    expect(comp([], null)).toBe(false);
    expect(comp([], {})).toBe(false);
    expect(comp([], undefined)).toBe(false);
    expect(comp({}, {})).toBe(false);
    expect(comp({}, 1)).toBe(false);
    expect(comp({}, [])).toBe(false);
    expect(comp({}, null)).toBe(false);
    expect(comp({}, null)).toBe(false);
    expect(comp(null, null)).toBe(false);
    expect(comp(null, 1)).toBe(false);
    expect(comp(null, {})).toBe(false);
    expect(comp(null, [])).toBe(false);
    expect(comp(null, undefined)).toBe(false);
    expect(comp(undefined, undefined)).toBe(false);
    expect(comp(undefined, 1)).toBe(false);
    expect(comp(undefined, {})).toBe(false);
    expect(comp(undefined, [])).toBe(false);
    expect(comp(undefined, null)).toBe(false);
  });

  it("should return true when str1 length equal str2 length", () => {
    expect(comp("AB", "CD")).toBe(true);
    expect(comp("hello", "words")).toBe(true);
    expect(comp("ngan", "minh")).toBe(true);
  });

  it("should return false when str1 length different str2 length", () => {
    expect(comp("hello", "edabit")).toBe(false);
    expect(comp("ABCD", "EFG")).toBe(false);
  });

  it("should return false when str1 and str2 is empty", () => {
    expect(comp("", "")).toBe(false);
  });
});
