import { sortDescending } from "./20-SortNumbersDescending";

describe("Sort Numbers in Descending Order", () => {
  it("should return Invalid input when numb is not a number", () => {
    ["1", [], {}, null, undefined].forEach((item) => {
      expect(sortDescending(item)).toBe("Invalid input");
    });
  });

  it("should return it with it's digits in descending order.", () => {
    expect(sortDescending(123)).toBe(321);
    expect(sortDescending(1254859723)).toBe(9875543221);
    expect(sortDescending(73065)).toBe(76530);
  });
});
