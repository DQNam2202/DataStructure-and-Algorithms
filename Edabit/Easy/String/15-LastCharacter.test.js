import { isLastCharacterN } from "./15-LastCharacter";

describe("isLastCharacterN()", () => {
  it("should return invalid input when str is not a string", () => {
    [1, {}, [], undefined, null].forEach((item) => {
      expect(isLastCharacterN(item)).toBe("Invalid input");
    });
  });

  it("should returns true if the last character of the name is an 'n'", () => {
    expect(isLastCharacterN("Aiden")).toBe(true);
    expect(isLastCharacterN("Dean")).toBe(true);
  });

  it("should return Invalid input when str is empty", () => {
    expect(isLastCharacterN("")).toBe("Invalid input");
  });

  it("should returns false if the last character of the name is not an 'n'", () => {
    expect(isLastCharacterN("Piet")).toBe(false);
    expect(isLastCharacterN("Bert")).toBe(false);
  });
});
