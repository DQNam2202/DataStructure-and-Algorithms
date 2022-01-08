import { circleOrSquare } from "./37-CircleorSquare";

describe("circleOrSquare()", () => {
  it("should return Invalid input when rad and area is not a number", () => {
    expect(circleOrSquare("1", "2")).toBe("Invalid input");
    expect(circleOrSquare("1", [])).toBe("Invalid input");
    expect(circleOrSquare("1", {})).toBe("Invalid input");
    expect(circleOrSquare("1", null)).toBe("Invalid input");
    expect(circleOrSquare("1", undefined)).toBe("Invalid input");
    expect(circleOrSquare([], [])).toBe("Invalid input");
    expect(circleOrSquare([], "2")).toBe("Invalid input");
    expect(circleOrSquare([], null)).toBe("Invalid input");
    expect(circleOrSquare([], {})).toBe("Invalid input");
    expect(circleOrSquare([], undefined)).toBe("Invalid input");
    expect(circleOrSquare({}, {})).toBe("Invalid input");
    expect(circleOrSquare({}, "1")).toBe("Invalid input");
    expect(circleOrSquare({}, [])).toBe("Invalid input");
    expect(circleOrSquare({}, null)).toBe("Invalid input");
    expect(circleOrSquare({}, null)).toBe("Invalid input");
    expect(circleOrSquare(null, null)).toBe("Invalid input");
    expect(circleOrSquare(null, "1")).toBe("Invalid input");
    expect(circleOrSquare(null, {})).toBe("Invalid input");
    expect(circleOrSquare(null, [])).toBe("Invalid input");
    expect(circleOrSquare(null, undefined)).toBe("Invalid input");
    expect(circleOrSquare(undefined, undefined)).toBe("Invalid input");
    expect(circleOrSquare(undefined, "1")).toBe("Invalid input");
    expect(circleOrSquare(undefined, {})).toBe("Invalid input");
    expect(circleOrSquare(undefined, [])).toBe("Invalid input");
    expect(circleOrSquare(undefined, null)).toBe("Invalid input");
  });

  it("should return true if the circumference of the circle is greater than the square's perimeter", () => {
    expect(circleOrSquare(16, 625)).toBe(true);
    expect(circleOrSquare(8, 144)).toBe(true);
  });

  it("should return false if the square's perimeter is greater than the circumference of the circle.", () => {
    expect(circleOrSquare(5, 100)).toBe(false);
  });
});
