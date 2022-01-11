import { footballPointsV1, footballPointsV2 } from "./06-FootballPoint";

describe("footballPointsV1()", () => {
  it("should return result when wins, draws, losses is correct", () => {
    expect(footballPointsV1(0, 0, 1)).toBe(0);
    expect(footballPointsV1(5, 0, 2)).toBe(15);
    expect(footballPointsV1(3, 4, 2)).toBe(13);
    expect(footballPointsV1(0, 4, 2)).toBe(4);
    expect(footballPointsV1(0, 0, 0)).toBe(0);
    expect(footballPointsV1(0, 4, 0)).toBe(4);
    expect(footballPointsV1(5, 0, 0)).toBe(15);
    expect(footballPointsV1(0, 0, 0)).toBe(0);
    expect(footballPointsV1(0, 0, -2)).toBe(undefined);
    expect(footballPointsV1(-1, -2, -2)).toBe(undefined);
  });
});

describe("footballPointsV2()", () => {
  it("should return result when wins, draws, losses is correct", () => {
    expect(footballPointsV2(0, 0, 1)).toBe(0);
    expect(footballPointsV2(5, 0, 2)).toBe(15);
    expect(footballPointsV2(3, 4, 2)).toBe(13);
    expect(footballPointsV2(0, 4, 2)).toBe(4);
    expect(footballPointsV2(0, 0, 0)).toBe(0);
    expect(footballPointsV2(0, 4, 0)).toBe(4);
    expect(footballPointsV2(5, 0, 0)).toBe(15);
    expect(footballPointsV2(0, 0, 0)).toBe(0);
    expect(footballPointsV2(0, 0, -2)).toBe(undefined);
    expect(footballPointsV2(-1, -2, -2)).toBe(undefined);
  });
});
