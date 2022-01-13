import { error } from "./04-ErrorMessages";

describe("", () => {
  it("should return Invalid input when n is not a number", () => {
    ["1", {}, [], undefined, null].forEach((item) => {
      expect(error(item)).toBe("Invalid input");
    });
  });

  it("should returns the appropriate error message", () => {
    expect(error(1)).toBe("Check the fan: e1");
    expect(error(2)).toBe("Emergency stop: e2");
    expect(error(3)).toBe("Pump Error: e3");
    expect(error(4)).toBe("c: e4");
    expect(error(5)).toBe("Temperature Sensor Error: e5");
  });

  it("should returns 101 when n > 6", () => {
    expect(error(6)).toBe(101);
  });
});
