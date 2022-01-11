import { howManyWalls } from "./32-HowManyWalls";

describe("How Many Walls", () => {
  it("should returns the number of complete walls", () => {
    expect(howManyWalls(100, 4, 5)).toBe(5);
    expect(howManyWalls(10, 15, 12)).toBe(0);
    expect(howManyWalls(41, 3, 6)).toBe(2);
  });
});
