import { acceptIntoMovie } from "./28-MovieAdmittance";

describe("Movie Theatre Admittance", () => {
  it("should return Invalid input when age is not a number and supervised is not a boolean", () => {
    expect(acceptIntoMovie("1", "2")).toBe("Invalid input");
    expect(acceptIntoMovie("1", [])).toBe("Invalid input");
    expect(acceptIntoMovie("1", {})).toBe("Invalid input");
    expect(acceptIntoMovie("1", null)).toBe("Invalid input");
    expect(acceptIntoMovie("1", undefined)).toBe("Invalid input");
    expect(acceptIntoMovie([], [])).toBe("Invalid input");
    expect(acceptIntoMovie([], "2")).toBe("Invalid input");
    expect(acceptIntoMovie([], null)).toBe("Invalid input");
    expect(acceptIntoMovie([], {})).toBe("Invalid input");
    expect(acceptIntoMovie([], undefined)).toBe("Invalid input");
    expect(acceptIntoMovie({}, {})).toBe("Invalid input");
    expect(acceptIntoMovie({}, "1")).toBe("Invalid input");
    expect(acceptIntoMovie({}, [])).toBe("Invalid input");
    expect(acceptIntoMovie({}, null)).toBe("Invalid input");
    expect(acceptIntoMovie({}, null)).toBe("Invalid input");
    expect(acceptIntoMovie(null, null)).toBe("Invalid input");
    expect(acceptIntoMovie(null, "1")).toBe("Invalid input");
    expect(acceptIntoMovie(null, {})).toBe("Invalid input");
    expect(acceptIntoMovie(null, [])).toBe("Invalid input");
    expect(acceptIntoMovie(null, undefined)).toBe("Invalid input");
    expect(acceptIntoMovie(undefined, undefined)).toBe("Invalid input");
    expect(acceptIntoMovie(undefined, "1")).toBe("Invalid input");
    expect(acceptIntoMovie(undefined, {})).toBe("Invalid input");
    expect(acceptIntoMovie(undefined, [])).toBe("Invalid input");
    expect(acceptIntoMovie(undefined, null)).toBe("Invalid input");
    expect(acceptIntoMovie(1, "2")).toBe("Invalid input");
    expect(acceptIntoMovie(1, [])).toBe("Invalid input");
    expect(acceptIntoMovie(1, {})).toBe("Invalid input");
    expect(acceptIntoMovie(1, null)).toBe("Invalid input");
    expect(acceptIntoMovie(1, undefined)).toBe("Invalid input");
  });

  it("should return true when age is a number and supervised is a boolean", () => {
    expect(acceptIntoMovie(14, true)).toBe(true);
    expect(acceptIntoMovie(15, false)).toBe(true);
    expect(acceptIntoMovie(16, false)).toBe(true);
  });

  it("should return false when age < 15 or supervised equal than false", () => {
    expect(acceptIntoMovie(14, false)).toBe(false);
    expect(acceptIntoMovie(13, false)).toBe(false);
    expect(acceptIntoMovie(10, false)).toBe(false);
  });
});
