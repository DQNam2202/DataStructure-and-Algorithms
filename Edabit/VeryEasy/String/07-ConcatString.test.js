import { concatNameV1, concatNameV2, concatNameV3 } from "./07-ConcatString";

describe("concatNameV1()", () => {
  it("should return Invalid name when firstName and lastName is not a string", () => {
    expect(concatNameV1(1, 2)).toBe("Invalid name");
    expect(concatNameV1(1, [])).toBe("Invalid name");
    expect(concatNameV1(1, {})).toBe("Invalid name");
    expect(concatNameV1(1, null)).toBe("Invalid name");
    expect(concatNameV1(1, undefined)).toBe("Invalid name");
    expect(concatNameV1([], [])).toBe("Invalid name");
    expect(concatNameV1([], 2)).toBe("Invalid name");
    expect(concatNameV1([], null)).toBe("Invalid name");
    expect(concatNameV1([], {})).toBe("Invalid name");
    expect(concatNameV1([], undefined)).toBe("Invalid name");
    expect(concatNameV1({}, {})).toBe("Invalid name");
    expect(concatNameV1({}, 1)).toBe("Invalid name");
    expect(concatNameV1({}, [])).toBe("Invalid name");
    expect(concatNameV1({}, null)).toBe("Invalid name");
    expect(concatNameV1({}, null)).toBe("Invalid name");
    expect(concatNameV1(null, null)).toBe("Invalid name");
    expect(concatNameV1(null, 1)).toBe("Invalid name");
    expect(concatNameV1(null, {})).toBe("Invalid name");
    expect(concatNameV1(null, [])).toBe("Invalid name");
    expect(concatNameV1(null, undefined)).toBe("Invalid name");
    expect(concatNameV1(undefined, undefined)).toBe("Invalid name");
    expect(concatNameV1(undefined, 1)).toBe("Invalid name");
    expect(concatNameV1(undefined, {})).toBe("Invalid name");
    expect(concatNameV1(undefined, [])).toBe("Invalid name");
    expect(concatNameV1(undefined, null)).toBe("Invalid name");
  });

  it("should return Invlaid name when firstName and lastName is empty", () => {
    expect(concatNameV1("", "")).toBe("Invalid name");
    expect(concatNameV1("", "Nam")).toBe("Invalid name");
    expect(concatNameV1("Nam", "")).toBe("Invalid name");
  });

  it("should return a single string in the format 'last, first'", () => {
    expect(concatNameV1("First", "Last")).toBe("Last, First");
    expect(concatNameV1("First ", "Last ")).toBe("Last, First");
    expect(concatNameV1("John", "Doe")).toBe("Doe, John");
    expect(concatNameV1(" John ", " Doe ")).toBe("Doe, John");
    expect(concatNameV1("Mary", "Jane")).toBe("Jane, Mary");
    expect(concatNameV1(" Mary", " Jane")).toBe("Jane, Mary");
  });
});

