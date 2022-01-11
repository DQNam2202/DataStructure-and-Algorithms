import { findIndex } from "./10-FindtheIndex";

describe("findIndex()", () => {
  it("should return Invalid input when array is not a Object and str is not a string", () => {
    expect(findIndex(1, 2)).toBe("Invalid input");
    expect(findIndex(1, [])).toBe("Invalid input");
    expect(findIndex(1, {})).toBe("Invalid input");
    expect(findIndex(1, null)).toBe("Invalid input");
    expect(findIndex(1, undefined)).toBe("Invalid input");
    expect(findIndex("1", [])).toBe("Invalid input");
    expect(findIndex("1", 2)).toBe("Invalid input");
    expect(findIndex("1", {})).toBe("Invalid input");
    expect(findIndex("1", null)).toBe("Invalid input");
    expect(findIndex("1", undefined)).toBe("Invalid input");
    expect(findIndex(undefined, undefined)).toBe("Invalid input");
    expect(findIndex(undefined, {})).toBe("Invalid input");
    expect(findIndex(undefined, null)).toBe("Invalid input");
    expect(findIndex(undefined, 1)).toBe("Invalid input");
    expect(findIndex(undefined, [])).toBe("Invalid input");
  });

  it("should return [] when array and str is empty", () => {
    expect(findIndex([], "")).toStrictEqual([]);
  });

  it("should return the index of the string.", () => {
    expect(findIndex(["hi", "edabit", "fgh", "abc"], "fgh")).toBe(2);
    expect(findIndex(["Red", "blue", "Blue", "Green"], "blue")).toBe(1);
    expect(findIndex(["a", "g", "y", "d"], "d")).toBe(3);
    expect(
      findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple")
    ).toBe(0);
  });
});
