import { potatoes } from "./02-FindAmountPotatoes";

describe("Find The Amout of the Potatoes", () => {
  it("should return Invalid input when str is not a string", () => {
    [1, [], {}, null, undefined].forEach((item) => {
      expect(potatoes(item)).toBe("Invalid input");
    });
  });

  it("should return Invalid input when str is empty", () => {
    expect(potatoes("")).toBe("Invalid input");
  });

  it("should return the of potatoes there are in a string.", () => {
    expect(potatoes("potato")).toBe(1);
    expect(potatoes("potatopotato")).toBe(2);
    expect(potatoes("potatoapple")).toBe(1);
  });
});
