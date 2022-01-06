import { stringIntV1, stringIntV2, stringIntV3 } from "./06-ConvertString";

describe("stringIntV1()", () => {
  it("should Invalid string when str is not a string", () => {
    [1, [], {}, null, undefined].forEach((item) => {
      expect(stringIntV1(item)).toBe("Invalid number");
    });
  });

  it("should Invalid string when str is empty", () => {
    expect(stringIntV1("")).toBe("Invalid number");
    expect(stringIntV1(" ")).toBe("Invalid number");
  });

  it("should return str as an integer after convert string", () => {
    expect(stringIntV1("1000")).toBe(1000);
    expect(stringIntV1("6")).toBe(6);
    expect(stringIntV1("12")).toBe(12);
    expect(stringIntV1(" 124 ")).toBe(124);
    expect(stringIntV1(" 12")).toBe(12);
    expect(stringIntV1("12 ")).toBe(12);
  });
});

describe("stringIntV2()", () => {
  it("should Invalid string when str is not a string", () => {
    [1, [], {}, null, undefined].forEach((item) => {
      expect(stringIntV2(item)).toBe("Invalid number");
    });
  });

  it("should Invalid string when str is empty", () => {
    expect(stringIntV2("")).toBe("Invalid number");
    expect(stringIntV1(" ")).toBe("Invalid number");
  });

  it("should return str as an integer after convert string", () => {
    expect(stringIntV2("1000")).toBe(1000);
    expect(stringIntV2("6")).toBe(6);
    expect(stringIntV2("12")).toBe(12);
    expect(stringIntV2(" 124 ")).toBe(124);
    expect(stringIntV2(" 12")).toBe(12);
    expect(stringIntV2("12 ")).toBe(12);
  });
});

describe("stringIntV3()", () => {
  it("should Invalid string when str is not a string", () => {
    [1, [], {}, null, undefined].forEach((item) => {
      expect(stringIntV3(item)).toBe("Invalid number");
    });
  });

  it("should Invalid string when str is empty", () => {
    expect(stringIntV3("")).toBe("Invalid number");
    expect(stringIntV1(" ")).toBe("Invalid number");
  });

  it("should return str as an integer after convert string", () => {
    expect(stringIntV3("1000")).toBe(1000);
    expect(stringIntV3("6")).toBe(6);
    expect(stringIntV3("12")).toBe(12);
    expect(stringIntV3(" 124 ")).toBe(124);
    expect(stringIntV3(" 12")).toBe(12);
    expect(stringIntV3("12 ")).toBe(12);
  });
});
