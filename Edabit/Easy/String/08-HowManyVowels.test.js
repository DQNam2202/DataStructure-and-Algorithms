import {
  countVowelsV1,
  countVowelsV2,
  countVowelsV3,
} from "./08-HowManyVowels";

describe("countVowelsV1()", () => {
  it("should return Invalid input when str is not a string", () => {
    [1, [], {}, null, undefined].forEach((item) => {
      expect(countVowelsV1(item)).toBe("Invalid input");
    });
  });

  it("should return Invalid input when str is empty", () => {
    expect(countVowelsV1("")).toBe("Invalid input");
  });

  it("should return the number (count) of vowels contained within it.", () => {
    expect(countVowelsV1("Celebration")).toBe(5);
    expect(countVowelsV1("Palm")).toBe(1);
    expect(countVowelsV1("Prediction")).toBe(4);
  });
});

describe("countVowelsV2()", () => {
  it("should return Invalid input when str is not a string", () => {
    [1, [], {}, null, undefined].forEach((item) => {
      expect(countVowelsV2(item)).toBe("Invalid input");
    });
  });

  it("should return Invalid input when str is empty", () => {
    expect(countVowelsV2("")).toBe("Invalid input");
  });

  it("should return the number (count) of vowels contained within it.", () => {
    expect(countVowelsV2("Celebration")).toBe(5);
    expect(countVowelsV2("Palm")).toBe(1);
    expect(countVowelsV2("Prediction")).toBe(4);
  });
});

describe("countVowelsV3()", () => {
  it("should return Invalid input when str is not a string", () => {
    [1, [], {}, null, undefined].forEach((item) => {
      expect(countVowelsV3(item)).toBe("Invalid input");
    });
  });

  it("should return Invalid input when str is empty", () => {
    expect(countVowelsV3("")).toBe("Invalid input");
  });

  it("should return the number (count) of vowels contained within it.", () => {
    expect(countVowelsV3("Celebration")).toBe(5);
    expect(countVowelsV3("Palm")).toBe(1);
    expect(countVowelsV3("Prediction")).toBe(4);
  });
});
