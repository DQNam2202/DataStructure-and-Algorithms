import { hasBugV1, hasBugV2 } from "./08-BuggyCode";

describe("hasBugV1()", () => {
  it("should return Invalid input when bool is not a Boolean", () => {
    [1, "1", [], {}, null, undefined].forEach((item) => {
      expect(hasBugV1(item)).toBe("Invalid input");
    });
  });

  it("should return 'sad days' when give value true", () => {
    expect(hasBugV1(true)).toBe("sad days");
  });

  it("should return 'it's a good day' when give value false", () => {
    expect(hasBugV1(false)).toBe("it's a good day");
  });
});

describe("hasBugV2()", () => {
  it("should return Invalid input when bool is not a Boolean", () => {
    [1, "1", [], {}, null, undefined].forEach((item) => {
      expect(hasBugV2(item)).toBe("Invalid input");
    });
  });

  it("should return 'sad days' when give value true", () => {
    expect(hasBugV2(true)).toBe("sad days");
  });

  it("should return 'it's a good day' when give value false", () => {
    expect(hasBugV2(false)).toBe("it's a good day");
  });
});
