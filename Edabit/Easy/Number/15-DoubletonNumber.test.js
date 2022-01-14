import { doubleton } from "./15-DoubletonNumber";

describe("Doubleton Number", () => {
  it("should return Invalid input when numb is not a number", () => {
    ["1", {}, [], null, undefined].forEach((item) => {
      expect(doubleton(item)).toBe("Invalid input");
    });
  });

  it("should return doubleton number", () => {
    expect(doubleton(10)).toBe(12);
    expect(doubleton(120)).toBe(121);
    expect(doubleton(1234)).toBe(1311);
  });
});
