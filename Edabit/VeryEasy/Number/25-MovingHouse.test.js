import { yearsInOneHouse } from "./25-MovingHouse";

describe("Moving House", () => {
  it("should return Invalid number when age and moves is not a number", () => {
    expect(yearsInOneHouse("1", "2")).toBe("Invalid number");
    expect(yearsInOneHouse("1", [])).toBe("Invalid number");
    expect(yearsInOneHouse("1", {})).toBe("Invalid number");
    expect(yearsInOneHouse("1", null)).toBe("Invalid number");
    expect(yearsInOneHouse("1", undefined)).toBe("Invalid number");
    expect(yearsInOneHouse([], [])).toBe("Invalid number");
    expect(yearsInOneHouse([], "2")).toBe("Invalid number");
    expect(yearsInOneHouse([], null)).toBe("Invalid number");
    expect(yearsInOneHouse([], {})).toBe("Invalid number");
    expect(yearsInOneHouse([], undefined)).toBe("Invalid number");
    expect(yearsInOneHouse({}, {})).toBe("Invalid number");
    expect(yearsInOneHouse({}, "1")).toBe("Invalid number");
    expect(yearsInOneHouse({}, [])).toBe("Invalid number");
    expect(yearsInOneHouse({}, null)).toBe("Invalid number");
    expect(yearsInOneHouse({}, null)).toBe("Invalid number");
    expect(yearsInOneHouse(null, null)).toBe("Invalid number");
    expect(yearsInOneHouse(null, "1")).toBe("Invalid number");
    expect(yearsInOneHouse(null, {})).toBe("Invalid number");
    expect(yearsInOneHouse(null, [])).toBe("Invalid number");
    expect(yearsInOneHouse(null, undefined)).toBe("Invalid number");
    expect(yearsInOneHouse(undefined, undefined)).toBe("Invalid number");
    expect(yearsInOneHouse(undefined, "1")).toBe("Invalid number");
    expect(yearsInOneHouse(undefined, {})).toBe("Invalid number");
    expect(yearsInOneHouse(undefined, [])).toBe("Invalid number");
    expect(yearsInOneHouse(undefined, null)).toBe("Invalid number");
  });

  it("should return the average number of years that they've spent living in the same house.", () => {
    expect(yearsInOneHouse(30, 1)).toBe(15);
    expect(yearsInOneHouse(15, 2)).toBe(5);
    expect(yearsInOneHouse(80, 0)).toBe(80);
  });
});
