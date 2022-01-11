import { volumeOfBox, volumeOfBoxV2 } from "./15-VolumeABox";

describe("volumeABox", () => {
  it("should return Invalid input when sizes is not a obj", () => {
    [1, "1", undefined].forEach((item) => {
      expect(volumeOfBox(item)).toBe("Invalid input");
    });
  });

  it("should return the volume of the box.", () => {
    expect(volumeOfBox({ width: 2, length: 5, height: 1 })).toBe(10);
    expect(volumeOfBox({ width: 4, length: 2, height: 2 })).toBe(16);
    expect(volumeOfBox({ width: 2, length: 3, height: 5 })).toBe(30);
  });
});

describe("volumeOfBoxV2()", () => {
  it("should return Invalid input when sizes is not a obj", () => {
    [1, "1", undefined].forEach((item) => {
      expect(volumeOfBoxV2(item)).toBe("Invalid input");
    });
  });

  it("should return the volume of the box.", () => {
    expect(volumeOfBoxV2({ width: 2, length: 5, height: 1 })).toBe(10);
    expect(volumeOfBoxV2({ width: 4, length: 2, height: 2 })).toBe(16);
    expect(volumeOfBoxV2({ width: 2, length: 3, height: 5 })).toBe(30);
  });
});
