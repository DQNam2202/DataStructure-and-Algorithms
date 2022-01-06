import { isEvenV1, isEvenV2 } from "./23-isEven";

describe("isEvenV1", () => {
  it("should return Invalid number when numb is not a number", () => {
    ["1", [], {}, null, undefined].forEach((item) => {
      expect(isEvenV1(item)).toBe("Invalid number");
    });
  });

  it("should return true if the given integer is even", () => {
    [2, 4, 6, 8, 12, 14, 16, 18, 20, 22, 100].forEach((item) => {
      expect(isEvenV1(item)).toBe(true);
    });
  });

  it("should return false if the given integer is odd", () => {
    [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 111, 121].forEach((item) => {
      expect(isEvenV1(item)).toBe(false);
    });
  });
});

describe("isEvenV2", () => {
  it("should return Invalid number when numb is not a number", () => {
    ["1", [], {}, null, undefined].forEach((item) => {
      expect(isEvenV2(item)).toBe("Invalid number");
    });
  });

  it("should return true if the given integer is even", () => {
    [2, 4, 6, 8, 12, 14, 16, 18, 20, 22, 100].forEach((item) => {
      expect(isEvenV2(item)).toBe(true);
    });
  });

  it("should return false if the given integer is odd", () => {
    [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 111, 121].forEach((item) => {
      expect(isEvenV1(item)).toBe(false);
    });
  });
});
