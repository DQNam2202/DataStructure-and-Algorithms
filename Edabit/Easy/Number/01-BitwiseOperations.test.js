import { bitwiseAND, bitwiseOR, bitwiseXOR } from "./01-BitwiseOperations";

describe("bitwiseAND()", () => {
  it("should return Invalid input when numb1 and numb2 is not a number", () => {
    expect(bitwiseAND("1", "2")).toBe("Invalid input");
    expect(bitwiseAND("1", [])).toBe("Invalid input");
    expect(bitwiseAND("1", {})).toBe("Invalid input");
    expect(bitwiseAND("1", null)).toBe("Invalid input");
    expect(bitwiseAND("1", undefined)).toBe("Invalid input");
    expect(bitwiseAND([], [])).toBe("Invalid input");
    expect(bitwiseAND([], "2")).toBe("Invalid input");
    expect(bitwiseAND([], null)).toBe("Invalid input");
    expect(bitwiseAND([], {})).toBe("Invalid input");
    expect(bitwiseAND([], undefined)).toBe("Invalid input");
    expect(bitwiseAND({}, {})).toBe("Invalid input");
    expect(bitwiseAND({}, "1")).toBe("Invalid input");
    expect(bitwiseAND({}, [])).toBe("Invalid input");
    expect(bitwiseAND({}, null)).toBe("Invalid input");
    expect(bitwiseAND({}, null)).toBe("Invalid input");
    expect(bitwiseAND(null, null)).toBe("Invalid input");
    expect(bitwiseAND(null, "1")).toBe("Invalid input");
    expect(bitwiseAND(null, {})).toBe("Invalid input");
    expect(bitwiseAND(null, [])).toBe("Invalid input");
    expect(bitwiseAND(null, undefined)).toBe("Invalid input");
    expect(bitwiseAND(undefined, undefined)).toBe("Invalid input");
    expect(bitwiseAND(undefined, "1")).toBe("Invalid input");
    expect(bitwiseAND(undefined, {})).toBe("Invalid input");
    expect(bitwiseAND(undefined, [])).toBe("Invalid input");
    expect(bitwiseAND(undefined, null)).toBe("Invalid input");
  });

  it("should return result caculate", () => {
    expect(bitwiseAND(7, 12)).toBe(4);
    expect(bitwiseAND(7, 20)).toBe(4);
    expect(bitwiseAND(2, 7)).toBe(2);
  });
});

describe("bitwiseOR()", () => {
  it("should return Invalid input when numb1 and numb2 is not a number", () => {
    expect(bitwiseOR("1", "2")).toBe("Invalid input");
    expect(bitwiseOR("1", [])).toBe("Invalid input");
    expect(bitwiseOR("1", {})).toBe("Invalid input");
    expect(bitwiseOR("1", null)).toBe("Invalid input");
    expect(bitwiseOR("1", undefined)).toBe("Invalid input");
    expect(bitwiseOR([], [])).toBe("Invalid input");
    expect(bitwiseOR([], "2")).toBe("Invalid input");
    expect(bitwiseOR([], null)).toBe("Invalid input");
    expect(bitwiseOR([], {})).toBe("Invalid input");
    expect(bitwiseOR([], undefined)).toBe("Invalid input");
    expect(bitwiseOR({}, {})).toBe("Invalid input");
    expect(bitwiseOR({}, "1")).toBe("Invalid input");
    expect(bitwiseOR({}, [])).toBe("Invalid input");
    expect(bitwiseOR({}, null)).toBe("Invalid input");
    expect(bitwiseOR({}, null)).toBe("Invalid input");
    expect(bitwiseOR(null, null)).toBe("Invalid input");
    expect(bitwiseOR(null, "1")).toBe("Invalid input");
    expect(bitwiseOR(null, {})).toBe("Invalid input");
    expect(bitwiseOR(null, [])).toBe("Invalid input");
    expect(bitwiseOR(null, undefined)).toBe("Invalid input");
    expect(bitwiseOR(undefined, undefined)).toBe("Invalid input");
    expect(bitwiseOR(undefined, "1")).toBe("Invalid input");
    expect(bitwiseOR(undefined, {})).toBe("Invalid input");
    expect(bitwiseOR(undefined, [])).toBe("Invalid input");
    expect(bitwiseOR(undefined, null)).toBe("Invalid input");
  });

  it("should return result caculate", () => {
    expect(bitwiseOR(7, 12)).toBe(15);
    expect(bitwiseOR(7, 20)).toBe(23);
    expect(bitwiseOR(5, 3)).toBe(7);
  });
});

describe("bitwiseXOR()", () => {
  it("should return Invalid input when numb1 and numb2 is not a number", () => {
    expect(bitwiseXOR("1", "2")).toBe("Invalid input");
    expect(bitwiseXOR("1", [])).toBe("Invalid input");
    expect(bitwiseXOR("1", {})).toBe("Invalid input");
    expect(bitwiseXOR("1", null)).toBe("Invalid input");
    expect(bitwiseXOR("1", undefined)).toBe("Invalid input");
    expect(bitwiseXOR([], [])).toBe("Invalid input");
    expect(bitwiseXOR([], "2")).toBe("Invalid input");
    expect(bitwiseXOR([], null)).toBe("Invalid input");
    expect(bitwiseXOR([], {})).toBe("Invalid input");
    expect(bitwiseXOR([], undefined)).toBe("Invalid input");
    expect(bitwiseXOR({}, {})).toBe("Invalid input");
    expect(bitwiseXOR({}, "1")).toBe("Invalid input");
    expect(bitwiseXOR({}, [])).toBe("Invalid input");
    expect(bitwiseXOR({}, null)).toBe("Invalid input");
    expect(bitwiseXOR({}, null)).toBe("Invalid input");
    expect(bitwiseXOR(null, null)).toBe("Invalid input");
    expect(bitwiseXOR(null, "1")).toBe("Invalid input");
    expect(bitwiseXOR(null, {})).toBe("Invalid input");
    expect(bitwiseXOR(null, [])).toBe("Invalid input");
    expect(bitwiseXOR(null, undefined)).toBe("Invalid input");
    expect(bitwiseXOR(undefined, undefined)).toBe("Invalid input");
    expect(bitwiseXOR(undefined, "1")).toBe("Invalid input");
    expect(bitwiseXOR(undefined, {})).toBe("Invalid input");
    expect(bitwiseXOR(undefined, [])).toBe("Invalid input");
    expect(bitwiseXOR(undefined, null)).toBe("Invalid input");
  });

  it("should return result caculate", () => {
    expect(bitwiseXOR(7, 12)).toBe(11);
    expect(bitwiseXOR(7, 20)).toBe(19);
    expect(bitwiseXOR(5, 3)).toBe(6);
  });
});
