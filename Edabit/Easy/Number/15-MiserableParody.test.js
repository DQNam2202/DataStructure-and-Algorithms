import { calculator } from "./15-MiserableParody";

describe("Handle simple math expressions", () => {
  it("should return false when str is not a string", () => {
    expect(calculator(1)).toBe(false);
    expect(calculator([])).toBe(false);
    expect(calculator({})).toBe(false);
    expect(calculator(null)).toBe(false);
    expect(calculator(undefined)).toBe(false);
  });

  it("should return false when str is empty", () => {
    expect(calculator("")).toBe(false);
  });

  it("should returns the result of the calculation ", () => {
    expect(calculator("25+3")).toBe(28);
    expect(calculator("45-15")).toBe(30);
    expect(calculator("13+2-5*2")).toBe(5);
    expect(calculator("49/7*2-3")).toBe(11);
  });
});
