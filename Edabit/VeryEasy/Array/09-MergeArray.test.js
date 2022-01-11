import { concatArrayV1, concatArrayV3 } from "./09-MergeArray";
describe("concatArrayV1()", () => {
  it("should return Invalid input when arr01 and arr02 is not an Object", () => {
    expect(concatArrayV1(1, 2)).toBe("Invalid input");
    expect(concatArrayV1(1, "2")).toBe("Invalid input");
    expect(concatArrayV1(1, [])).toBe("Invalid input");
    expect(concatArrayV1(1, undefined)).toBe("Invalid input");
    expect(concatArrayV1("1", "2")).toBe("Invalid input");
    expect(concatArrayV1("1", 2)).toBe("Invalid input");
    expect(concatArrayV1("1", [])).toBe("Invalid input");
    expect(concatArrayV1("1", undefined)).toBe("Invalid input");
    expect(concatArrayV1([], "2")).toBe("Invalid input");
    expect(concatArrayV1([], 1)).toBe("Invalid input");
    expect(concatArrayV1([], undefined)).toBe("Invalid input");
    expect(concatArrayV1(undefined, undefined)).toBe("Invalid input");
    expect(concatArrayV1(undefined, "1")).toBe("Invalid input");
    expect(concatArrayV1(undefined, 1)).toBe("Invalid input");
    expect(concatArrayV1(undefined, [])).toBe("Invalid input");
  });
  it("should return [] when arr01 and arr02 is empty array", () => {
    expect(concatArrayV1([], [])).toStrictEqual([]);
  });

  it("should return concatenate two integer arrays", () => {
    expect(concatArrayV1([1, 3, 5], [2, 6, 8])).toStrictEqual([
      1, 3, 5, 2, 6, 8,
    ]);
    expect(concatArrayV1([7, 8], [10, 9, 1, 1, 2])).toStrictEqual([
      7, 8, 10, 9, 1, 1, 2,
    ]);
    expect(concatArrayV1([4, 5, 1], [3, 3, 3, 3, 3])).toStrictEqual([
      4, 5, 1, 3, 3, 3, 3, 3,
    ]);
  });
});
describe("concatArrayV3()", () => {
  it("should return Invalid input when arr01 and arr02 is not an Object", () => {
    expect(concatArrayV3(1, 2)).toBe("Invalid input");
    expect(concatArrayV3(1, "2")).toBe("Invalid input");
    expect(concatArrayV3(1, [])).toBe("Invalid input");
    expect(concatArrayV3(1, undefined)).toBe("Invalid input");
    expect(concatArrayV3("1", "2")).toBe("Invalid input");
    expect(concatArrayV3("1", 2)).toBe("Invalid input");
    expect(concatArrayV3("1", [])).toBe("Invalid input");
    expect(concatArrayV3("1", undefined)).toBe("Invalid input");
    expect(concatArrayV3([], "2")).toBe("Invalid input");
    expect(concatArrayV3([], 1)).toBe("Invalid input");
    expect(concatArrayV3([], undefined)).toBe("Invalid input");
    expect(concatArrayV3(undefined, undefined)).toBe("Invalid input");
    expect(concatArrayV3(undefined, "1")).toBe("Invalid input");
    expect(concatArrayV3(undefined, 1)).toBe("Invalid input");
    expect(concatArrayV3(undefined, [])).toBe("Invalid input");
  });
  it("should return [] when arr01 and arr02 is empty array", () => {
    expect(concatArrayV3([], [])).toStrictEqual([]);
  });

  it("should return concatenate two integer arrays", () => {
    expect(concatArrayV3([1, 3, 5], [2, 6, 8])).toStrictEqual([
      1, 3, 5, 2, 6, 8,
    ]);
    expect(concatArrayV3([7, 8], [10, 9, 1, 1, 2])).toStrictEqual([
      7, 8, 10, 9, 1, 1, 2,
    ]);
    expect(concatArrayV3([4, 5, 1], [3, 3, 3, 3, 3])).toStrictEqual([
      4, 5, 1, 3, 3, 3, 3, 3,
    ]);
  });
});
