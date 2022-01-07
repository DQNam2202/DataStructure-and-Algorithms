import { calculateExponentV1, calculateExponentV2 } from "./31-ToThePower";

describe("To the Power of _____", () => {
  it("should return Invalid input when numb and exp is not a number", () => {
    expect(calculateExponentV1("1", "2")).toBe("Invalid input");
    expect(calculateExponentV1("1", [])).toBe("Invalid input");
    expect(calculateExponentV1("1", {})).toBe("Invalid input");
    expect(calculateExponentV1("1", null)).toBe("Invalid input");
    expect(calculateExponentV1("1", undefined)).toBe("Invalid input");
    expect(calculateExponentV1([], [])).toBe("Invalid input");
    expect(calculateExponentV1([], "2")).toBe("Invalid input");
    expect(calculateExponentV1([], null)).toBe("Invalid input");
    expect(calculateExponentV1([], {})).toBe("Invalid input");
    expect(calculateExponentV1([], undefined)).toBe("Invalid input");
    expect(calculateExponentV1({}, {})).toBe("Invalid input");
    expect(calculateExponentV1({}, "1")).toBe("Invalid input");
    expect(calculateExponentV1({}, [])).toBe("Invalid input");
    expect(calculateExponentV1({}, null)).toBe("Invalid input");
    expect(calculateExponentV1({}, null)).toBe("Invalid input");
    expect(calculateExponentV1(null, null)).toBe("Invalid input");
    expect(calculateExponentV1(null, "1")).toBe("Invalid input");
    expect(calculateExponentV1(null, {})).toBe("Invalid input");
    expect(calculateExponentV1(null, [])).toBe("Invalid input");
    expect(calculateExponentV1(null, undefined)).toBe("Invalid input");
    expect(calculateExponentV1(undefined, undefined)).toBe("Invalid input");
    expect(calculateExponentV1(undefined, "1")).toBe("Invalid input");
    expect(calculateExponentV1(undefined, {})).toBe("Invalid input");
    expect(calculateExponentV1(undefined, [])).toBe("Invalid input");
    expect(calculateExponentV1(undefined, null)).toBe("Invalid input");
  });

  it("should return the calculation when numb and exp is success", () => {
    expect(calculateExponentV1(5, 5)).toBe(3125);
    expect(calculateExponentV1(10, 10)).toBe(10000000000);
    expect(calculateExponentV1(3, 3)).toBe(27);
  });
});
describe("To the Power of _____", () => {
  it("should return Invalid input when numb and exp is not a number", () => {
    expect(calculateExponentV2("1", "2")).toBe("Invalid input");
    expect(calculateExponentV2("1", [])).toBe("Invalid input");
    expect(calculateExponentV2("1", {})).toBe("Invalid input");
    expect(calculateExponentV2("1", null)).toBe("Invalid input");
    expect(calculateExponentV2("1", undefined)).toBe("Invalid input");
    expect(calculateExponentV2([], [])).toBe("Invalid input");
    expect(calculateExponentV2([], "2")).toBe("Invalid input");
    expect(calculateExponentV2([], null)).toBe("Invalid input");
    expect(calculateExponentV2([], {})).toBe("Invalid input");
    expect(calculateExponentV2([], undefined)).toBe("Invalid input");
    expect(calculateExponentV2({}, {})).toBe("Invalid input");
    expect(calculateExponentV2({}, "1")).toBe("Invalid input");
    expect(calculateExponentV2({}, [])).toBe("Invalid input");
    expect(calculateExponentV2({}, null)).toBe("Invalid input");
    expect(calculateExponentV2({}, null)).toBe("Invalid input");
    expect(calculateExponentV2(null, null)).toBe("Invalid input");
    expect(calculateExponentV2(null, "1")).toBe("Invalid input");
    expect(calculateExponentV2(null, {})).toBe("Invalid input");
    expect(calculateExponentV2(null, [])).toBe("Invalid input");
    expect(calculateExponentV2(null, undefined)).toBe("Invalid input");
    expect(calculateExponentV2(undefined, undefined)).toBe("Invalid input");
    expect(calculateExponentV2(undefined, "1")).toBe("Invalid input");
    expect(calculateExponentV2(undefined, {})).toBe("Invalid input");
    expect(calculateExponentV2(undefined, [])).toBe("Invalid input");
    expect(calculateExponentV2(undefined, null)).toBe("Invalid input");
  });

  it("should return the calculation when numb and exp is success", () => {
    expect(calculateExponentV2(5, 5)).toBe(3125);
    expect(calculateExponentV2(10, 10)).toBe(10000000000);
    expect(calculateExponentV2(3, 3)).toBe(27);
  });
});
