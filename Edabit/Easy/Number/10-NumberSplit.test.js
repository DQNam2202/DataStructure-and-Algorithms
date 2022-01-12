import { numberSplit } from "./10-NumberSplit";

describe("numberSplit()", () => {
  it("should return Invalid input when numb is not a number", () => {
    ["1", {}, [], null, undefined].forEach((item) => {
      expect(numberSplit(item)).toBe("Invalid input");
    });
  });

  it("should return an array containing the two halves of the number", () => {
    expect(numberSplit(4)).toStrictEqual([2, 2]);
    expect(numberSplit(10)).toStrictEqual([5, 5]);
    expect(numberSplit(11)).toStrictEqual([5, 6]);
    expect(numberSplit(-9)).toStrictEqual([-5, -4]);
  });
});
