import { firstVowel } from "./13-FirstVowels";

describe("firstVowel()", () => {
  it("should return Invalid input when str is not a string", () => {
    [1, undefined, null, {}, []].forEach((item) => {
      expect(firstVowel(item)).toBe("Invalid input");
    });
  });

  it("should return Invalid input when str is empty", () => {
    expect(firstVowel("")).toBe("Invalid input");
  });

  it("should the index of the first vowel in a string", () => {
    expect(firstVowel("apple")).toBe(0);
    expect(firstVowel("hello")).toBe(1);
    expect(firstVowel("STRAWBERRY")).toBe(3);
    expect(firstVowel("pInEaPPLe")).toBe(1);
  });
});
