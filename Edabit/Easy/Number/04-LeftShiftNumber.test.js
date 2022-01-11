import { shiftToLeftV1, shiftToLeftV2 } from "./04-LeftShiftNumber";

describe("Shift To Left Version 01", () => {
  it("should the result from the two given integers.", () => {
    expect(shiftToLeftV1(5, 2)).toBe(20);
    expect(shiftToLeftV1(10, 3)).toBe(80);
    expect(shiftToLeftV1(-32, 2)).toBe(-128);
    expect(shiftToLeftV1(-6, 5)).toBe(-192);
    expect(shiftToLeftV1(12, 4)).toBe(192);
    expect(shiftToLeftV1(46, 6)).toBe(2944);
  });

  it("should return Invalid input when numb1 and numb2 is not a number", () => {
    expect(shiftToLeftV1("1", "2")).toBe("Invalid input");
    expect(shiftToLeftV1("1", [])).toBe("Invalid input");
    expect(shiftToLeftV1("1", {})).toBe("Invalid input");
    expect(shiftToLeftV1("1", null)).toBe("Invalid input");
    expect(shiftToLeftV1("1", undefined)).toBe("Invalid input");
    expect(shiftToLeftV1([], [])).toBe("Invalid input");
    expect(shiftToLeftV1([], "2")).toBe("Invalid input");
    expect(shiftToLeftV1([], null)).toBe("Invalid input");
    expect(shiftToLeftV1([], {})).toBe("Invalid input");
    expect(shiftToLeftV1([], undefined)).toBe("Invalid input");
    expect(shiftToLeftV1({}, {})).toBe("Invalid input");
    expect(shiftToLeftV1({}, "1")).toBe("Invalid input");
    expect(shiftToLeftV1({}, [])).toBe("Invalid input");
    expect(shiftToLeftV1({}, null)).toBe("Invalid input");
    expect(shiftToLeftV1({}, null)).toBe("Invalid input");
    expect(shiftToLeftV1(null, null)).toBe("Invalid input");
    expect(shiftToLeftV1(null, "1")).toBe("Invalid input");
    expect(shiftToLeftV1(null, {})).toBe("Invalid input");
    expect(shiftToLeftV1(null, [])).toBe("Invalid input");
    expect(shiftToLeftV1(null, undefined)).toBe("Invalid input");
    expect(shiftToLeftV1(undefined, undefined)).toBe("Invalid input");
    expect(shiftToLeftV1(undefined, "1")).toBe("Invalid input");
    expect(shiftToLeftV1(undefined, {})).toBe("Invalid input");
    expect(shiftToLeftV1(undefined, [])).toBe("Invalid input");
    expect(shiftToLeftV1(undefined, null)).toBe("Invalid input");
  });
});

describe("Shift To Left Version 01", () => {
  it("should the result from the two given integers.", () => {
    expect(shiftToLeftV2(5, 2)).toBe(20);
    expect(shiftToLeftV2(10, 3)).toBe(80);
    expect(shiftToLeftV2(-32, 2)).toBe(-128);
    expect(shiftToLeftV2(-6, 5)).toBe(-192);
    expect(shiftToLeftV2(12, 4)).toBe(192);
    expect(shiftToLeftV2(46, 6)).toBe(2944);
  });

  it("should return Invalid input when numb1 and numb2 is not a number", () => {
    expect(shiftToLeftV2("1", "2")).toBe("Invalid input");
    expect(shiftToLeftV2("1", [])).toBe("Invalid input");
    expect(shiftToLeftV2("1", {})).toBe("Invalid input");
    expect(shiftToLeftV2("1", null)).toBe("Invalid input");
    expect(shiftToLeftV2("1", undefined)).toBe("Invalid input");
    expect(shiftToLeftV2([], [])).toBe("Invalid input");
    expect(shiftToLeftV2([], "2")).toBe("Invalid input");
    expect(shiftToLeftV2([], null)).toBe("Invalid input");
    expect(shiftToLeftV2([], {})).toBe("Invalid input");
    expect(shiftToLeftV2([], undefined)).toBe("Invalid input");
    expect(shiftToLeftV2({}, {})).toBe("Invalid input");
    expect(shiftToLeftV2({}, "1")).toBe("Invalid input");
    expect(shiftToLeftV2({}, [])).toBe("Invalid input");
    expect(shiftToLeftV2({}, null)).toBe("Invalid input");
    expect(shiftToLeftV2({}, null)).toBe("Invalid input");
    expect(shiftToLeftV2(null, null)).toBe("Invalid input");
    expect(shiftToLeftV2(null, "1")).toBe("Invalid input");
    expect(shiftToLeftV2(null, {})).toBe("Invalid input");
    expect(shiftToLeftV2(null, [])).toBe("Invalid input");
    expect(shiftToLeftV2(null, undefined)).toBe("Invalid input");
    expect(shiftToLeftV2(undefined, undefined)).toBe("Invalid input");
    expect(shiftToLeftV2(undefined, "1")).toBe("Invalid input");
    expect(shiftToLeftV2(undefined, {})).toBe("Invalid input");
    expect(shiftToLeftV2(undefined, [])).toBe("Invalid input");
    expect(shiftToLeftV2(undefined, null)).toBe("Invalid input");
  });
});
