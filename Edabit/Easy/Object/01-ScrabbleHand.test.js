import { maximumScore } from "./01-ScrabbleHand";

describe("maximumScore", () => {
  it("should return Invalid inpout when titleHand is not an Object", () => {
    [1, "2", undefined].forEach((item) => {
      expect(maximumScore(item)).toBe("Invalid input");
    });
  });

  it("should returns the maximum possible score", () => {
    expect(
      maximumScore([
        { tile: "B", score: 2 },
        { tile: "V", score: 4 },
        { tile: "F", score: 4 },
        { tile: "U", score: 1 },
        { tile: "D", score: 2 },
        { tile: "O", score: 1 },
        { tile: "U", score: 1 },
      ])
    ).toBe(15);

    expect(
      maximumScore([
        { tile: "N", score: 1 },
        { tile: "K", score: 5 },
        { tile: "Z", score: 10 },
        { tile: "X", score: 8 },
        { tile: "D", score: 2 },
        { tile: "A", score: 1 },
        { tile: "E", score: 1 },
      ])
    ).toBe(28);
  });
});
