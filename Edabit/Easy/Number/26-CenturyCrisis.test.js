import { futurePeople } from "./26-CenturyCrisis";
describe("Century Crisis", () => {
  it("should return Invalid number when population and n is not a number", () => {
    expect(futurePeople("1", "2")).toBe("Invalid number");
    expect(futurePeople("1", [])).toBe("Invalid number");
    expect(futurePeople("1", {})).toBe("Invalid number");
    expect(futurePeople("1", null)).toBe("Invalid number");
    expect(futurePeople("1", undefined)).toBe("Invalid number");
    expect(futurePeople([], [])).toBe("Invalid number");
    expect(futurePeople([], "2")).toBe("Invalid number");
    expect(futurePeople([], null)).toBe("Invalid number");
    expect(futurePeople([], {})).toBe("Invalid number");
    expect(futurePeople([], undefined)).toBe("Invalid number");
    expect(futurePeople({}, {})).toBe("Invalid number");
    expect(futurePeople({}, "1")).toBe("Invalid number");
    expect(futurePeople({}, [])).toBe("Invalid number");
    expect(futurePeople({}, null)).toBe("Invalid number");
    expect(futurePeople({}, null)).toBe("Invalid number");
    expect(futurePeople(null, null)).toBe("Invalid number");
    expect(futurePeople(null, "1")).toBe("Invalid number");
    expect(futurePeople(null, {})).toBe("Invalid number");
    expect(futurePeople(null, [])).toBe("Invalid number");
    expect(futurePeople(null, undefined)).toBe("Invalid number");
    expect(futurePeople(undefined, undefined)).toBe("Invalid number");
    expect(futurePeople(undefined, "1")).toBe("Invalid number");
    expect(futurePeople(undefined, {})).toBe("Invalid number");
    expect(futurePeople(undefined, [])).toBe("Invalid number");
    expect(futurePeople(undefined, null)).toBe("Invalid number");
  });

  it("should Return the number of people there will be when the spaceship is complete.", () => {
    expect(futurePeople(256, 2)).toBe(976);
    expect(futurePeople(3248, 6)).toBe(5408);
    expect(futurePeople(5240, 3)).toBe(6320);
  });
});
