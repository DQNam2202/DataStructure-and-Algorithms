import {
  numbVer01,
  numbVer02,
  numbVer03,
  numbVer04,
  numbVer05,
  numbVer06,
} from "./Numb-03";

describe("numbVer01()", () => {
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

  it("should return sum when n > 1", () => {
    expect(numbVer01(3)).toBe(1.83);
    expect(numbVer01(5)).toBe(2.28);
    expect(numbVer01(7)).toBe(2.59);
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
    expect(numbVer02(3)).toBe(1.83);
    expect(numbVer02(5)).toBe(2.28);
    expect(numbVer02(7)).toBe(2.59);
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
    expect(numbVer03(3)).toBe(1.83);
    expect(numbVer03(5)).toBe(2.28);
    expect(numbVer03(7)).toBe(2.59);
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
    expect(numbVer04(3)).toBe(1.83);
    expect(numbVer04(5)).toBe(2.28);
    expect(numbVer04(7)).toBe(2.59);
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
    expect(numbVer05(3)).toBe(1.83);
    expect(numbVer05(5)).toBe(2.28);
    expect(numbVer05(7)).toBe(2.59);
  });
});
