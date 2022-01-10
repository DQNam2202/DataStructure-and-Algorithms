import { valueAt } from "./12-ArrayIndexing";
describe("valueAt()", () => {
  it("should return Invalid input when array is not a Object and str is not a string", () => {
    expect(valueAt(1, 2)).toBe("Invalid input");
    expect(valueAt(1, [])).toBe("Invalid input");
    expect(valueAt(1, {})).toBe("Invalid input");
    expect(valueAt(1, null)).toBe("Invalid input");
    expect(valueAt(1, undefined)).toBe("Invalid input");
    expect(valueAt("1", [])).toBe("Invalid input");
    expect(valueAt("1", 2)).toBe("Invalid input");
    expect(valueAt("1", {})).toBe("Invalid input");
    expect(valueAt("1", null)).toBe("Invalid input");
    expect(valueAt("1", undefined)).toBe("Invalid input");
    expect(valueAt(undefined, undefined)).toBe("Invalid input");
    expect(valueAt(undefined, {})).toBe("Invalid input");
    expect(valueAt(undefined, null)).toBe("Invalid input");
    expect(valueAt(undefined, 1)).toBe("Invalid input");
    expect(valueAt(undefined, [])).toBe("Invalid input");
  });

  it("should return [] when array and str is empty", () => {
    expect(valueAt([], "")).toStrictEqual([]);
  });

  it("should return the index of the string.", () => {
    expect(valueAt([1, 2, 3, 4, 5, 6], "10 / 2")).toBe(6);
    expect(valueAt([1, 2, 3, 4, 5, 6], "8.0 / 2")).toBe(5);
    expect(valueAt([1, 2, 3, 4], "6.535355314 / 2")).toBe(4);
  });
});
