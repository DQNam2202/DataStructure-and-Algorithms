import { fixImport } from "./05-ImportStatement";

describe("fixImport", () => {
  it("should returns Invalid input when str is not a string", () => {
    [1, [], {}, null, undefined].forEach((item) => {
      expect(fixImport(item)).toBe("Invalid input");
    });
  });

  it("should returns the fixes string", () => {
    expect(fixImport("import object from module_name")).toBe(
      "from module_name import object"
    );
    expect(fixImport("import randint from random")).toBe(
      "from random import randint"
    );
    expect(fixImport("import pi from math")).toBe("from math import pi");
  });

  it("should return Invalid input when str is empty", () => {
    expect(fixImport("")).toBe("Invalid input");
  });
});
