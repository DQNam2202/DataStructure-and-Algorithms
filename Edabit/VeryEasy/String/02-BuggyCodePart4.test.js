import { greetingV1, greetingV2, greetingV3 } from "./02-BuggyCodePart4";

describe("greetingV1()", () => {
  it("should return false when str is not a string", () => {
    expect(greetingV1(1)).toBe(false);
    expect(greetingV1([])).toBe(false);
    expect(greetingV1({})).toBe(false);
    expect(greetingV1(null)).toBe(false);
    expect(greetingV1(undefined)).toBe(false);
  });

  it("should return a greeting to users", () => {
    expect(greetingV1("Matt")).toBe("Hello, Matt!");
    expect(greetingV1("Nam")).toBe("Hello, Nam!");
    expect(greetingV1("Helen")).toBe("Hello, Helen!");
    expect(greetingV1("Mubashir")).toBe("Hello, my Love!");
  });

  it("should return false when str is empty", () => {
    expect(greetingV1("")).toBe(false);
  });
});

describe("greetingV2()", () => {
  it("should return false when str is not a string", () => {
    expect(greetingV2(1)).toBe(false);
    expect(greetingV2([])).toBe(false);
    expect(greetingV2({})).toBe(false);
    expect(greetingV2(null)).toBe(false);
    expect(greetingV2(undefined)).toBe(false);
  });

  it("should return a greeting to users", () => {
    expect(greetingV2("Matt")).toBe("Hello, Matt!");
    expect(greetingV2("Nam")).toBe("Hello, Nam!");
    expect(greetingV2("Helen")).toBe("Hello, Helen!");
    expect(greetingV2("Mubashir")).toBe("Hello, my Love!");
  });

  it("should return false when str is empty", () => {
    expect(greetingV2("")).toBe(false);
  });
});

describe("greetingV3()", () => {
  it("should return false when str is not a string", () => {
    expect(greetingV3(1)).toBe(false);
    expect(greetingV3([])).toBe(false);
    expect(greetingV3({})).toBe(false);
    expect(greetingV3(null)).toBe(false);
    expect(greetingV3(undefined)).toBe(false);
  });

  it("should return a greeting to users", () => {
    expect(greetingV3("Matt")).toBe("Hello, Matt!");
    expect(greetingV3("Nam")).toBe("Hello, Nam!");
    expect(greetingV3("Helen")).toBe("Hello, Helen!");
    expect(greetingV3("Mubashir")).toBe("Hello, my Love!");
  });

  it("should return false when str is empty", () => {
    expect(greetingV3("")).toBe(false);
  });
});
