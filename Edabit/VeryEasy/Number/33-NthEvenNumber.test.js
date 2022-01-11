import { nthEvenV1, nthEvenV2 } from "./33-NthEvenNumber";

describe("Nth Even Number", () => {
  it("should return Invalid input when n is not a number", () => {
    ["1", {}, [], null, undefined].forEach((item) => {
      expect(nthEvenV1(item)).toBe("Invalid number");
    });
  });

  it("should returns the nth even number", () => {
    expect(nthEvenV1(1)).toBe(0);
    expect(nthEvenV1(2)).toBe(2);
    expect(nthEvenV1(100)).toBe(198);
    expect(nthEvenV1(10)).toBe(18);
    expect(nthEvenV1(100)).toBe(198);
    expect(nthEvenV1(22)).toBe(42);
  });
});

describe("Nth Even Number", () => {
  it("should return Invalid input when n is not a number", () => {
    ["1", {}, [], null, undefined].forEach((item) => {
      expect(nthEvenV2(item)).toBe("Invalid number");
    });
  });

  it("should returns the nth even number", () => {
    expect(nthEvenV2(1)).toBe(0);
    expect(nthEvenV2(2)).toBe(2);
    expect(nthEvenV2(100)).toBe(198);
    expect(nthEvenV2(10)).toBe(18);
    expect(nthEvenV2(100)).toBe(198);
    expect(nthEvenV2(22)).toBe(42);
  });
});
