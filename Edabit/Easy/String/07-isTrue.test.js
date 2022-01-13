import { isTrue } from "./07-isTrue";

describe("It's true", () => {
  it("should returns Invalid input when str is not a string", () => {
    [1, {}, [], undefined, null].forEach((item) => {
      expect(isTrue(item)).toBe("Invalid input");
    });
  });

  it("should returns Invalid input when str is empty", () => {
    expect(isTrue("")).toBe("Invalid input");
  });

  it("should return true if expresion is true", () => {
    expect(isTrue("2===2")).toBe(true);
    expect(isTrue("15>4")).toBe(true);
    expect(isTrue("13<99")).toBe(true);
  });

  it("should return false if expression is false", () => {
    expect(isTrue("8<7")).toBe(false);
    expect(isTrue("5===13")).toBe(false);
    expect(isTrue("32<12")).toBe(false);
  });
});
