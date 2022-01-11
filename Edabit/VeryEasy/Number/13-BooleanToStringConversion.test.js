import { boolToStringV1, boolToStringV2 } from "./13-BooleanToStringConversion";

describe("boolToStringV1()", () => {
  it("should return false when flag is not a Boolean", () => {
    expect(boolToStringV1(1)).toBe(false);
    expect(boolToStringV1("true")).toBe(false);
    expect(boolToStringV1([])).toBe(false);
    expect(boolToStringV1({})).toBe(false);
    expect(boolToStringV1(null)).toBe(false);
    expect(boolToStringV1(undefined)).toBe(false);
  });

  it("should return string when return yield true", () => {
    expect(boolToStringV1(true)).toBe("true");
    expect(boolToStringV1(false)).toBe("false");
  });
});

describe("boolToStringV2()", () => {
  it("should return false when flag is not a Boolean", () => {
    expect(boolToStringV2(1)).toBe(false);
    expect(boolToStringV2("true")).toBe(false);
    expect(boolToStringV2([])).toBe(false);
    expect(boolToStringV2({})).toBe(false);
    expect(boolToStringV2(null)).toBe(false);
    expect(boolToStringV2(undefined)).toBe(false);
  });

  it("should return string when return yield true", () => {
    expect(boolToStringV2(true)).toBe("true");
    expect(boolToStringV2(false)).toBe("false");
  });
});
