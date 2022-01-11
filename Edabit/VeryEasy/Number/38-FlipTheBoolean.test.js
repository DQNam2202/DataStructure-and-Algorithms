import { flipBool } from "./38-FlipTheBoolean";

describe("Flip the Boolean", () => {
  it("should return Invalid input when bool is not a number and Boolean", () => {
    ["1", undefined, null, [], {}].forEach((item) => {
      expect(flipBool(item)).toBe("Invalid input");
    });
  });

  it("should returns 0 when bool is equal than true , 1", () => {
    expect(flipBool(true)).toBe(0);
    expect(flipBool(1)).toBe(0);
  });

  it("should returns 1 when bool is equal than false , 0", () => {
    expect(flipBool(false)).toBe(1);
    expect(flipBool(0)).toBe(1);
  });
});
