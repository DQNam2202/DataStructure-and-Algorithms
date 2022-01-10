import { areaShapeV1, areaShapeV2, areaShapeV3 } from "./41-AreaFinder";

describe("areaShapeV1()", () => {
  it("should return calculates the area of that shape", () => {
    expect(areaShapeV1(2, 3, "triangle")).toBe(3);
    expect(areaShapeV1(8, 6, "parallelogram")).toBe(48);
    expect(areaShapeV1(2.9, 1.3, "parallelogram")).toBe(3.77);
  });
});

describe("areaShapeV2()", () => {
  it("should return calculates the area of that shape", () => {
    expect(areaShapeV2(2, 3, "triangle")).toBe(3);
    expect(areaShapeV2(8, 6, "parallelogram")).toBe(48);
    expect(areaShapeV2(2.9, 1.3, "parallelogram")).toBe(3.77);
  });
});

describe("areaShapeV3()", () => {
  it("should return calculates the area of that shape", () => {
    expect(areaShapeV3(2, 3, "triangle")).toBe(3);
    expect(areaShapeV3(8, 6, "parallelogram")).toBe(48);
    expect(areaShapeV3(2.9, 1.3, "parallelogram")).toBe(3.77);
  });
});
