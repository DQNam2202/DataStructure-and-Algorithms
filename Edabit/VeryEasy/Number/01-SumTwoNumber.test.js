import { additionV1 } from "./01-SumTwoNumber";

describe("additionV1()", () => {
  it("should return Invalid number when a and b is not a number", () => {
    expect(additionV1("1", "2")).toBe("Invalid number");
    expect(additionV1("1", [])).toBe("Invalid number");
    expect(additionV1("1", {})).toBe("Invalid number");
    expect(additionV1("1", null)).toBe("Invalid number");
    expect(additionV1("1", undefined)).toBe("Invalid number");
    expect(additionV1([], [])).toBe("Invalid number");
    expect(additionV1([], "2")).toBe("Invalid number");
    expect(additionV1([], null)).toBe("Invalid number");
    expect(additionV1([], {})).toBe("Invalid number");
    expect(additionV1([], undefined)).toBe("Invalid number");
    expect(additionV1({}, {})).toBe("Invalid number");
    expect(additionV1({}, "1")).toBe("Invalid number");
    expect(additionV1({}, [])).toBe("Invalid number");
    expect(additionV1({}, null)).toBe("Invalid number");
    expect(additionV1({}, null)).toBe("Invalid number");
    expect(additionV1(null, null)).toBe("Invalid number");
    expect(additionV1(null, "1")).toBe("Invalid number");
    expect(additionV1(null, {})).toBe("Invalid number");
    expect(additionV1(null, [])).toBe("Invalid number");
    expect(additionV1(null, undefined)).toBe("Invalid number");
    expect(additionV1(undefined, undefined)).toBe("Invalid number");
    expect(additionV1(undefined, "1")).toBe("Invalid number");
    expect(additionV1(undefined, {})).toBe("Invalid number");
    expect(additionV1(undefined, [])).toBe("Invalid number");
    expect(additionV1(undefined, null)).toBe("Invalid number");
  });

  it("should return two sum number when a and b is a number", () => {
    expect(additionV1(3, 5)).toBe(8);
    expect(additionV1(-3, -5)).toBe(-8);
    expect(additionV1(7, 3)).toBe(10);
  });
});
