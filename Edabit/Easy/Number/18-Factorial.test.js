import { factorial } from "./18-Factorial";

describe("factorials", () => {
  it("should return Invalid input when numb is not a number", () => {
    ["1", null, undefined, {}, []].forEach((item) => {
      expect(factorial(item)).toBe("Invalid input");
    });
  });

  it("should return 1 if numb equal than 0", () => {
    expect(factorial(0)).toBe(1);
  });

  it("should return result after calculates the factorial of a number recursively", () => {
    expect(factorial(5)).toBe(120);
    expect(factorial(3)).toBe(6);
    expect(factorial(1)).toBe(1);
  });
});
