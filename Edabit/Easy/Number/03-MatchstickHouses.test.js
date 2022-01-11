import { matchHouses } from "./03-MatchstickHouses";

describe("Matchstick Houses", () => {
  it("should return Invalid input when step is not a number", () => {
    ["1", {}, [], null, undefined].forEach((item) => {
      expect(matchHouses(item)).toBe("Invalid input");
    });
  });

  it("should return the number of matchsticks in that step.", () => {
    expect(matchHouses(1)).toBe(6);
    expect(matchHouses(4)).toBe(21);
    expect(matchHouses(87)).toBe(436);
  });

  it("should return invalid input when step < 0", () => {
    expect(matchHouses(-1)).toBe("Invalid input");
  });

  it("should return 0 when step equal than 0", () => {
    expect(matchHouses(0)).toBe(0);
  });
});
