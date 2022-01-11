import { convert } from "./02-ConvertMinutesToSecond";

describe("Convert Minutes To Second", () => {
  it("should return Invalid number when minutes is not a number", () => {
    expect(convert("12")).toBe("Invalid number");
    expect(convert([])).toBe("Invalid number");
    expect(convert({})).toBe("Invalid number");
    expect(convert(null)).toBe("Invalid number");
    expect(convert(undefined)).toBe("Invalid number");
  });
  it("should return second when convert minutes", () => {
    expect(convert(5)).toBe(300);
    expect(convert(3)).toBe(180);
    expect(convert(20)).toBe(1200);
  });
});
