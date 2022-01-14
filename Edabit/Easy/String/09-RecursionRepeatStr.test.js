import {
  repetitionV1,
  repetitionV2,
  repetitionV3,
} from "./09-RecursionRepeatStr";

describe("repetitionV1()", () => {
  it("should return Invalid input when txt is not a string and numb is not numbber", () => {
    expect(repetitionV1({}, "2")).toBe("Invalid input");
    expect(repetitionV1({}, [])).toBe("Invalid input");
    expect(repetitionV1({}, {})).toBe("Invalid input");
    expect(repetitionV1({}, null)).toBe("Invalid input");
    expect(repetitionV1({}, undefined)).toBe("Invalid input");
    expect(repetitionV1(1, [])).toBe("Invalid input");
    expect(repetitionV1(1, "2")).toBe("Invalid input");
    expect(repetitionV1(1, null)).toBe("Invalid input");
    expect(repetitionV1(1, {})).toBe("Invalid input");
    expect(repetitionV1(1, undefined)).toBe("Invalid input");
    expect(repetitionV1(undefined, undefined)).toBe("Invalid input");
    expect(repetitionV1(undefined, "1")).toBe("Invalid input");
    expect(repetitionV1(undefined, {})).toBe("Invalid input");
    expect(repetitionV1(undefined, [])).toBe("Invalid input");
    expect(repetitionV1(undefined, null)).toBe("Invalid input");
    expect(repetitionV1(null, null)).toBe("Invalid input");
    expect(repetitionV1(null, "1")).toBe("Invalid input");
    expect(repetitionV1(null, {})).toBe("Invalid input");
    expect(repetitionV1(null, [])).toBe("Invalid input");
    expect(repetitionV1(null, undefined)).toBe("Invalid input");
    expect(repetitionV1([1, 2, 3, 4], "1")).toBe("Invalid input");
    expect(repetitionV1([1, 2, 3, 4], {})).toBe("Invalid input");
    expect(repetitionV1([1, 2, 3, 4], [])).toBe("Invalid input");
    expect(repetitionV1([1, 2, 3, 4], null)).toBe("Invalid input");
    expect(repetitionV1([1, 2, 3, 4], undefined)).toBe("Invalid input");
  });

  it("should return '' if str is empty", () => {
    expect(repetitionV1("", 1)).toBe("");
  });

  it("should return '' when numb <  0", () => {
    expect(repetitionV1("abc", -2)).toBe("");
    expect(repetitionV1("abc", -12)).toBe("");
    expect(repetitionV1("abc", -1)).toBe("");
  });

  it("should return repeats the string n number of times.", () => {
    expect(repetitionV1("ab", 3)).toBe("ababab");
    expect(repetitionV1("kiwi", 1)).toBe("kiwi");
    expect(repetitionV1("cherry", 2)).toBe("cherrycherry");
  });
});

