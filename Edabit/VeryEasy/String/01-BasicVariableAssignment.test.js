import {
  nameStringV1,
  nameStringV2,
  nameStringV3,
  nameStringV4,
  nameStringV5,
} from "./01-BasicVariableAssignment";

describe("Basic Variable Assignment Version 01", () => {
  it("should return false when name is not a string", () => {
    expect(nameStringV1(1)).toBe(false);
    expect(nameStringV1(null)).toBe(false);
    expect(nameStringV1(undefined)).toBe(false);
    expect(nameStringV1([])).toBe(false);
    expect(nameStringV1({})).toBe(false);
  });

  it("should return false when name is empty", () => {
    expect(nameStringV1()).toBe(false);
  });

  it("should return new string after concat vs old string", () => {
    expect(nameStringV1("Mubashir")).toBe("MubashirEdabit");
    expect(nameStringV1("Matt")).toBe("MattEdabit");
    expect(nameStringV1("javaScript")).toBe("javaScriptEdabit");
  });
});

describe("Basic Variable Assignment Version 02", () => {
  it("should return false when name is not a string", () => {
    expect(nameStringV2(1)).toBe(false);
    expect(nameStringV2(null)).toBe(false);
    expect(nameStringV2(undefined)).toBe(false);
    expect(nameStringV2([])).toBe(false);
    expect(nameStringV2({})).toBe(false);
  });

  it("should return false when name is empty", () => {
    expect(nameStringV2()).toBe(false);
  });

  it("should return new string after concat vs old string", () => {
    expect(nameStringV2("Mubashir")).toBe("MubashirEdabit");
    expect(nameStringV2("Matt")).toBe("MattEdabit");
    expect(nameStringV2("javaScript")).toBe("javaScriptEdabit");
  });
});

describe("Basic Variable Assignment Version 03", () => {
  it("should return false when name is not a string", () => {
    expect(nameStringV3(1)).toBe(false);
    expect(nameStringV3(null)).toBe(false);
    expect(nameStringV3(undefined)).toBe(false);
    expect(nameStringV3([])).toBe(false);
    expect(nameStringV3({})).toBe(false);
  });

  it("should return false when name is empty", () => {
    expect(nameStringV3()).toBe(false);
  });

  it("should return new string after concat vs old string", () => {
    expect(nameStringV3("Mubashir")).toBe("MubashirEdabit");
    expect(nameStringV3("Matt")).toBe("MattEdabit");
    expect(nameStringV3("javaScript")).toBe("javaScriptEdabit");
  });
});

describe("Basic Variable Assignment Version 04", () => {
  it("should return false when name is not a string", () => {
    expect(nameStringV4(1)).toBe(false);
    expect(nameStringV4(null)).toBe(false);
    expect(nameStringV4(undefined)).toBe(false);
    expect(nameStringV4([])).toBe(false);
    expect(nameStringV4({})).toBe(false);
  });

  it("should return false when name is empty", () => {
    expect(nameStringV4()).toBe(false);
  });

  it("should return new string after concat vs old string", () => {
    expect(nameStringV4("Mubashir")).toBe("MubashirEdabit");
    expect(nameStringV4("Matt")).toBe("MattEdabit");
    expect(nameStringV4("javaScript")).toBe("javaScriptEdabit");
  });
});

describe("Basic Variable Assignment Version 05", () => {
  it("should return false when name is not a string", () => {
    expect(nameStringV5(1)).toBe(false);
    expect(nameStringV5(null)).toBe(false);
    expect(nameStringV5(undefined)).toBe(false);
    expect(nameStringV5([])).toBe(false);
    expect(nameStringV5({})).toBe(false);
  });

  it("should return false when name is empty", () => {
    expect(nameStringV5()).toBe(false);
  });

  it("should return new string after concat vs old string", () => {
    expect(nameStringV5("Mubashir")).toBe("MubashirEdabit");
    expect(nameStringV5("Matt")).toBe("MattEdabit");
    expect(nameStringV5("javaScript")).toBe("javaScriptEdabit");
  });
});
