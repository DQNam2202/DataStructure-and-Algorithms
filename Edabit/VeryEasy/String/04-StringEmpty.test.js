import { isEmptyV1, isEmptyV2 } from "./04-StringEmpty";

describe("isEmptyV1()", () => {
  it("should return Invalid string when str is not a string", () => {
    [1, [], {}, null, undefined].forEach((item) => {
      expect(isEmptyV1(item)).toBe("Invalid string");
    });
  });

  it("returns true if a string is empty", () => {
    expect(isEmptyV1("")).toBe(true);
  });

  it("should return false if a string is not ", () => {
    expect(isEmptyV1(" ")).toBe(false);
    expect(isEmptyV1("nam")).toBe(false);
    expect(isEmptyV1("1234")).toBe(false);
  });
});

describe("isEmptyV2()", () => {
  it("should return Invalid string when str is not a string", () => {
    [1, [], {}, null, undefined].forEach((item) => {
      expect(isEmptyV2(item)).toBe("Invalid string");
    });
  });

  it("returns true if a string is empty", () => {
    expect(isEmptyV2("")).toBe(true);
  });

  it("should return false if a string is not ", () => {
    expect(isEmptyV2(" ")).toBe(false);
    expect(isEmptyV2("nam")).toBe(false);
    expect(isEmptyV2("1234")).toBe(false);
  });
});
