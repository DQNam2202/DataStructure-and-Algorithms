import { imposterFormula } from "./35-AmongUs";

describe("imposterFormula()", () => {
  it("should return Invalid input if imposter > 3 and player > 10", () => {
    expect(imposterFormula(4, 11)).toBe("Invalid input");
  });

  it("should return calculates the chance of being an imposter", () => {
    expect(imposterFormula(1, 10)).toBe("10%");
    expect(imposterFormula(2, 5)).toBe("40%");
    expect(imposterFormula(1, 8)).toBe("13%");
  });

  it("should return Invalid input when imposter and player is not a number", () => {
    expect(imposterFormula("1", "2")).toBe("Invalid input");
    expect(imposterFormula("1", [])).toBe("Invalid input");
    expect(imposterFormula("1", {})).toBe("Invalid input");
    expect(imposterFormula("1", null)).toBe("Invalid input");
    expect(imposterFormula("1", undefined)).toBe("Invalid input");
    expect(imposterFormula([], [])).toBe("Invalid input");
    expect(imposterFormula([], "2")).toBe("Invalid input");
    expect(imposterFormula([], null)).toBe("Invalid input");
    expect(imposterFormula([], {})).toBe("Invalid input");
    expect(imposterFormula([], undefined)).toBe("Invalid input");
    expect(imposterFormula({}, {})).toBe("Invalid input");
    expect(imposterFormula({}, "1")).toBe("Invalid input");
    expect(imposterFormula({}, [])).toBe("Invalid input");
    expect(imposterFormula({}, null)).toBe("Invalid input");
    expect(imposterFormula({}, null)).toBe("Invalid input");
    expect(imposterFormula(null, null)).toBe("Invalid input");
    expect(imposterFormula(null, "1")).toBe("Invalid input");
    expect(imposterFormula(null, {})).toBe("Invalid input");
    expect(imposterFormula(null, [])).toBe("Invalid input");
    expect(imposterFormula(null, undefined)).toBe("Invalid input");
    expect(imposterFormula(undefined, undefined)).toBe("Invalid input");
    expect(imposterFormula(undefined, "1")).toBe("Invalid input");
    expect(imposterFormula(undefined, {})).toBe("Invalid input");
    expect(imposterFormula(undefined, [])).toBe("Invalid input");
    expect(imposterFormula(undefined, null)).toBe("Invalid input");
  });
});
