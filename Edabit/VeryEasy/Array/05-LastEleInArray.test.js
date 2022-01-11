import {
  getLastItemV1,
  getLastItemV2,
  getLastItemV3,
  getLastItemV4,
  getLastItemV5,
} from "./05-LastEleInArray";

describe("getLastItemV1()", () => {
  it("should return Invalid input when arr is not a object", () => {
    [1, "1", undefined].forEach((item) => {
      expect(getLastItemV1(item)).toBe("Invalid input");
    });
  });
  it("should return Invalid input if input is empty", () => {
    expect(getLastItemV1([])).toBe("Invalid input");
  });
  it("should return last item in array", () => {
    expect(getLastItemV1([1, 2, 3])).toBe(3);
    expect(getLastItemV1(["cat", "dog", "duck"])).toBe("duck");
    expect(getLastItemV1([true, false, true])).toBe(true);
    expect(getLastItemV1([22, "NamDuong", true, "IT"])).toBe("IT");
  });
});

describe("getLastItemV2()", () => {
  it("should return Invalid input when arr is not a object", () => {
    [1, "1", undefined].forEach((item) => {
      expect(getLastItemV2(item)).toBe("Invalid input");
    });
  });
  it("should return Invalid input if input is empty", () => {
    expect(getLastItemV2([])).toBe("Invalid input");
  });
  it("should return last item in array", () => {
    expect(getLastItemV2([1, 2, 3])).toBe(3);
    expect(getLastItemV2(["cat", "dog", "duck"])).toBe("duck");
    expect(getLastItemV2([true, false, true])).toBe(true);
    expect(getLastItemV2([22, "NamDuong", true, "IT"])).toBe("IT");
  });
});

describe("getLastItemV3()", () => {
  it("should return Invalid input when arr is not a object", () => {
    [1, "1", undefined].forEach((item) => {
      expect(getLastItemV3(item)).toBe("Invalid input");
    });
  });
  it("should return Invalid input if input is empty", () => {
    expect(getLastItemV3([])).toBe("Invalid input");
  });
  it("should return last item in array", () => {
    expect(getLastItemV3([1, 2, 3])).toBe(3);
    expect(getLastItemV3(["cat", "dog", "duck"])).toBe("duck");
    expect(getLastItemV3([true, false, true])).toBe(true);
    expect(getLastItemV3([22, "NamDuong", true, "IT"])).toBe("IT");
  });
});

describe("getLastItemV4()", () => {
  it("should return Invalid input when arr is not a object", () => {
    [1, "1", undefined].forEach((item) => {
      expect(getLastItemV4(item)).toBe("Invalid input");
    });
  });
  it("should return Invalid input if input is empty", () => {
    expect(getLastItemV4([])).toBe("Invalid input");
  });
  it("should return last item in array", () => {
    expect(getLastItemV4([1, 2, 3])).toBe(3);
    expect(getLastItemV4(["cat", "dog", "duck"])).toBe("duck");
    expect(getLastItemV4([true, false, true])).toBe(true);
    expect(getLastItemV4([22, "NamDuong", true, "IT"])).toBe("IT");
  });
});
