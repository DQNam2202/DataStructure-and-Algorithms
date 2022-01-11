import {
  numberSquaresV1,
  numberSquaresV2,
  numberSquaresV3,
} from "./06-NumberofSquares";

describe("numberSquaresV1", () => {
  it("should return Invalid input when numb is not a number", () => {
    ["1", [], {}, null, undefined].forEach((item) => {
      expect(numberSquaresV1(item)).toBe("Invalid input");
    });
  });

  it("should return sum the number of different squares in an n * n square grid", () => {
    expect(numberSquaresV1(2)).toBe(5);
    expect(numberSquaresV1(4)).toBe(30);
    expect(numberSquaresV1(5)).toBe(55);
  });
});
describe("numberSquaresV3", () => {
  it("should return Invalid input when numb is not a number", () => {
    ["1", [], {}, null, undefined].forEach((item) => {
      expect(numberSquaresV3(item)).toBe("Invalid input");
    });
  });

  it("should return sum the number of different squares in an n * n square grid", () => {
    expect(numberSquaresV3(2)).toBe(5);
    expect(numberSquaresV3(4)).toBe(30);
    expect(numberSquaresV3(5)).toBe(55);
  });
});
