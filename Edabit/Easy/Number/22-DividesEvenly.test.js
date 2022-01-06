import { dividesEvenly } from "./22-DividesEvenly";

describe("Divides Evenly", () => {
  it("should return Invalid number when a and b is not a number", () => {
    expect(dividesEvenly("1", "2")).toBe("Invalid number");
    expect(dividesEvenly("1", [])).toBe("Invalid number");
    expect(dividesEvenly("1", {})).toBe("Invalid number");
    expect(dividesEvenly("1", null)).toBe("Invalid number");
    expect(dividesEvenly("1", undefined)).toBe("Invalid number");
    expect(dividesEvenly([], [])).toBe("Invalid number");
    expect(dividesEvenly([], "2")).toBe("Invalid number");
    expect(dividesEvenly([], null)).toBe("Invalid number");
    expect(dividesEvenly([], {})).toBe("Invalid number");
    expect(dividesEvenly([], undefined)).toBe("Invalid number");
    expect(dividesEvenly({}, {})).toBe("Invalid number");
    expect(dividesEvenly({}, "1")).toBe("Invalid number");
    expect(dividesEvenly({}, [])).toBe("Invalid number");
    expect(dividesEvenly({}, null)).toBe("Invalid number");
    expect(dividesEvenly({}, null)).toBe("Invalid number");
    expect(dividesEvenly(null, null)).toBe("Invalid number");
    expect(dividesEvenly(null, "1")).toBe("Invalid number");
    expect(dividesEvenly(null, {})).toBe("Invalid number");
    expect(dividesEvenly(null, [])).toBe("Invalid number");
    expect(dividesEvenly(null, undefined)).toBe("Invalid number");
    expect(dividesEvenly(undefined, undefined)).toBe("Invalid number");
    expect(dividesEvenly(undefined, "1")).toBe("Invalid number");
    expect(dividesEvenly(undefined, {})).toBe("Invalid number");
    expect(dividesEvenly(undefined, [])).toBe("Invalid number");
    expect(dividesEvenly(undefined, null)).toBe("Invalid number");
  });

  it("should return true if a can be divided evenly by b", () => {
    expect(dividesEvenly(98, 7)).toBe(true);
    expect(dividesEvenly(21, 7)).toBe(true);
    expect(dividesEvenly(28, 4)).toBe(true);
    expect(dividesEvenly(62, 2)).toBe(true);
    expect(dividesEvenly(39, 3)).toBe(true);
  });

  it("should return false if a can not be divided evenly by b", () => {
    expect(dividesEvenly(85, 4)).toBe(false);
    expect(dividesEvenly(21, 5)).toBe(false);
    expect(dividesEvenly(85, 9)).toBe(false);
    expect(dividesEvenly(23, 4)).toBe(false);
  });
});
