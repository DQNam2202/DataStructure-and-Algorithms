import { canNest, canNestV2 } from "./02-NestedArray";

describe("canNest", () => {
  it("should return Invalid input when arr1 and arr2 is not an Object", () => {
    expect(canNest(1, 2)).toBe("Invalid input");
    expect(canNest(1, "2")).toBe("Invalid input");
    expect(canNest(1, [])).toBe("Invalid input");
    expect(canNest(1, undefined)).toBe("Invalid input");
    expect(canNest("1", "2")).toBe("Invalid input");
    expect(canNest("1", 2)).toBe("Invalid input");
    expect(canNest("1", [])).toBe("Invalid input");
    expect(canNest("1", undefined)).toBe("Invalid input");
    expect(canNest([], "2")).toBe("Invalid input");
    expect(canNest([], 1)).toBe("Invalid input");
    expect(canNest([], undefined)).toBe("Invalid input");
    expect(canNest(undefined, undefined)).toBe("Invalid input");
    expect(canNest(undefined, "1")).toBe("Invalid input");
    expect(canNest(undefined, 1)).toBe("Invalid input");
    expect(canNest(undefined, [])).toBe("Invalid input");
  });
  it("should return [] when arr1 and arr2 is empty array", () => {
    expect(canNest([], [])).toStrictEqual([]);
  });

  it("should return true if the first array can be nested inside the second.", () => {
    expect(canNest([1, 2, 3, 4], [0, 6])).toBe(true);
    expect(canNest([3, 1], [4, 0])).toBe(true);
  });

  it("should return false if the first array can be nested inside the second.", () => {
    expect(canNest([9, 9, 8], [8, 9])).toBe(false);
  });
});

describe("canNestV2", () => {
  it("should return Invalid input when arr1 and arr2 is not an Object", () => {
    expect(canNestV2(1, 2)).toBe("Invalid input");
    expect(canNestV2(1, "2")).toBe("Invalid input");
    expect(canNestV2(1, [])).toBe("Invalid input");
    expect(canNestV2(1, undefined)).toBe("Invalid input");
    expect(canNestV2("1", "2")).toBe("Invalid input");
    expect(canNestV2("1", 2)).toBe("Invalid input");
    expect(canNestV2("1", [])).toBe("Invalid input");
    expect(canNestV2("1", undefined)).toBe("Invalid input");
    expect(canNestV2([], "2")).toBe("Invalid input");
    expect(canNestV2([], 1)).toBe("Invalid input");
    expect(canNestV2([], undefined)).toBe("Invalid input");
    expect(canNestV2(undefined, undefined)).toBe("Invalid input");
    expect(canNestV2(undefined, "1")).toBe("Invalid input");
    expect(canNestV2(undefined, 1)).toBe("Invalid input");
    expect(canNestV2(undefined, [])).toBe("Invalid input");
  });
  it("should return [] when arr1 and arr2 is empty array", () => {
    expect(canNestV2([], [])).toStrictEqual([]);
  });

  it("should return true if the first array can be nested inside the second.", () => {
    expect(canNestV2([1, 2, 3, 4], [0, 6])).toBe(true);
    expect(canNestV2([3, 1], [4, 0])).toBe(true);
  });

  it("should return false if the first array can be nested inside the second.", () => {
    expect(canNestV2([9, 9, 8], [8, 9])).toBe(false);
  });
});
