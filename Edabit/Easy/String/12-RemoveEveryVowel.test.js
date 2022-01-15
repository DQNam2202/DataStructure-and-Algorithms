import { removeVowels } from "./12-RemoveEveryVowel";

describe("removeVowels()", () => {
  it("should return Invalid input when str is not a string", () => {
    [1, [], {}, null, undefined].forEach((item) => {
      expect(removeVowels(item)).toBe("Invalid input");
    });
  });

  it("should return Invalid input when str is empty", () => {
    expect(removeVowels("")).toBe("Invalid input");
  });

  it("should returns a new string with all vowels removed.", () => {
    expect(
      removeVowels("I have never seen a thin person drinking Diet Coke.")
    ).toBe(" hv nvr sn  thn prsn drnkng Dt Ck.");
    expect(removeVowels("We're gonna build a wall!")).toBe("W'r gnn bld  wll!");
    expect(
      removeVowels("Happy Thanksgiving to all--even the haters and losers!")
    ).toBe("Hppy Thnksgvng t ll--vn th htrs nd lsrs!");
  });
});
