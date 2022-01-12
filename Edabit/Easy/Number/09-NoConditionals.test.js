import { flipV1, flipV2, flipV3, flipV4 } from "./09-NoConditionals";

describe("flipV1(0", () => {
  it("should return Invalid input when is not a number", () => {
    ["1", null, undefined, [], {}].forEach((item) => {
      expect(flipV1(item)).toBe("Invalid input");
    });
  });

  it("should return 0 when numb is 1", () => {
    expect(flipV1(0)).toBe(1);
  });

  it("should return 1 when numb is 0", () => {
    expect(flipV1(1)).toBe(0);
  });
});

describe("flipV2(0", () => {
  it("should return Invalid input when is not a number", () => {
    ["1", null, undefined, [], {}].forEach((item) => {
      expect(flipV2(item)).toBe("Invalid input");
    });
  });

  it("should return 0 when numb is 1", () => {
    expect(flipV2(0)).toBe(1);
  });

  it("should return 1 when numb is 0", () => {
    expect(flipV2(1)).toBe(0);
  });
});

describe("flipV3(0", () => {
  it("should return Invalid input when is not a number", () => {
    ["1", null, undefined, [], {}].forEach((item) => {
      expect(flipV3(item)).toBe("Invalid input");
    });
  });

  it("should return 0 when numb is 1", () => {
    expect(flipV3(0)).toBe(1);
  });

  it("should return 1 when numb is 0", () => {
    expect(flipV3(1)).toBe(0);
  });
});

describe("flipV4(0", () => {
  it("should return Invalid input when is not a number", () => {
    ["1", null, undefined, [], {}].forEach((item) => {
      expect(flipV4(item)).toBe("Invalid input");
    });
  });

  it("should return 0 when numb is 1", () => {
    expect(flipV4(0)).toBe(1);
  });

  it("should return 1 when numb is 0", () => {
    expect(flipV4(1)).toBe(0);
  });
});
