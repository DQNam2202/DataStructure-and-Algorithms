import { detectWordV1 } from "./01-DetectWord";

describe("detectWordV1()", () => {
  it("should return Invalid input when str is not a string", () => {
    [1, [], {}, null, undefined].forEach((item) => {
      expect(detectWordV1(item)).toBe("Invalid input");
    });
  });

  it("should return Invalid input when str is empty", () => {
    expect(detectWordV1("")).toBe("Invalid input");
  });

  it("should return detect what the word", () => {
    expect(detectWordV1("UcUNFYGaFYFYGtNUH")).toBe("cat");
    expect(detectWordV1("bEEFGBuFBRrHgUHlNFYaYr")).toBe("burglar");
    expect(detectWordV1("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment")).toBe(
      "embezzlement"
    );
  });
});
