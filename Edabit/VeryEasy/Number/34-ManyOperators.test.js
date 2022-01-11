import { operateV1, operateV2, operateV3, operateV4 } from "./34-ManyOperator";

describe("operateV1()", () => {
  it("should return result when input is success", () => {
    expect(operateV1(1, 2, "+")).toBe(3);
    expect(operateV1(7, 10, "-")).toBe(-3);
    expect(operateV1(20, 10, "%")).toBe(0);
    expect(operateV1(20, 10, "*")).toBe(200);
    expect(operateV1(20, 10, "/")).toBe(2);
  });
});

describe("operateV2()", () => {
  it("should return result when input is success", () => {
    expect(operateV2(1, 2, "+")).toBe(3);
    expect(operateV2(7, 10, "-")).toBe(-3);
    expect(operateV2(20, 10, "%")).toBe(0);
    expect(operateV2(20, 10, "*")).toBe(200);
    expect(operateV2(20, 10, "/")).toBe(2);
  });
});

describe("operateV3()", () => {
  it("should return result when input is success", () => {
    expect(operateV3(1, 2, "+")).toBe(3);
    expect(operateV3(7, 10, "-")).toBe(-3);
    expect(operateV3(20, 10, "%")).toBe(0);
    expect(operateV3(20, 10, "*")).toBe(200);
    expect(operateV3(20, 10, "/")).toBe(2);
  });
});

describe("operateV4()", () => {
  it("should return result when input is success", () => {
    expect(operateV4(1, 2, "+")).toBe(3);
    expect(operateV4(7, 10, "-")).toBe(-3);
    expect(operateV4(20, 10, "%")).toBe(0);
    expect(operateV4(20, 10, "*")).toBe(200);
    expect(operateV4(20, 10, "/")).toBe(2);
  });
});
