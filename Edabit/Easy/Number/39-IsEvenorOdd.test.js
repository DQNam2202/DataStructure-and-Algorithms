import { isEvenOrOdd } from "./39-IsEvenorOdd";

describe("Is the Number Even or Odd?", () => {
  it("should return Invalid input when numb is not a number", () => {
    ["1", {}, [], null, undefined].forEach((item) => {
      expect(isEvenOrOdd(item)).toBe("Invalid input");
    });
  });

  it("should returns 'even' for even numbers", () => {
    expect(isEvenOrOdd(16)).toBe("even");
    expect(isEvenOrOdd(146)).toBe("even");
    expect(isEvenOrOdd(20)).toBe("even");
  });

  it("should returns 'odd' for odd numbers", () => {
    expect(isEvenOrOdd(3)).toBe("odd");
    expect(isEvenOrOdd(149)).toBe("odd");
    expect(isEvenOrOdd(19)).toBe("odd");
  });
});
