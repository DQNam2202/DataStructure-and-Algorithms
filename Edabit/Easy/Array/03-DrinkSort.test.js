import { sortDrinkByPrice } from "./03-DrinkSort";

describe("sortDrinkByPriceV1()", () => {
  it("should return Invalid input when drink is not an Object", () => {
    [1, "2", undefined].forEach((item) => {
      expect(sortDrinkByPrice(item)).toBe("Invalid input");
    });
  });

  it("should return the drinks objects sorted by price in ascending order.", () => {
    expect(
      sortDrinkByPrice([
        { name: "lemonade", price: 50 },
        { name: "lime", price: 10 },
      ])
    ).toStrictEqual([
      { name: "lime", price: 10 },
      { name: "lemonade", price: 50 },
    ]);
  });

  it("should return [] if drink is empty", () => {
    expect(sortDrinkByPrice([])).toStrictEqual([]);
  });
});
