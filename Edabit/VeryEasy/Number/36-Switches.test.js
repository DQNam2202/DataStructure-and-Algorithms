import { posComV1, posComV2 } from "./36-Switches";

describe("On/Off Switches Version 01", () => {
  it("should return Invalid input when numb is not a number", () => {
    ["1", [], {}, undefined, null].forEach((item) => {
      expect(posComV1(item)).toBe("Invalid input");
    });
  });

  it("should return number of switches", () => {
    expect(posComV1(1)).toBe(2);
    expect(posComV1(3)).toBe(8);
    expect(posComV1(10)).toBe(1024);
  });

  it("should return Invalid input if numb is a positive", () => {
    expect(posComV1(-1)).toBe("Invalid input");
  });
});
describe("On/Off Switches Version 02", () => {
  it("should return Invalid input when numb is not a number", () => {
    ["1", [], {}, undefined, null].forEach((item) => {
      expect(posComV2(item)).toBe("Invalid input");
    });
  });

  it("should return number of switches", () => {
    expect(posComV2(1)).toBe(2);
    expect(posComV2(3)).toBe(8);
    expect(posComV2(10)).toBe(1024);
  });

  it("should return Invalid input if numb is a positive", () => {
    expect(posComV2(-1)).toBe("Invalid input");
  });
});
