import {
  numbVer01,
  numbVer02,
  numbVer03,
  numbVer04,
  numbVer05,
} from "./Numb-01";

describe("numbVer01()", () => {
  it("should return Invalid number when n is not a number", () => {
    expect(numbVer01("2")).toBe("Invalid number");
    expect(numbVer01([])).toBe("Invalid number");
    expect(numbVer01({})).toBe("Invalid number");
    expect(numbVer01(undefined)).toBe("Invalid number");
    expect(numbVer01(null)).toBe("Invalid number");
  });

  it("should return Ivalid number when n < 1", () => {
    expect(numbVer01(0)).toBe("Invalid number");
    expect(numbVer01(-1)).toBe("Invalid number");
    expect(numbVer01(-12)).toBe("Invalid number");
  });

  it("should return sum when n >= 1", () => {
    expect(numbVer01(5)).toBe(15);
    expect(numbVer01(10)).toBe(55);
    expect(numbVer01(20)).toBe(210);
    expect(numbVer01(4)).toBe(10);
  });
});

describe("numbVer02()", () => {
  it("should return Invalid number when n is not a number", () => {
    expect(numbVer02("2")).toBe("Invalid number");
    expect(numbVer02([])).toBe("Invalid number");
    expect(numbVer02({})).toBe("Invalid number");
    expect(numbVer02(undefined)).toBe("Invalid number");
    expect(numbVer02(null)).toBe("Invalid number");
  });

  it("should return Ivalid number when n < 1", () => {
    expect(numbVer02(0)).toBe("Invalid number");
    expect(numbVer02(-1)).toBe("Invalid number");
    expect(numbVer02(-12)).toBe("Invalid number");
  });

  it("should return sum when n >= 1", () => {
    expect(numbVer02(5)).toBe(15);
    expect(numbVer02(10)).toBe(55);
    expect(numbVer02(20)).toBe(210);
    expect(numbVer02(4)).toBe(10);
  });
});

describe("numbVer03()", () => {
  it("should return Invalid number when n is not a number", () => {
    expect(numbVer03("2")).toBe("Invalid number");
    expect(numbVer03([])).toBe("Invalid number");
    expect(numbVer03({})).toBe("Invalid number");
    expect(numbVer03(undefined)).toBe("Invalid number");
    expect(numbVer03(null)).toBe("Invalid number");
  });

  it("should return Ivalid number when n < 1", () => {
    expect(numbVer03(0)).toBe("Invalid number");
    expect(numbVer03(-1)).toBe("Invalid number");
    expect(numbVer03(-12)).toBe("Invalid number");
  });

  it("should return sum when n >= 1", () => {
    expect(numbVer03(5)).toBe(15);
    expect(numbVer03(10)).toBe(55);
    expect(numbVer03(20)).toBe(210);
    expect(numbVer03(4)).toBe(10);
  });
});

describe("numbVer04()", () => {
  it("should return Invalid number when n is not a number", () => {
    expect(numbVer04("2")).toBe("Invalid number");
    expect(numbVer04([])).toBe("Invalid number");
    expect(numbVer04({})).toBe("Invalid number");
    expect(numbVer04(undefined)).toBe("Invalid number");
    expect(numbVer04(null)).toBe("Invalid number");
  });

  it("should return Ivalid number when n < 1", () => {
    expect(numbVer04(0)).toBe("Invalid number");
    expect(numbVer04(-1)).toBe("Invalid number");
    expect(numbVer04(-12)).toBe("Invalid number");
  });

  it("should return sum when n >= 1", () => {
    expect(numbVer04(5)).toBe(15);
    expect(numbVer04(10)).toBe(55);
    expect(numbVer04(20)).toBe(210);
    expect(numbVer04(4)).toBe(10);
  });
});

describe("numbVer05()", () => {
  it("should return Invalid number when n is not a number", () => {
    expect(numbVer05("2")).toBe("Invalid number");
    expect(numbVer05([])).toBe("Invalid number");
    expect(numbVer05({})).toBe("Invalid number");
    expect(numbVer05(undefined)).toBe("Invalid number");
    expect(numbVer05(null)).toBe("Invalid number");
  });

  it("should return Ivalid number when n < 1", () => {
    expect(numbVer05(0)).toBe("Invalid number");
    expect(numbVer05(-1)).toBe("Invalid number");
    expect(numbVer05(-12)).toBe("Invalid number");
  });

  it("should return sum when n >= 1", () => {
    expect(numbVer05(5)).toBe(15);
    expect(numbVer05(10)).toBe(55);
    expect(numbVer05(20)).toBe(210);
    expect(numbVer05(4)).toBe(10);
  });
});
