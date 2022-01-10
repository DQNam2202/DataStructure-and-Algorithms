import { howManyStickersV1, howManyStickersV2 } from "./42-NumberOfStickers";

describe("howManyStickersV1()", () => {
  it("should return Invalid input when n is not a number", () => {
    ["1", {}, [], undefined, null].forEach((item) => {
      expect(howManyStickersV1(item)).toBe("Invalid input");
    });
  });

  it("should return the number of individual stickers that are needed to cover the whole cube.", () => {
    expect(howManyStickersV1(1)).toBe(6);
    expect(howManyStickersV1(2)).toBe(24);
    expect(howManyStickersV1(3)).toBe(54);
  });
});

describe("howManyStickersV2()", () => {
  it("should return Invalid input when n is not a number", () => {
    ["1", {}, [], undefined, null].forEach((item) => {
      expect(howManyStickersV2(item)).toBe("Invalid input");
    });
  });

  it("should return the number of individual stickers that are needed to cover the whole cube.", () => {
    expect(howManyStickersV2(1)).toBe(6);
    expect(howManyStickersV2(2)).toBe(24);
    expect(howManyStickersV2(3)).toBe(54);
  });
});
