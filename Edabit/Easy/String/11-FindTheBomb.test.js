import { bomb } from "./11-FindTheBomb";

describe("Find The Boom", () => {
  it("should return Invalid input when str is not a string", () => {
    [1, [], {}, null, undefined].forEach((item) => {
      expect(bomb(item)).toBe("Invalid input");
    });
  });

  it("should returns Invlaid input when str is empty", () => {
    expect(bomb("")).toBe("Invalid input");
  });

  it("should returns 'Duck!!!' ,If found item", () => {
    expect(bomb("There is a bomb.")).toBe("Duck!!!");
    expect(bomb("Hey, did you think there is a bomb?")).toBe("Duck!!!");
    expect(bomb("Hey, did you find the BoMb?")).toBe("Duck!!!");
    expect(bomb("Hey, did BOMB you find?")).toBe("Duck!!!");
  });

  it("should return 'There is no bomb, relax.', If not found item", () => {
    expect(bomb("This goes boom!!!")).toBe("There is no bomb, relax.");
    expect(bomb("Hey, did you find it?")).toBe("There is no bomb, relax.");
  });
});
