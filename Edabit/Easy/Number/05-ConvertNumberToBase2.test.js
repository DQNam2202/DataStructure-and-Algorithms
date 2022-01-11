import { binary } from "./05-ConvertNumberToBase2";

describe("Binary()", () => {
  it("should return Invalid input when numb is not a number", () => {
    ["2", [], {}, null, undefined].forEach((item) => {
      expect(binary(item)).toBe("Invalid input");
    });
  });

  it("should return returns a base-2 (binary) representation of a base-10 (decimal) string number.", () => {
    expect(binary(1)).toBe("1");
    expect(binary(5)).toBe("101");
    expect(binary(10)).toBe("1010");
  });
});
