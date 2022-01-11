import { addUpV1, addUpV2, addUpV3 } from "./02-AddUpNumbers";

describe("addUpV1()", () => {
  it("should return Invalid input when numb is not a number", () => {
    ["1", {}, [], null, undefined].forEach((item) => {
      expect(addUpV1(item)).toBe("Invalid input");
    });
  });

  it("should return sum all the numbers from 1 to the number", () => {
    expect(addUpV1(4)).toBe(10);
    expect(addUpV1(13)).toBe(91);
    expect(addUpV1(600)).toBe(180300);
  });

  it("should return Invalid input when positive number is not between 1 and 1000.", () => {
    [-1, 1001, 0, -1200, 1200].forEach((item) => {
      expect(addUpV1(item)).toBe("Invalid input");
    });
  });
});

describe("addUpV2()", () => {
  it("should return Invalid input when numb is not a number", () => {
    ["1", {}, [], null, undefined].forEach((item) => {
      expect(addUpV2(item)).toBe("Invalid input");
    });
  });

  it("should return sum all the numbers from 1 to the number", () => {
    expect(addUpV2(4)).toBe(10);
    expect(addUpV2(13)).toBe(91);
    expect(addUpV2(600)).toBe(180300);
  });

  it("should return Invalid input when positive number is not between 1 and 1000.", () => {
    [-1, 1001, 0, -1200, 1200].forEach((item) => {
      expect(addUpV2(item)).toBe("Invalid input");
    });
  });
});

describe("addUpV3()", () => {
  it("should return Invalid input when numb is not a number", () => {
    ["1", {}, [], null, undefined].forEach((item) => {
      expect(addUpV3(item)).toBe("Invalid input");
    });
  });

  it("should return sum all the numbers from 1 to the number", () => {
    expect(addUpV3(4)).toBe(10);
    expect(addUpV3(13)).toBe(91);
    expect(addUpV3(600)).toBe(180300);
  });

  it("should return Invalid input when positive number is not between 1 and 1000.", () => {
    [-1, 1001, 0, -1200, 1200].forEach((item) => {
      expect(addUpV3(item)).toBe("Invalid input");
    });
  });
});
