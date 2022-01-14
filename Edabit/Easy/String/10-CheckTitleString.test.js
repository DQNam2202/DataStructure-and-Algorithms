import { checkTitle } from "./10-CheckTitleString";

describe("Check If It's a Title String", () => {
  it("should return Invalid input when str is not a string", () => {
    [1, [], {}, undefined, null].forEach((item) => {
      expect(checkTitle(item)).toBe("Invalid input");
    });
  });

  it("should return Invalid input when str is empty", () => {
    expect(checkTitle("")).toBe("Invalid input");
  });

  it("should return true if A title string is one which has all the words in the string start with a upper case letter.", () => {
    expect(checkTitle("A Mind Boggling Achievement")).toBe(true);
    expect(checkTitle("A Simple Java Script Program!")).toBe(true);
  });

  it("should return false if A title string is not one which has all the words in the string start with a upper case letter.", () => {
    expect(checkTitle("Water is transparent")).toBe(false);
  });
});
