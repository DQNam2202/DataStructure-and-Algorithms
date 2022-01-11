import { length } from "./05-LengthString";

describe("Recursion: Length of a String", () => {
  it("should return Invalid String when str is not a string", () => {
    [1, [], {}, null, undefined].forEach((item) => {
      expect(length(item)).toBe("Invalid string");
    });
  });

  it("should return string length when str is success", () => {
    expect(length("apple")).toBe(5);
    expect(length("  apple ")).toBe(5);
    expect(length("banana")).toBe(6);
    expect(length("make")).toBe(4);
    expect(length("")).toBe(0);
    expect(length("duong nam")).toBe(9);
  });
});
