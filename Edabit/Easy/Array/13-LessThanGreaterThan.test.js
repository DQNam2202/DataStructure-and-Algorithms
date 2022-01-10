import {
  arrBetween,
  arrBetweenV2,
  arrBetweenV3,
} from "./13-LessThanGreaterThan";

describe("arrBetweenV1()", () => {
  it("should returns an array containing all the numbers in arr greater than num1 and less than num2", () => {
    expect(arrBetween(3, 8, [1, 5, 95, 0, 4, 7])).toStrictEqual([5, 4, 7]);
    expect(arrBetween(1, 10, [1, 10, 25, 8, 11, 6])).toStrictEqual([8, 6]);
  });

  it("should return [] if array not containing all the numbers in arr greater than num1 and less than num2", () => {
    expect(arrBetween(7, 32, [1, 2, 3, 78])).toStrictEqual([]);
  });
});

describe("arrBetweenV2()", () => {
  it("should returns an array containing all the numbers in arr greater than num1 and less than num2", () => {
    expect(arrBetweenV2(3, 8, [1, 5, 95, 0, 4, 7])).toStrictEqual([5, 4, 7]);
    expect(arrBetweenV2(1, 10, [1, 10, 25, 8, 11, 6])).toStrictEqual([8, 6]);
  });

  it("should return [] if array not containing all the numbers in arr greater than num1 and less than num2", () => {
    expect(arrBetweenV2(7, 32, [1, 2, 3, 78])).toStrictEqual([]);
  });
});

describe("arrBetweenV3()", () => {
  it("should returns an array containing all the numbers in arr greater than num1 and less than num2", () => {
    expect(arrBetweenV3(3, 8, [1, 5, 95, 0, 4, 7])).toStrictEqual([5, 4, 7]);
    expect(arrBetweenV3(1, 10, [1, 10, 25, 8, 11, 6])).toStrictEqual([8, 6]);
  });

  it("should return [] if array not containing all the numbers in arr greater than num1 and less than num2", () => {
    expect(arrBetweenV3(7, 32, [1, 2, 3, 78])).toStrictEqual([]);
  });
});
