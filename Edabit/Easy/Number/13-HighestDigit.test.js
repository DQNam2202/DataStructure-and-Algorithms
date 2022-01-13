import { highestDigit } from "./13-HighestDigit";

describe("Highest Digit", () => {
  it("should return Invalid input when numb is not a number", () => {
    ["2", [], {}, null, undefined].forEach((item) => {
      expect(highestDigit(item)).toBe("Invalid input");
    });
  });

  it("should return the highest digit in that number.", () => {
    expect(highestDigit(379)).toBe(9);
    expect(highestDigit(2)).toBe(2);
    expect(highestDigit(377401)).toBe(7);
  });
});
