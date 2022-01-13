import { dropRight } from "./09-DropRight";

describe("dropRight()", () => {
  it("should return Invalid input when arr is not a Object", () => {
    expect(dropRight(1, "2")).toBe("Invalid input");
    expect(dropRight(1, [])).toBe("Invalid input");
    expect(dropRight(1, {})).toBe("Invalid input");
    expect(dropRight(1, null)).toBe("Invalid input");
    expect(dropRight(1, undefined)).toBe("Invalid input");
    expect(dropRight("1", [])).toBe("Invalid input");
    expect(dropRight("1", "2")).toBe("Invalid input");
    expect(dropRight("1", {})).toBe("Invalid input");
    expect(dropRight("1", null)).toBe("Invalid input");
    expect(dropRight("1", undefined)).toBe("Invalid input");
    expect(dropRight(undefined, undefined)).toBe("Invalid input");
    expect(dropRight(undefined, {})).toBe("Invalid input");
    expect(dropRight(undefined, null)).toBe("Invalid input");
    expect(dropRight(undefined, "2")).toBe("Invalid input");
    expect(dropRight(undefined, [])).toBe("Invalid input");
  });

  it("should return Invalid input when arr is empty", () => {
    expect(dropRight([])).toStrictEqual([]);
  });

  it("should return [] if numb > array length", () => {
    expect(dropRight([1, 2, 3], 5)).toStrictEqual([]);
  });

  it("should return new array after split", () => {
    expect(dropRight([1, 2, 3])).toStrictEqual([1, 2]);
    expect(dropRight([1, 2, 3], 2)).toStrictEqual([1]);
    expect(dropRight([1, 2, 3], 0)).toStrictEqual([1, 2, 3]);
  });
});
