import { search } from "./11-FindIndexPart02";

describe("search()", () => {
  it("should return Invalid input when array is not a Object and str is not a string", () => {
    expect(search(1, "2")).toBe("Invalid input");
    expect(search(1, [])).toBe("Invalid input");
    expect(search(1, {})).toBe("Invalid input");
    expect(search(1, null)).toBe("Invalid input");
    expect(search(1, undefined)).toBe("Invalid input");
    expect(search("1", [])).toBe("Invalid input");
    expect(search("1", "2")).toBe("Invalid input");
    expect(search("1", {})).toBe("Invalid input");
    expect(search("1", null)).toBe("Invalid input");
    expect(search("1", undefined)).toBe("Invalid input");
    expect(search(undefined, undefined)).toBe("Invalid input");
    expect(search(undefined, {})).toBe("Invalid input");
    expect(search(undefined, null)).toBe("Invalid input");
    expect(search(undefined, "2")).toBe("Invalid input");
    expect(search(undefined, [])).toBe("Invalid input");
  });

  it("should return [] when array is a empty", () => {
    expect(search([], 4)).toStrictEqual([]);
  });

  it("should return the index of the string.", () => {
    expect(search([1, 5, 3], 5)).toBe(1);
    expect(search([9, 8, 3], 3)).toBe(2);
    expect(search([1, 2, 6, 7, 8, 9], 7)).toBe(3);
  });

  it("should return -1 if array is not contain item", () => {
    expect(search([1, 2, 3], 4)).toStrictEqual(-1);
  });

  it("should return Invalid input when item is negative number", () => {
    expect(search([1, 2, 5, 6, 7], -7)).toBe(-1);
  });
});
