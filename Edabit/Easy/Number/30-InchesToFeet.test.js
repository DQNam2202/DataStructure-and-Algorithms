import { inchesToFeet } from "./30-InchesToFeet";

describe("Inches To Feet", () => {
  it("should return Invalid input when inches is not a number", () => {
    ["1", [], {}, null, undefined].forEach((item) => {
      expect(inchesToFeet(item)).toBe("Invalid input");
    });
  });

  it("should return 0 when inches < 12", () => {
    [11, 5, 7, 9].forEach((item) => {
      expect(inchesToFeet(item)).toBe(0);
    });
  });

  it("should  returns the equivalent of the measurement value in feet.", () => {
    expect(inchesToFeet(324)).toBe(27);
    expect(inchesToFeet(12)).toBe(1);
    expect(inchesToFeet(36)).toBe(3);
  });
});
