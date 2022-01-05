import { calculateFuel } from "./17-LetFuelUp";

describe("Name of the group", () => {
  it("should return false when n is not a number", () => {
    expect(calculateFuel("20")).toBe(false);
    expect(calculateFuel([])).toBe(false);
    expect(calculateFuel({})).toBe(false);
    expect(calculateFuel(null)).toBe(false);
    expect(calculateFuel(undefined)).toBe(false);
  });

  it("should return the amount of fuel it needs", () => {
    expect(calculateFuel(15)).toBe(150);
    expect(calculateFuel(10)).toBe(100);
    expect(calculateFuel(23.5)).toBe(235);
  });

  it("should return 100 if the calculated fuel turns out to be less than 100.", () => {
    expect(calculateFuel(3)).toBe(100);
    expect(calculateFuel(2.5)).toBe(100);
    expect(calculateFuel(5)).toBe(100);
  });
});
