import { shouldServeDrinks } from "./29-AllowedDrink";

describe("Drinks Allowed ?", () => {
  it("should return Invalid input when age is not a number and onBreak is not a boolean", () => {
    expect(shouldServeDrinks("1", "2")).toBe("Invalid input");
    expect(shouldServeDrinks("1", [])).toBe("Invalid input");
    expect(shouldServeDrinks("1", {})).toBe("Invalid input");
    expect(shouldServeDrinks("1", null)).toBe("Invalid input");
    expect(shouldServeDrinks("1", undefined)).toBe("Invalid input");
    expect(shouldServeDrinks([], [])).toBe("Invalid input");
    expect(shouldServeDrinks([], "2")).toBe("Invalid input");
    expect(shouldServeDrinks([], null)).toBe("Invalid input");
    expect(shouldServeDrinks([], {})).toBe("Invalid input");
    expect(shouldServeDrinks([], undefined)).toBe("Invalid input");
    expect(shouldServeDrinks({}, {})).toBe("Invalid input");
    expect(shouldServeDrinks({}, "1")).toBe("Invalid input");
    expect(shouldServeDrinks({}, [])).toBe("Invalid input");
    expect(shouldServeDrinks({}, null)).toBe("Invalid input");
    expect(shouldServeDrinks({}, null)).toBe("Invalid input");
    expect(shouldServeDrinks(null, null)).toBe("Invalid input");
    expect(shouldServeDrinks(null, "1")).toBe("Invalid input");
    expect(shouldServeDrinks(null, {})).toBe("Invalid input");
    expect(shouldServeDrinks(null, [])).toBe("Invalid input");
    expect(shouldServeDrinks(null, undefined)).toBe("Invalid input");
    expect(shouldServeDrinks(undefined, undefined)).toBe("Invalid input");
    expect(shouldServeDrinks(undefined, "1")).toBe("Invalid input");
    expect(shouldServeDrinks(undefined, {})).toBe("Invalid input");
    expect(shouldServeDrinks(undefined, [])).toBe("Invalid input");
    expect(shouldServeDrinks(undefined, null)).toBe("Invalid input");
    expect(shouldServeDrinks(1, "2")).toBe("Invalid input");
    expect(shouldServeDrinks(1, [])).toBe("Invalid input");
    expect(shouldServeDrinks(1, {})).toBe("Invalid input");
    expect(shouldServeDrinks(1, null)).toBe("Invalid input");
    expect(shouldServeDrinks(1, undefined)).toBe("Invalid input");
  });

  it("should return true when age >= 18 and onBreak equal than false ", () => {
    expect(shouldServeDrinks(19, false)).toBe(true);
    expect(shouldServeDrinks(18, false)).toBe(true);
    expect(shouldServeDrinks(50, false)).toBe(true);
  });
  it("should return false when age < 18 or onBreak equal than true ", () => {
    expect(shouldServeDrinks(17, true)).toBe(false);
    expect(shouldServeDrinks(16, true)).toBe(false);
    expect(shouldServeDrinks(20, true)).toBe(false);
    expect(shouldServeDrinks(30, true)).toBe(false);
  });
});
