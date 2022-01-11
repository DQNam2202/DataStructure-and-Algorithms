import { oddOrEven } from "./11-StringOddOrEven";

describe("CHeck String Odd or Even", () => {
  it("should return Invalid input when str is not a string", () => {
    [1, [], {}, null, undefined].forEach((item) => {
      expect(oddOrEven(item)).toBe("Invalid input");
    });
  });

  it("should return true when string length return even number", () => {
    expect(oddOrEven("apples")).toBe(true);
    expect(oddOrEven("cherry")).toBe(true);
    expect(oddOrEven("banana")).toBe(true);
  });

  it("should return false when string length return odd number", () => {
    expect(oddOrEven("pears")).toBe(false);
    expect(oddOrEven("mango")).toBe(false);
  });

  it("should return Invalid input when str is empty", () => {
    expect(oddOrEven("")).toBe("Invalid input");
  });
});
