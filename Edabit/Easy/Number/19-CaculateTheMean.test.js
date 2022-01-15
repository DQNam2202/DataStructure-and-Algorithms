import { meanV1, meanV2, meanV3, meanV4 } from "./19-CaculateTheMean";

describe("meanV1", () => {
  it("should return invalid input when arr is not a Object", () => {
    [1, "1", undefined].forEach((item) => {
      expect(meanV1(item)).toBe("Invalid input");
    });
  });

  it("should return Invalid input when arr is empty", () => {
    expect(meanV1([])).toBe("Invalid input");
  });

  it("should  returns the mean (average) of all those numbers.", () => {
    expect(meanV1([1, 0, 4, 5, 2, 4, 1, 2, 3, 3, 3])).toBe(2.55);
    expect(meanV1([324, 543, 654, 9876])).toBe(2849.25);
    expect(meanV1([0, 0, 0, 0])).toBe(0);
    expect(meanV1([30, 40, 20, 100, 30])).toBe(44);
    expect(meanV1([1, 1, 1, 0])).toBe(0.75);
    expect(meanV1([1, 1, 0, 1, 2, 1, 1, 1, 0, 0])).toBe(0.8);
    expect(meanV1([10000])).toBe(10000);
  });
});

describe("meanV2", () => {
  it("should return invalid input when arr is not a Object", () => {
    [1, "1", undefined].forEach((item) => {
      expect(meanV2(item)).toBe("Invalid input");
    });
  });

  it("should return Invalid input when arr is empty", () => {
    expect(meanV2([])).toBe("Invalid input");
  });

  it("should  returns the mean (average) of all those numbers.", () => {
    expect(meanV2([1, 0, 4, 5, 2, 4, 1, 2, 3, 3, 3])).toBe(2.55);
    expect(meanV2([324, 543, 654, 9876])).toBe(2849.25);
    expect(meanV2([0, 0, 0, 0])).toBe(0);
    expect(meanV2([30, 40, 20, 100, 30])).toBe(44);
    expect(meanV2([1, 1, 1, 0])).toBe(0.75);
    expect(meanV2([1, 1, 0, 1, 2, 1, 1, 1, 0, 0])).toBe(0.8);
    expect(meanV2([10000])).toBe(10000);
  });
});

describe("meanV3", () => {
  it("should return invalid input when arr is not a Object", () => {
    [1, "1", undefined].forEach((item) => {
      expect(meanV3(item)).toBe("Invalid input");
    });
  });

  it("should return Invalid input when arr is empty", () => {
    expect(meanV3([])).toBe("Invalid input");
  });

  it("should  returns the mean (average) of all those numbers.", () => {
    expect(meanV3([1, 0, 4, 5, 2, 4, 1, 2, 3, 3, 3])).toBe(2.55);
    expect(meanV3([324, 543, 654, 9876])).toBe(2849.25);
    expect(meanV3([0, 0, 0, 0])).toBe(0);
    expect(meanV3([30, 40, 20, 100, 30])).toBe(44);
    expect(meanV3([1, 1, 1, 0])).toBe(0.75);
    expect(meanV3([1, 1, 0, 1, 2, 1, 1, 1, 0, 0])).toBe(0.8);
    expect(meanV3([10000])).toBe(10000);
  });
});

describe("meanV4", () => {
  it("should return invalid input when arr is not a Object", () => {
    [1, "1", undefined].forEach((item) => {
      expect(meanV4(item)).toBe("Invalid input");
    });
  });

  it("should return Invalid input when arr is empty", () => {
    expect(meanV4([])).toBe("Invalid input");
  });

  it("should  returns the mean (average) of all those numbers.", () => {
    expect(meanV4([1, 0, 4, 5, 2, 4, 1, 2, 3, 3, 3])).toBe(2.55);
    expect(meanV4([324, 543, 654, 9876])).toBe(2849.25);
    expect(meanV4([0, 0, 0, 0])).toBe(0);
    expect(meanV4([30, 40, 20, 100, 30])).toBe(44);
    expect(meanV4([1, 1, 1, 0])).toBe(0.75);
    expect(meanV4([1, 1, 0, 1, 2, 1, 1, 1, 0, 0])).toBe(0.8);
    expect(meanV4([10000])).toBe(10000);
  });
});