describe("concatNameV2()", () => {
  it("should return Invalid name when firstName and lastName is not a string", () => {
    expect(concatNameV2(1, 2)).toBe("Invalid name");
    expect(concatNameV2(1, [])).toBe("Invalid name");
    expect(concatNameV2(1, {})).toBe("Invalid name");
    expect(concatNameV2(1, null)).toBe("Invalid name");
    expect(concatNameV2(1, undefined)).toBe("Invalid name");
    expect(concatNameV2([], [])).toBe("Invalid name");
    expect(concatNameV2([], 2)).toBe("Invalid name");
    expect(concatNameV2([], null)).toBe("Invalid name");
    expect(concatNameV2([], {})).toBe("Invalid name");
    expect(concatNameV2([], undefined)).toBe("Invalid name");
    expect(concatNameV2({}, {})).toBe("Invalid name");
    expect(concatNameV2({}, 1)).toBe("Invalid name");
    expect(concatNameV2({}, [])).toBe("Invalid name");
    expect(concatNameV2({}, null)).toBe("Invalid name");
    expect(concatNameV2({}, null)).toBe("Invalid name");
    expect(concatNameV2(null, null)).toBe("Invalid name");
    expect(concatNameV2(null, 1)).toBe("Invalid name");
    expect(concatNameV2(null, {})).toBe("Invalid name");
    expect(concatNameV2(null, [])).toBe("Invalid name");
    expect(concatNameV2(null, undefined)).toBe("Invalid name");
    expect(concatNameV2(undefined, undefined)).toBe("Invalid name");
    expect(concatNameV2(undefined, 1)).toBe("Invalid name");
    expect(concatNameV2(undefined, {})).toBe("Invalid name");
    expect(concatNameV2(undefined, [])).toBe("Invalid name");
    expect(concatNameV2(undefined, null)).toBe("Invalid name");
  });

  it("should return Invlaid name when firstName and lastName is empty", () => {
    expect(concatNameV2("", "")).toBe("Invalid name");
    expect(concatNameV2("", "Nam")).toBe("Invalid name");
    expect(concatNameV2("Nam", "")).toBe("Invalid name");
  });

  it("should return a single string in the format 'last, first'", () => {
    expect(concatNameV2("First", "Last")).toBe("Last, First");
    expect(concatNameV2("First ", "Last ")).toBe("Last, First");
    expect(concatNameV2("John", "Doe")).toBe("Doe, John");
    expect(concatNameV2(" John ", " Doe ")).toBe("Doe, John");
    expect(concatNameV2("Mary", "Jane")).toBe("Jane, Mary");
    expect(concatNameV2(" Mary", " Jane")).toBe("Jane, Mary");
  });
});

describe("concatNameV3()", () => {
  it("should return Invalid name when firstName and lastName is not a string", () => {
    expect(concatNameV3(1, 2)).toBe("Invalid name");
    expect(concatNameV3(1, [])).toBe("Invalid name");
    expect(concatNameV3(1, {})).toBe("Invalid name");
    expect(concatNameV3(1, null)).toBe("Invalid name");
    expect(concatNameV3(1, undefined)).toBe("Invalid name");
    expect(concatNameV3([], [])).toBe("Invalid name");
    expect(concatNameV3([], 2)).toBe("Invalid name");
    expect(concatNameV3([], null)).toBe("Invalid name");
    expect(concatNameV3([], {})).toBe("Invalid name");
    expect(concatNameV3([], undefined)).toBe("Invalid name");
    expect(concatNameV3({}, {})).toBe("Invalid name");
    expect(concatNameV3({}, 1)).toBe("Invalid name");
    expect(concatNameV3({}, [])).toBe("Invalid name");
    expect(concatNameV3({}, null)).toBe("Invalid name");
    expect(concatNameV3({}, null)).toBe("Invalid name");
    expect(concatNameV3(null, null)).toBe("Invalid name");
    expect(concatNameV3(null, 1)).toBe("Invalid name");
    expect(concatNameV3(null, {})).toBe("Invalid name");
    expect(concatNameV3(null, [])).toBe("Invalid name");
    expect(concatNameV3(null, undefined)).toBe("Invalid name");
    expect(concatNameV3(undefined, undefined)).toBe("Invalid name");
    expect(concatNameV3(undefined, 1)).toBe("Invalid name");
    expect(concatNameV3(undefined, {})).toBe("Invalid name");
    expect(concatNameV3(undefined, [])).toBe("Invalid name");
    expect(concatNameV3(undefined, null)).toBe("Invalid name");
  });

  it("should return Invlaid name when firstName and lastName is empty", () => {
    expect(concatNameV3("", "")).toBe("Invalid name");
    expect(concatNameV3("", "Nam")).toBe("Invalid name");
    expect(concatNameV3("Nam", "")).toBe("Invalid name");
  });

  it("should return a single string in the format 'last, first'", () => {
    expect(concatNameV3("First", "Last")).toBe("Last, First");
    expect(concatNameV3("First ", "Last ")).toBe("Last, First");
    expect(concatNameV3("John", "Doe")).toBe("Doe, John");
    expect(concatNameV3(" John ", " Doe ")).toBe("Doe, John");
    expect(concatNameV3("Mary", "Jane")).toBe("Jane, Mary");
    expect(concatNameV3(" Mary", " Jane")).toBe("Jane, Mary");
  });
});
