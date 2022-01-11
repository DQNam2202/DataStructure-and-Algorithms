import { yeahNope } from "./10-TernaryOperator";

describe("Using Ternary Operators", () => {
  it("should return Invalid boolean when bool is not a Boolean", () => {
    [1, "true", null, undefined, {}, []].forEach((item) => {
      expect(yeahNope(item)).toBe("Invalid Boolean");
    });
  });

  it("should return 'yeah' if bool is true", () => {
    expect(yeahNope(true)).toBe("yeah");
  });
  it("should return 'nope' if bool is false", () => {
    expect(yeahNope(false)).toBe("nope");
  });
});
