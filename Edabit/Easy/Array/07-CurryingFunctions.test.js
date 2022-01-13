import { multiply } from "./07-CurryingFunctions";

describe("multiply()", () => {
  it("should return Invalid input when arr is not an Object", () => {
    [1, "2", undefined].forEach((item) => {
      expect(multiply(item)).toBe("Invalid input");
    });
  });

  it("should return Invalid input when n is not a number", () => {
    ["1", [], {}, null, undefined].forEach((item) => {
      expect(multiply([1, 2, 3])(item)).toBe("Invalid input");
    });
  });

  it("should return array should consist of each of the elements from the first array multiplied by the integer.", () => {
    expect(multiply([1, 2, 3])(2)).toStrictEqual([2, 4, 6]);
    expect(multiply([4, 6, 5])(10)).toStrictEqual([40, 60, 50]);
    expect(multiply([1, 2, 3])(0)).toStrictEqual([0, 0, 0]);
  });
});
