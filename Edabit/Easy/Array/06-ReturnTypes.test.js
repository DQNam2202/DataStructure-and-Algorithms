import {
  arrayValuesTypesV1,
  arrayValuesTypesV2,
  arrayValuesTypesV3,
} from "./06-ReturnTypes";

describe("arrayValuesTypesV1()", () => {
  it("should return Invalid input when arr is not a Object", () => {
    [1, "1", undefined].forEach((item) => {
      expect(arrayValuesTypesV1(item)).toBe("Invalid input");
    });
  });

  it("should return Invalid input when arr is empty", () => {
    expect(arrayValuesTypesV1([])).toBe("Invalid input");
  });

  it("should returns the types of values (data types) in a new array.", () => {
    expect(arrayValuesTypesV1([1, 2, "null", []])).toStrictEqual([
      "number",
      "number",
      "string",
      "object",
    ]);
    expect(
      arrayValuesTypesV1(["214", true, false, 2, 2.15, [], null])
    ).toStrictEqual([
      "string",
      "boolean",
      "boolean",
      "number",
      "number",
      "object",
      "object",
    ]);
    expect(
      arrayValuesTypesV1([
        21.1,
        "float",
        "array",
        ["I am array"],
        null,
        true,
        214,
      ])
    ).toStrictEqual([
      "number",
      "string",
      "string",
      "object",
      "object",
      "boolean",
      "number",
    ]);
  });
});

describe("arrayValuesTypesV2()", () => {
  it("should return Invalid input when arr is not a Object", () => {
    [1, "1", undefined].forEach((item) => {
      expect(arrayValuesTypesV2(item)).toBe("Invalid input");
    });
  });

  it("should return Invalid input when arr is empty", () => {
    expect(arrayValuesTypesV2([])).toBe("Invalid input");
  });

  it("should returns the types of values (data types) in a new array.", () => {
    expect(arrayValuesTypesV2([1, 2, "null", []])).toStrictEqual([
      "number",
      "number",
      "string",
      "object",
    ]);
    expect(
      arrayValuesTypesV2(["214", true, false, 2, 2.15, [], null])
    ).toStrictEqual([
      "string",
      "boolean",
      "boolean",
      "number",
      "number",
      "object",
      "object",
    ]);
    expect(
      arrayValuesTypesV2([
        21.1,
        "float",
        "array",
        ["I am array"],
        null,
        true,
        214,
      ])
    ).toStrictEqual([
      "number",
      "string",
      "string",
      "object",
      "object",
      "boolean",
      "number",
    ]);
  });
});

describe("arrayValuesTypesV3()", () => {
  it("should return Invalid input when arr is not a Object", () => {
    [1, "1", undefined].forEach((item) => {
      expect(arrayValuesTypesV3(item)).toBe("Invalid input");
    });
  });

  it("should return Invalid input when arr is empty", () => {
    expect(arrayValuesTypesV3([])).toBe("Invalid input");
  });

  it("should returns the types of values (data types) in a new array.", () => {
    expect(arrayValuesTypesV3([1, 2, "null", []])).toStrictEqual([
      "number",
      "number",
      "string",
      "object",
    ]);
    expect(
      arrayValuesTypesV3(["214", true, false, 2, 2.15, [], null])
    ).toStrictEqual([
      "string",
      "boolean",
      "boolean",
      "number",
      "number",
      "object",
      "object",
    ]);
    expect(
      arrayValuesTypesV3([
        21.1,
        "float",
        "array",
        ["I am array"],
        null,
        true,
        214,
      ])
    ).toStrictEqual([
      "number",
      "string",
      "string",
      "object",
      "object",
      "boolean",
      "number",
    ]);
  });
});
