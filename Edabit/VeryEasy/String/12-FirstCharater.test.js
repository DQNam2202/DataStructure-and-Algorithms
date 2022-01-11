import {
  newWordV1,
  newWordV2,
  newWordV3,
  newWordV4,
  newWordV5,
  newWordV6,
} from "./12-FirstCharacter";

describe("newWordV1()", () => {
  it("should return invalid input when word is not a string", () => {
    [1, {}, [], undefined, null].forEach((item) => {
      expect(newWordV1(item)).toBe("Invalid input");
    });
  });

  it("should returns the new word without including the first", () => {
    expect(newWordV1("apple")).toBe("pple");
    expect(newWordV1("cherry")).toBe("herry");
    expect(newWordV1("plum")).toBe("lum");
  });

  it("should return Invalid input when word is empty", () => {
    expect(newWordV1("")).toBe("Invalid input");
  });
});

describe("newWordV2()", () => {
  it("should return invalid input when word is not a string", () => {
    [1, {}, [], undefined, null].forEach((item) => {
      expect(newWordV2(item)).toBe("Invalid input");
    });
  });

  it("should returns the new word without including the first", () => {
    expect(newWordV2("apple")).toBe("pple");
    expect(newWordV2("cherry")).toBe("herry");
    expect(newWordV2("plum")).toBe("lum");
  });

  it("should return Invalid input when word is empty", () => {
    expect(newWordV2("")).toBe("Invalid input");
  });
});

describe("newWordV3()", () => {
  it("should return invalid input when word is not a string", () => {
    [1, {}, [], undefined, null].forEach((item) => {
      expect(newWordV3(item)).toBe("Invalid input");
    });
  });

  it("should returns the new word without including the first", () => {
    expect(newWordV3("apple")).toBe("pple");
    expect(newWordV3("cherry")).toBe("herry");
    expect(newWordV3("plum")).toBe("lum");
  });

  it("should return Invalid input when word is empty", () => {
    expect(newWordV3("")).toBe("Invalid input");
  });
});

describe("newWordV4()", () => {
  it("should return invalid input when word is not a string", () => {
    [1, {}, [], undefined, null].forEach((item) => {
      expect(newWordV4(item)).toBe("Invalid input");
    });
  });

  it("should returns the new word without including the first", () => {
    expect(newWordV4("apple")).toBe("pple");
    expect(newWordV4("cherry")).toBe("herry");
    expect(newWordV4("plum")).toBe("lum");
  });

  it("should return Invalid input when word is empty", () => {
    expect(newWordV4("")).toBe("Invalid input");
  });
});
