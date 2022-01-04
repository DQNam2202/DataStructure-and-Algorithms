import { points } from "./07-BasketballPoints";

describe("Find the final points for the team", () => {
  it("should return false when twoScore and threeScore is not a number", () => {
    expect(points(2, "2")).toBe(false);
    expect(points("1", 1)).toBe(false);
    expect(points("1", "2")).toBe(false);
    expect(points("1", [])).toBe(false);
    expect(points("1", {})).toBe(false);
    expect(points("1", null)).toBe(false);
    expect(points("1", undefined)).toBe(false);
    expect(points([], [])).toBe(false);
    expect(points([], "2")).toBe(false);
    expect(points([], null)).toBe(false);
    expect(points([], {})).toBe(false);
    expect(points([], undefined)).toBe(false);
    expect(points({}, {})).toBe(false);
    expect(points({}, "1")).toBe(false);
    expect(points({}, [])).toBe(false);
    expect(points({}, null)).toBe(false);
    expect(points({}, null)).toBe(false);
    expect(points(null, null)).toBe(false);
    expect(points(null, "1")).toBe(false);
    expect(points(null, {})).toBe(false);
    expect(points(null, [])).toBe(false);
    expect(points(null, undefined)).toBe(false);
    expect(points(undefined, undefined)).toBe(false);
    expect(points(undefined, "1")).toBe(false);
    expect(points(undefined, {})).toBe(false);
    expect(points(undefined, [])).toBe(false);
    expect(points(undefined, null)).toBe(false);
  });

  it("should return final points for the team", () => {
    expect(points(1, 1)).toBe(5);
    expect(points(7, 5)).toBe(29);
    expect(points(38, 8)).toBe(100);
  });
});
