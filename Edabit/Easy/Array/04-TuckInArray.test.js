import { tuckIn } from "./04-TuckInArray";

describe("tuckIn()", () => {
  it("should return Invalid input when arr01 and arr02 is not an Object", () => {
    expect(tuckIn(1, 2)).toBe("Invalid input");
    expect(tuckIn(1, "2")).toBe("Invalid input");
    expect(tuckIn(1, [])).toBe("Invalid input");
    expect(tuckIn(1, undefined)).toBe("Invalid input");
    expect(tuckIn("1", "2")).toBe("Invalid input");
    expect(tuckIn("1", 2)).toBe("Invalid input");
    expect(tuckIn("1", [])).toBe("Invalid input");
    expect(tuckIn("1", undefined)).toBe("Invalid input");
    expect(tuckIn([], "2")).toBe("Invalid input");
    expect(tuckIn([], 1)).toBe("Invalid input");
    expect(tuckIn([], undefined)).toBe("Invalid input");
    expect(tuckIn(undefined, undefined)).toBe("Invalid input");
    expect(tuckIn(undefined, "1")).toBe("Invalid input");
    expect(tuckIn(undefined, 1)).toBe("Invalid input");
    expect(tuckIn(undefined, [])).toBe("Invalid input");
  });
  it("should return [] when arr01 and arr02 is empty array", () => {
    expect(tuckIn([], [])).toStrictEqual([]);
  });

  it("should return insert the second array in the middle of the first array.", () => {
    expect(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9])).toStrictEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    ]);
    expect(tuckIn([15, 150], [45, 75, 35])).toStrictEqual([
      15, 45, 75, 35, 150,
    ]);
    expect(
      tuckIn(
        [
          [1, 2],
          [5, 6],
        ],
        [[3, 4]]
      )
    ).toStrictEqual([
      [1, 2],
      [3, 4],
      [5, 6],
    ]);
  });
});
