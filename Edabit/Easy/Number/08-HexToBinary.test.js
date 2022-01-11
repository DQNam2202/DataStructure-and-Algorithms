import { toBinary } from "./08-HexToBinary";

describe("Hex To Binary", () => {
  it("should return Invalid input when numb is not a number", () => {
    ["1", [], {}, null, undefined].forEach((item) => {
      expect(toBinary(item)).toBe("Invalid input");
    });
  });

  it("should return the binary equivalent (as a string).", () => {
    expect(toBinary(0xff)).toBe("11111111");
    expect(toBinary(0xaa)).toBe("10101010");
    expect(toBinary(0xfa)).toBe("11111010");
  });
});
