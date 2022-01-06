import { eq } from "./09-EvaluateAnEquation";

describe("Evaluate an Equation", () => {
  it("should return Invalid string when str is not a string", () => {
    [1, [], {}, null, undefined].forEach((item) => {
      expect(eq(item)).toBe("Invalid string");
    });
  });

  it("should return result when using eval string", () => {
    expect(eq("1+2")).toBe(3);
    expect(eq("6/(9-7)")).toBe(3);
    expect(eq("3+2-4")).toBe(1);
  });
});
