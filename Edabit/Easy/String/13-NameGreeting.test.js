import { helloNameV1, helloNameV2, helloNameV3 } from "./13-NameGreeting";

describe("helloNameV1()", () => {
  it("should return Invalid input when is not a string", () => {
    [1, null, undefined, [], {}].forEach((item) => {
      expect(helloNameV1(item)).toBe("Invalid input");
    });
  });

  it("should returns a greeting in the form of a string ", () => {
    expect(helloNameV1("Gerald")).toBe("Hello Gerald!");
    expect(helloNameV1("Tiffany")).toBe("Hello Tiffany!");
    expect(helloNameV1("Ed")).toBe("Hello Ed!");
  });

  it("should return Invalid input when str is empty", () => {
    expect(helloNameV1("")).toBe("Invalid input");
  });
});

describe("helloNameV2()", () => {
  it("should return Invalid input when is not a string", () => {
    [1, null, undefined, [], {}].forEach((item) => {
      expect(helloNameV2(item)).toBe("Invalid input");
    });
  });

  it("should returns a greeting in the form of a string ", () => {
    expect(helloNameV2("Gerald")).toBe("Hello Gerald!");
    expect(helloNameV2("Tiffany")).toBe("Hello Tiffany!");
    expect(helloNameV2("Ed")).toBe("Hello Ed!");
  });

  it("should return Invalid input when str is empty", () => {
    expect(helloNameV2("")).toBe("Invalid input");
  });
});

describe("helloNameV3()", () => {
  it("should return Invalid input when is not a string", () => {
    [1, null, undefined, [], {}].forEach((item) => {
      expect(helloNameV3(item)).toBe("Invalid input");
    });
  });

  it("should returns a greeting in the form of a string ", () => {
    expect(helloNameV3("Gerald")).toBe("Hello Gerald!");
    expect(helloNameV3("Tiffany")).toBe("Hello Tiffany!");
    expect(helloNameV3("Ed")).toBe("Hello Ed!");
  });

  it("should return Invalid input when str is empty", () => {
    expect(helloNameV3("")).toBe("Invalid input");
  });
});
