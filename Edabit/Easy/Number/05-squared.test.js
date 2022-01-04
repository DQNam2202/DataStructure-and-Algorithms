import { squaredV1, squaredV2, squaredV3 } from "./05-squaredNumber";

describe("squaredV1()", () => {
  it("should return false when number is not a number", () => {
    expect(squaredV1("12")).toBe(false);
    expect(squaredV1({})).toBe(false);
    expect(squaredV1([])).toBe(false);
    expect(squaredV1(null)).toBe(false);
    expect(squaredV1(undefined)).toBe(false);
  });

  it("should return success when squared number is correct", () => {
    expect(squaredV1(5)).toBe(25);
    expect(squaredV1(100)).toBe(10000);
    expect(squaredV1(2)).toBe(4);
  });
});

describe("squaredV2()", () => {
  it("should return false when number is not a number", () => {
    expect(squaredV2("12")).toBe(false);
    expect(squaredV2({})).toBe(false);
    expect(squaredV2([])).toBe(false);
    expect(squaredV2(null)).toBe(false);
    expect(squaredV2(undefined)).toBe(false);
  });

  it("should return success when squared number is correct", () => {
    expect(squaredV2(5)).toBe(25);
    expect(squaredV2(100)).toBe(10000);
    expect(squaredV2(2)).toBe(4);
  });
});

describe("squaredV3()", () => {
  it("should return false when number is not a number", () => {
    expect(squaredV3("12")).toBe(false);
    expect(squaredV3({})).toBe(false);
    expect(squaredV3([])).toBe(false);
    expect(squaredV3(null)).toBe(false);
    expect(squaredV3(undefined)).toBe(false);
  });

  it("should return success when squared number is correct", () => {
    expect(squaredV3(5)).toBe(25);
    expect(squaredV3(100)).toBe(10000);
    expect(squaredV3(2)).toBe(4);
  });
});
