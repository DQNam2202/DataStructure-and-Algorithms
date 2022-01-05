import { profitableGamble } from "./12-ProfitableGamble";

describe("profitableGamble()", () => {
  it("should return false when prob, prize, pay is not a number", () => {
    expect(profitableGamble("0.2", "50", "9")).toBe(false);
    expect(profitableGamble(0.2, "50", "9")).toBe(false);
    expect(profitableGamble("0.2", 50, "9")).toBe(false);
    expect(profitableGamble("0.2", "50", 9)).toBe(false);
    expect(profitableGamble("0.2", 50, 9)).toBe(false);
    expect(profitableGamble(0.2, "50", 9)).toBe(false);
    expect(profitableGamble(0.2, 50, "9")).toBe(false);
    expect(profitableGamble(undefined, undefined, undefined)).toBe(false);
    expect(profitableGamble("0.2", undefined, undefined)).toBe(false);
    expect(profitableGamble(undefined, "50", undefined)).toBe(false);
    expect(profitableGamble(undefined, undefined, "9")).toBe(false);
    expect(profitableGamble(0.2, undefined, undefined)).toBe(false);
    expect(profitableGamble(undefined, 9, undefined)).toBe(false);
    expect(profitableGamble(undefined, undefined, 9)).toBe(false);
    expect(profitableGamble(null, null, null)).toBe(false);
    expect(profitableGamble("0.2", null, null)).toBe(false);
    expect(profitableGamble(null, "50", null)).toBe(false);
    expect(profitableGamble(null, null, "9")).toBe(false);
    expect(profitableGamble(0.2, null, null)).toBe(false);
    expect(profitableGamble(null, 9, null)).toBe(false);
    expect(profitableGamble(null, null, 9)).toBe(false);
    expect(profitableGamble(0.2, null, undefined)).toBe(false);
    expect(profitableGamble(null, 9, undefined)).toBe(false);
    expect(profitableGamble(null, undefined, 9)).toBe(false);
    expect(profitableGamble(0.2, undefined, null)).toBe(false);
    expect(profitableGamble(undefined, 9, null)).toBe(false);
    expect(profitableGamble(undefined, null, 9)).toBe(false);
  });

  it("should returm false if prob * prize < pay", () => {
    expect(profitableGamble(0.9, 1, 2)).toBe(false);
    expect(profitableGamble(0.2, 5, 9)).toBe(false);
    expect(profitableGamble(0.9, 3, 3)).toBe(false);
  });

  it("should returm true if prob * prize > pay", () => {
    expect(profitableGamble(0.2, 50, 9)).toBe(true);
    expect(profitableGamble(0.3, 5, 1)).toBe(true);
    expect(profitableGamble(0.9, 3, 2)).toBe(true);
  });
});
