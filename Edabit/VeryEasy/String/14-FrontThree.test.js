import { frontThreeV1, frontThreeV2 } from "./14-FrontThree";

describe("frontThreeV1()", () => {
  it("should return Invalid input when str is not a string", () => {
    [1, {}, [], null, undefined].forEach((item) => {
      expect(frontThreeV1(item)).toBe("Invalid input");
    });
  });

  it("should return Invalid input when str is empty", () => {
    expect(frontThreeV1("")).toBe("Invalid input");
  });

  it("should return a new string, which is three copies of the front.", () => {
    expect(frontThreeV1("Python")).toBe("PytPytPyt");
    expect(frontThreeV1("Cucumber")).toBe("CucCucCuc");
    expect(frontThreeV1("bioshock")).toBe("biobiobio");
  });
});
describe("frontThreeV2()", () => {
  it("should return Invalid input when str is not a string", () => {
    [1, {}, [], null, undefined].forEach((item) => {
      expect(frontThreeV2(item)).toBe("Invalid input");
    });
  });

  it("should return Invalid input when str is empty", () => {
    expect(frontThreeV2("")).toBe("Invalid input");
  });

  it("should return a new string, which is three copies of the front.", () => {
    expect(frontThreeV2("Python")).toBe("PytPytPyt");
    expect(frontThreeV2("Cucumber")).toBe("CucCucCuc");
    expect(frontThreeV2("bioshock")).toBe("biobiobio");
  });
});