describe("repetitionV2()", () => {
  it("should return Invalid input when txt is not a string and numb is not numbber", () => {
    expect(repetitionV2({}, "2")).toBe("Invalid input");
    expect(repetitionV2({}, [])).toBe("Invalid input");
    expect(repetitionV2({}, {})).toBe("Invalid input");
    expect(repetitionV2({}, null)).toBe("Invalid input");
    expect(repetitionV2({}, undefined)).toBe("Invalid input");
    expect(repetitionV2(1, [])).toBe("Invalid input");
    expect(repetitionV2(1, "2")).toBe("Invalid input");
    expect(repetitionV2(1, null)).toBe("Invalid input");
    expect(repetitionV2(1, {})).toBe("Invalid input");
    expect(repetitionV2(1, undefined)).toBe("Invalid input");
    expect(repetitionV2(undefined, undefined)).toBe("Invalid input");
    expect(repetitionV2(undefined, "1")).toBe("Invalid input");
    expect(repetitionV2(undefined, {})).toBe("Invalid input");
    expect(repetitionV2(undefined, [])).toBe("Invalid input");
    expect(repetitionV2(undefined, null)).toBe("Invalid input");
    expect(repetitionV2(null, null)).toBe("Invalid input");
    expect(repetitionV2(null, "1")).toBe("Invalid input");
    expect(repetitionV2(null, {})).toBe("Invalid input");
    expect(repetitionV2(null, [])).toBe("Invalid input");
    expect(repetitionV2(null, undefined)).toBe("Invalid input");
    expect(repetitionV2([1, 2, 3, 4], "1")).toBe("Invalid input");
    expect(repetitionV2([1, 2, 3, 4], {})).toBe("Invalid input");
    expect(repetitionV2([1, 2, 3, 4], [])).toBe("Invalid input");
    expect(repetitionV2([1, 2, 3, 4], null)).toBe("Invalid input");
    expect(repetitionV2([1, 2, 3, 4], undefined)).toBe("Invalid input");
  });

  it("should return '' if str is empty", () => {
    expect(repetitionV2("", 1)).toBe("");
  });

  it("should return '' when numb <  0", () => {
    expect(repetitionV2("abc", -2)).toBe("");
    expect(repetitionV2("abc", -12)).toBe("");
    expect(repetitionV2("abc", -1)).toBe("");
  });

  it("should return repeats the string n number of times.", () => {
    expect(repetitionV2("ab", 3)).toBe("ababab");
    expect(repetitionV2("kiwi", 1)).toBe("kiwi");
    expect(repetitionV2("cherry", 2)).toBe("cherrycherry");
  });
});

describe("repetitionV3()", () => {
  it("should return Invalid input when txt is not a string and numb is not numbber", () => {
    expect(repetitionV3({}, "2")).toBe("Invalid input");
    expect(repetitionV3({}, [])).toBe("Invalid input");
    expect(repetitionV3({}, {})).toBe("Invalid input");
    expect(repetitionV3({}, null)).toBe("Invalid input");
    expect(repetitionV3({}, undefined)).toBe("Invalid input");
    expect(repetitionV3(1, [])).toBe("Invalid input");
    expect(repetitionV3(1, "2")).toBe("Invalid input");
    expect(repetitionV3(1, null)).toBe("Invalid input");
    expect(repetitionV3(1, {})).toBe("Invalid input");
    expect(repetitionV3(1, undefined)).toBe("Invalid input");
    expect(repetitionV3(undefined, undefined)).toBe("Invalid input");
    expect(repetitionV3(undefined, "1")).toBe("Invalid input");
    expect(repetitionV3(undefined, {})).toBe("Invalid input");
    expect(repetitionV3(undefined, [])).toBe("Invalid input");
    expect(repetitionV3(undefined, null)).toBe("Invalid input");
    expect(repetitionV3(null, null)).toBe("Invalid input");
    expect(repetitionV3(null, "1")).toBe("Invalid input");
    expect(repetitionV3(null, {})).toBe("Invalid input");
    expect(repetitionV3(null, [])).toBe("Invalid input");
    expect(repetitionV3(null, undefined)).toBe("Invalid input");
    expect(repetitionV3([1, 2, 3, 4], "1")).toBe("Invalid input");
    expect(repetitionV3([1, 2, 3, 4], {})).toBe("Invalid input");
    expect(repetitionV3([1, 2, 3, 4], [])).toBe("Invalid input");
    expect(repetitionV3([1, 2, 3, 4], null)).toBe("Invalid input");
    expect(repetitionV3([1, 2, 3, 4], undefined)).toBe("Invalid input");
  });

  it("should return '' if str is empty", () => {
    expect(repetitionV3("", 1)).toBe("");
  });

  it("should return '' when numb <  0", () => {
    expect(repetitionV3("abc", -2)).toBe("");
    expect(repetitionV3("abc", -12)).toBe("");
    expect(repetitionV3("abc", -1)).toBe("");
  });

  it("should return repeats the string n number of times.", () => {
    expect(repetitionV3("ab", 3)).toBe("ababab");
    expect(repetitionV3("kiwi", 1)).toBe("kiwi");
    expect(repetitionV3("cherry", 2)).toBe("cherrycherry");
  });
});
