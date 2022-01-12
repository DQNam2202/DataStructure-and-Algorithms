import { charCountV1, charCountV2 } from "./03-CharCount";

describe("charCountV1()", () => {
  it("should return Invalid name when firstName and lastName is not a string", () => {
    expect(charCountV1(1, 2)).toBe("Invalid input");
    expect(charCountV1(1, [])).toBe("Invalid input");
    expect(charCountV1(1, {})).toBe("Invalid input");
    expect(charCountV1(1, null)).toBe("Invalid input");
    expect(charCountV1(1, undefined)).toBe("Invalid input");
    expect(charCountV1([], [])).toBe("Invalid input");
    expect(charCountV1([], 2)).toBe("Invalid input");
    expect(charCountV1([], null)).toBe("Invalid input");
    expect(charCountV1([], {})).toBe("Invalid input");
    expect(charCountV1([], undefined)).toBe("Invalid input");
    expect(charCountV1({}, {})).toBe("Invalid input");
    expect(charCountV1({}, 1)).toBe("Invalid input");
    expect(charCountV1({}, [])).toBe("Invalid input");
    expect(charCountV1({}, null)).toBe("Invalid input");
    expect(charCountV1({}, null)).toBe("Invalid input");
    expect(charCountV1(null, null)).toBe("Invalid input");
    expect(charCountV1(null, 1)).toBe("Invalid input");
    expect(charCountV1(null, {})).toBe("Invalid input");
    expect(charCountV1(null, [])).toBe("Invalid input");
    expect(charCountV1(null, undefined)).toBe("Invalid input");
    expect(charCountV1(undefined, undefined)).toBe("Invalid input");
    expect(charCountV1(undefined, 1)).toBe("Invalid input");
    expect(charCountV1(undefined, {})).toBe("Invalid input");
    expect(charCountV1(undefined, [])).toBe("Invalid input");
    expect(charCountV1(undefined, null)).toBe("Invalid input");
  });

  it("should return Invlaid name when firstName and lastName is empty", () => {
    expect(charCountV1("", "")).toBe("Invalid input");
    expect(charCountV1("", "Nam")).toBe("Invalid input");
    expect(charCountV1("Nam", "")).toBe("Invalid input");
  });

  it("should returns the number of times the first string (the single character) is found in the second string.", () => {
    expect(charCountV1("a", "edabit")).toBe(1);
    expect(charCountV1("c", "Chamber of secrets")).toBe(1);
    expect(charCountV1("b", "big fat bubble")).toBe(4);
  });
});
