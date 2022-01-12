import {
  seriesResistanceV1,
  seriesResistanceV2,
  seriesResistanceV3,
} from "./11-SumOfResistance";

describe("seriesResistanceV1()", () => {
  it("should return Invalid input when arr is not an Object", () => {
    [1, "1", undefined].forEach((item) => {
      expect(seriesResistanceV1(item)).toBe("Invalid input");
    });
  });

  it("should return calculates the total resistance of the circuit in ohms.", () => {
    expect(seriesResistanceV1([1, 5, 6, 3])).toBe("15 ohms");
    expect(seriesResistanceV1([16, 3.5, 6])).toBe("25.5 ohms");
  });

  it("should return ohm if sum <= 1.0", () => {
    expect(seriesResistanceV1([0.5, 0.5])).toBe("1 ohm");
  });

  it("should return Invalid input when arr is empty", () => {
    expect(seriesResistanceV1([])).toBe("Invalid input");
  });
});

describe("seriesResistanceV2()", () => {
  it("should return Invalid input when arr is not an Object", () => {
    [1, "1", undefined].forEach((item) => {
      expect(seriesResistanceV2(item)).toBe("Invalid input");
    });
  });

  it("should return calculates the total resistance of the circuit in ohms.", () => {
    expect(seriesResistanceV2([1, 5, 6, 3])).toBe("15 ohms");
    expect(seriesResistanceV2([16, 3.5, 6])).toBe("25.5 ohms");
  });

  it("should return ohm if sum <= 1.0", () => {
    expect(seriesResistanceV2([0.5, 0.5])).toBe("1 ohm");
  });

  it("should return Invalid input when arr is empty", () => {
    expect(seriesResistanceV2([])).toBe("Invalid input");
  });
});

describe("seriesResistanceV3()", () => {
  it("should return Invalid input when arr is not an Object", () => {
    [1, "1", undefined].forEach((item) => {
      expect(seriesResistanceV3(item)).toBe("Invalid input");
    });
  });

  it("should return calculates the total resistance of the circuit in ohms.", () => {
    expect(seriesResistanceV3([1, 5, 6, 3])).toBe("15 ohms");
    expect(seriesResistanceV3([16, 3.5, 6])).toBe("25.5 ohms");
  });

  it("should return ohm if sum <= 1.0", () => {
    expect(seriesResistanceV3([0.5, 0.5])).toBe("1 ohm");
  });

  it("should return Invalid input when arr is empty", () => {
    expect(seriesResistanceV3([])).toBe("Invalid input");
  });
});
