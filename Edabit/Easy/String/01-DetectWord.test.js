import {
  detectWordV1,
  detectWordV2,
  detectWordV3,
  detectWordV4,
} from "./01-DetectWord";

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

describe("detectWordV2()", () => {
  it("should return Invalid input when str is not a string", () => {
    [1, [], {}, null, undefined].forEach((item) => {
      expect(detectWordV2(item)).toBe("Invalid input");
    });
  });

  it("should return Invalid input when str is empty", () => {
    expect(detectWordV2("")).toBe("Invalid input");
  });

  it("should return detect what the word", () => {
    expect(detectWordV2("UcUNFYGaFYFYGtNUH")).toBe("cat");
    expect(detectWordV2("bEEFGBuFBRrHgUHlNFYaYr")).toBe("burglar");
    expect(detectWordV2("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment")).toBe(
      "embezzlement"
    );
  });
});

describe("detectWordV3()", () => {
  it("should return Invalid input when str is not a string", () => {
    [1, [], {}, null, undefined].forEach((item) => {
      expect(detectWordV3(item)).toBe("Invalid input");
    });
  });

  it("should return Invalid input when str is empty", () => {
    expect(detectWordV3("")).toBe("Invalid input");
  });

  it("should return detect what the word", () => {
    expect(detectWordV3("UcUNFYGaFYFYGtNUH")).toBe("cat");
    expect(detectWordV3("bEEFGBuFBRrHgUHlNFYaYr")).toBe("burglar");
    expect(detectWordV3("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment")).toBe(
      "embezzlement"
    );
  });
});

describe("detectWordV4()", () => {
  it("should return Invalid input when str is not a string", () => {
    [1, [], {}, null, undefined].forEach((item) => {
      expect(detectWordV4(item)).toBe("Invalid input");
    });
  });

  it("should return Invalid input when str is empty", () => {
    expect(detectWordV4("")).toBe("Invalid input");
  });

  it("should return detect what the word", () => {
    expect(detectWordV4("UcUNFYGaFYFYGtNUH")).toBe("cat");
    expect(detectWordV4("bEEFGBuFBRrHgUHlNFYaYr")).toBe("burglar");
    expect(detectWordV4("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment")).toBe(
      "embezzlement"
    );
  });
});
