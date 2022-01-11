import { isLastCharacterN, isLastCharacterNVer2 } from "./15-LastCharacter";

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

describe("isLastCharacterNVer2()", () => {
  it("should return invalid input when str is not a string", () => {
    [1, {}, [], undefined, null].forEach((item) => {
      expect(isLastCharacterNVer2(item)).toBe("Invalid input");
    });
  });

  it("should returns true if the last character of the name is an 'n'", () => {
    expect(isLastCharacterNVer2("Aiden")).toBe(true);
    expect(isLastCharacterNVer2("Dean")).toBe(true);
  });

  it("should return Invalid input when str is empty", () => {
    expect(isLastCharacterNVer2("")).toBe("Invalid input");
  });

  it("should returns false if the last character of the name is not an 'n'", () => {
    expect(isLastCharacterNVer2("Piet")).toBe(false);
    expect(isLastCharacterNVer2("Bert")).toBe(false);
  });
});
