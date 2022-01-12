import { isFirstSuperior } from "./05-SlightlySuperior";

describe("isFirstSuperior()", () => {
  it("should return Invalid input when arr1 and arr2 is not an Object", () => {
    expect(isFirstSuperior(1, 2)).toBe("Invalid input");
    expect(isFirstSuperior(1, "2")).toBe("Invalid input");
    expect(isFirstSuperior(1, [])).toBe("Invalid input");
    expect(isFirstSuperior(1, undefined)).toBe("Invalid input");
    expect(isFirstSuperior("1", "2")).toBe("Invalid input");
    expect(isFirstSuperior("1", 2)).toBe("Invalid input");
    expect(isFirstSuperior("1", [])).toBe("Invalid input");
    expect(isFirstSuperior("1", undefined)).toBe("Invalid input");
    expect(isFirstSuperior([], "2")).toBe("Invalid input");
    expect(isFirstSuperior([], 1)).toBe("Invalid input");
    expect(isFirstSuperior([], undefined)).toBe("Invalid input");
    expect(isFirstSuperior(undefined, undefined)).toBe("Invalid input");
    expect(isFirstSuperior(undefined, "1")).toBe("Invalid input");
    expect(isFirstSuperior(undefined, 1)).toBe("Invalid input");
    expect(isFirstSuperior(undefined, [])).toBe("Invalid input");
  });
  it("should return [] when arr01 and arr02 is empty array", () => {
    expect(isFirstSuperior([], [])).toStrictEqual([]);
  });

  it("should return false when arr1, arr2 are the same", () => {
    expect(isFirstSuperior([1, "a", 2], [1, "a", 2])).toBe(false);
  });

  it("should return true when one of the items in an array will be valued slightly higher than its counterpart", () => {
    expect(isFirstSuperior([1, 2, 4], [1, 2, 3])).toBe(true);
    // expect(isFirstSuperior(["a", "d", "c"], ["a", "b", "c"])).toBe(true);
    expect(
      isFirstSuperior(
        ["zebra", "ostrich", "whale"],
        ["ant", "ostrich", "whale"]
      )
    ).toBe(true);
  });

  it("should return false when one of the items in an array will not be valued slightly higher than its counterpart", () => {
    expect(isFirstSuperior([1, 2, 3, 4], [1, 2, 4, 4])).toBe(false);
    expect(isFirstSuperior([true, 9, "zebra"], [true, 10, "zebra"])).toBe(
      false
    );
  });
});
