import {
  numbVer01,
  numbVer02,
  numbVer03,
  numbVer04,
  numbVer05,
  numbVer06,
} from "./Numb-02";

describe("numbVer01", () => {
  it("should return Invalid number when n is not a number", () => {
    ["1", [], {}, null, undefined].forEach((item) => {
      expect(numbVer01(item)).toBe("Invalid number");
    });
  });
  it("should return Invalid number when n < 1", () => {
    [0, -1, -2, -33, -22, 0.5].forEach((item) => {
      expect(numbVer01(item)).toBe("Invalid number");
    });
  });
  it("should return sum when n >= 1", () => {
    expect(numbVer01(2)).toBe(5);
    expect(numbVer01(5)).toBe(55);
    expect(numbVer01(10)).toBe(385);
  });
});

describe("numbVer02", () => {
  it("should return Invalid number when n is not a number", () => {
    ["1", [], {}, null, undefined].forEach((item) => {
      expect(numbVer02(item)).toBe("Invalid number");
    });
  });
  it("should return Invalid number when n < 1", () => {
    [0, -1, -2, -33, -22, 0.5].forEach((item) => {
      expect(numbVer02(item)).toBe("Invalid number");
    });
  });
  it("should return sum when n >= 1", () => {
    expect(numbVer02(2)).toBe(5);
    expect(numbVer02(5)).toBe(55);
    expect(numbVer02(10)).toBe(385);
  });
});

describe("numbVer03", () => {
  it("should return Invalid number when n is not a number", () => {
    ["1", [], {}, null, undefined].forEach((item) => {
      expect(numbVer03(item)).toBe("Invalid number");
    });
  });
  it("should return Invalid number when n < 1", () => {
    [0, -1, -2, -33, -22, 0.5].forEach((item) => {
      expect(numbVer03(item)).toBe("Invalid number");
    });
  });
  it("should return sum when n >= 1", () => {
    expect(numbVer03(2)).toBe(5);
    expect(numbVer03(5)).toBe(55);
    expect(numbVer03(10)).toBe(385);
  });
});

describe("numbVer04", () => {
  it("should return Invalid number when n is not a number", () => {
    ["1", [], {}, null, undefined].forEach((item) => {
      expect(numbVer04(item)).toBe("Invalid number");
    });
  });
  it("should return Invalid number when n < 1", () => {
    [0, -1, -2, -33, -22, 0.5].forEach((item) => {
      expect(numbVer04(item)).toBe("Invalid number");
    });
  });
  it("should return sum when n >= 1", () => {
    expect(numbVer04(2)).toBe(5);
    expect(numbVer04(5)).toBe(55);
    expect(numbVer04(10)).toBe(385);
  });
});

describe("numbVer05", () => {
  it("should return Invalid number when n is not a number", () => {
    ["1", [], {}, null, undefined].forEach((item) => {
      expect(numbVer05(item)).toBe("Invalid number");
    });
  });
  it("should return Invalid number when n < 1", () => {
    [0, -1, -2, -33, -22, 0.5].forEach((item) => {
      expect(numbVer05(item)).toBe("Invalid number");
    });
  });
  it("should return sum when n >= 1", () => {
    expect(numbVer05(2)).toBe(5);
    expect(numbVer05(5)).toBe(55);
    expect(numbVer05(10)).toBe(385);
  });
});

describe("numbVer06", () => {
  it("should return Invalid number when n is not a number", () => {
    ["1", [], {}, null, undefined].forEach((item) => {
      expect(numbVer06(item)).toBe("Invalid number");
    });
  });
  it("should return Invalid number when n < 1", () => {
    [0, -1, -2, -33, -22, 0.5].forEach((item) => {
      expect(numbVer06(item)).toBe("Invalid number");
    });
  });
  it("should return sum when n >= 1", () => {
    expect(numbVer06(2)).toBe(5);
    expect(numbVer06(5)).toBe(55);
    expect(numbVer06(10)).toBe(385);
  });
});
