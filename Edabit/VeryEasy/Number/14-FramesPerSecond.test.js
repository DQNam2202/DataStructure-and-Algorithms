import { frames } from "./14-FramesPerSecond";

describe("frames()", () => {
  it("should return false when minutes and fps is not a number", () => {
    expect(frames("1", "2")).toBe(false);
    expect(frames("1", [])).toBe(false);
    expect(frames("1", {})).toBe(false);
    expect(frames("1", null)).toBe(false);
    expect(frames("1", undefined)).toBe(false);
    expect(frames([], [])).toBe(false);
    expect(frames([], "2")).toBe(false);
    expect(frames([], null)).toBe(false);
    expect(frames([], {})).toBe(false);
    expect(frames([], undefined)).toBe(false);
    expect(frames({}, {})).toBe(false);
    expect(frames({}, "1")).toBe(false);
    expect(frames({}, [])).toBe(false);
    expect(frames({}, null)).toBe(false);
    expect(frames({}, null)).toBe(false);
    expect(frames(null, null)).toBe(false);
    expect(frames(null, "1")).toBe(false);
    expect(frames(null, {})).toBe(false);
    expect(frames(null, [])).toBe(false);
    expect(frames(null, undefined)).toBe(false);
    expect(frames(undefined, undefined)).toBe(false);
    expect(frames(undefined, "1")).toBe(false);
    expect(frames(undefined, {})).toBe(false);
    expect(frames(undefined, [])).toBe(false);
    expect(frames(undefined, null)).toBe(false);
  });
  it("should return frames when minutes * 60 * fps", () => {
    expect(frames(1, 1)).toBe(60);
    expect(frames(10, 25)).toBe(15000);
    expect(frames(10, 1)).toBe(600);
  });
});
