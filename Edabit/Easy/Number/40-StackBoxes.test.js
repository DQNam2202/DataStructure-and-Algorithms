import { stackBoxesV1, stackBoxesV2, stackBoxesV3 } from "./40-StackBoxes";

describe("stackBoxesV1", () => {
  it("should return Invalid input when n is not a number", () => {
    ["1", [], {}, null, undefined].forEach((item) => {
      expect(stackBoxesV1(item)).toBe("Invalid input");
    });
  });

  it("should return 0 if n equal than 0", () => {
    expect(stackBoxesV1(0)).toBe(0);
  });

  it("should return the number of stacked boxes if n > 0", () => {
    expect(stackBoxesV1(1)).toBe(1);
    expect(stackBoxesV1(2)).toBe(4);
    expect(stackBoxesV1(4)).toBe(16);
  });
});

describe("stackBoxesV2", () => {
  it("should return Invalid input when n is not a number", () => {
    ["1", [], {}, null, undefined].forEach((item) => {
      expect(stackBoxesV2(item)).toBe("Invalid input");
    });
  });

  it("should return 0 if n equal than 0", () => {
    expect(stackBoxesV2(0)).toBe(0);
  });

  it("should return the number of stacked boxes if n > 0", () => {
    expect(stackBoxesV2(1)).toBe(1);
    expect(stackBoxesV2(2)).toBe(4);
    expect(stackBoxesV2(4)).toBe(16);
  });
});
