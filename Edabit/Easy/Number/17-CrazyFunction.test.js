import { crazyfunction } from "./17-CrazyFunction";
describe("crazyfunction", () => {
  it("should return Invalid input when numb1 and numb2 is not a number", () => {
    expect(crazyfunction("1", "2")).toBe("Invalid input");
    expect(crazyfunction("1", [])).toBe("Invalid input");
    expect(crazyfunction("1", {})).toBe("Invalid input");
    expect(crazyfunction("1", null)).toBe("Invalid input");
    expect(crazyfunction("1", undefined)).toBe("Invalid input");
    expect(crazyfunction([], [])).toBe("Invalid input");
    expect(crazyfunction([], "2")).toBe("Invalid input");
    expect(crazyfunction([], null)).toBe("Invalid input");
    expect(crazyfunction([], {})).toBe("Invalid input");
    expect(crazyfunction([], undefined)).toBe("Invalid input");
    expect(crazyfunction({}, {})).toBe("Invalid input");
    expect(crazyfunction({}, "1")).toBe("Invalid input");
    expect(crazyfunction({}, [])).toBe("Invalid input");
    expect(crazyfunction({}, null)).toBe("Invalid input");
    expect(crazyfunction({}, null)).toBe("Invalid input");
    expect(crazyfunction(null, null)).toBe("Invalid input");
    expect(crazyfunction(null, "1")).toBe("Invalid input");
    expect(crazyfunction(null, {})).toBe("Invalid input");
    expect(crazyfunction(null, [])).toBe("Invalid input");
    expect(crazyfunction(null, undefined)).toBe("Invalid input");
    expect(crazyfunction(undefined, undefined)).toBe("Invalid input");
    expect(crazyfunction(undefined, "1")).toBe("Invalid input");
    expect(crazyfunction(undefined, {})).toBe("Invalid input");
    expect(crazyfunction(undefined, [])).toBe("Invalid input");
    expect(crazyfunction(undefined, null)).toBe("Invalid input");
  });

  it("should return the expected output", () => {
    expect(crazyfunction(10, 20)).toBe(30);
    expect(crazyfunction(17, 35)).toBe(50);
    expect(crazyfunction(61, 233)).toBe(212);
  });
});
