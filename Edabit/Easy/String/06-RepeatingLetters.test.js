import { doubleChar } from "./06-RepeatingLetters";

describe("Repeating Letters", () => {
  it("should return Invalid input when str is not a string", () => {
    [1, [], {}, null, undefined].forEach((item) => {
      expect(doubleChar(item)).toBe("Invalid input");
    });
  });

  it("should returns Invalid input when str is empty", () => {
    expect(doubleChar("")).toBe("Invalid input");
  });

  it("should return  a string in which each character is repeated once ", () => {
    expect(doubleChar("String")).toBe("SSttrriinngg");
    expect(doubleChar("Hello World!")).toBe("HHeelllloo  WWoorrlldd!!");
    expect(doubleChar("1234!_ ")).toBe("11223344!!__  ");
  });
});
