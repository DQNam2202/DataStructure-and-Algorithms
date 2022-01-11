import { lessThan100 } from "./04-lessThan100";

describe("Less Than 100", () => {
  it("should return false when a and b is not a number", () => {
    expect(lessThan100(2, "2")).toBe(false);
    expect(lessThan100("1", 1)).toBe(false);
    expect(lessThan100("1", "2")).toBe(false);
    expect(lessThan100("1", [])).toBe(false);
    expect(lessThan100("1", {})).toBe(false);
    expect(lessThan100("1", null)).toBe(false);
    expect(lessThan100("1", undefined)).toBe(false);
    expect(lessThan100([], [])).toBe(false);
    expect(lessThan100([], "2")).toBe(false);
    expect(lessThan100([], null)).toBe(false);
    expect(lessThan100([], {})).toBe(false);
    expect(lessThan100([], undefined)).toBe(false);
    expect(lessThan100({}, {})).toBe(false);
    expect(lessThan100({}, "1")).toBe(false);
    expect(lessThan100({}, [])).toBe(false);
    expect(lessThan100({}, null)).toBe(false);
    expect(lessThan100({}, null)).toBe(false);
    expect(lessThan100(null, null)).toBe(false);
    expect(lessThan100(null, "1")).toBe(false);
    expect(lessThan100(null, {})).toBe(false);
    expect(lessThan100(null, [])).toBe(false);
    expect(lessThan100(null, undefined)).toBe(false);
    expect(lessThan100(undefined, undefined)).toBe(false);
    expect(lessThan100(undefined, "1")).toBe(false);
    expect(lessThan100(undefined, {})).toBe(false);
    expect(lessThan100(undefined, [])).toBe(false);
    expect(lessThan100(undefined, null)).toBe(false);
  });

  it("should return false when the sum of both numbers is greater than 100", () => {
    expect(lessThan100(50, 60)).toBe(false);
    expect(lessThan100(60, 60)).toBe(false);
    expect(lessThan100(210, 100)).toBe(false);
  });

  it("should return true when the sum of both numbers is less than 100", () => {
    expect(lessThan100(50, 40)).toBe(true);
    expect(lessThan100(22, 15)).toBe(true);
    expect(lessThan100(3, 77)).toBe(true);
  });
});
