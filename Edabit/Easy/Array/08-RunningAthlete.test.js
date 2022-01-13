import { runningAthlete } from "./08-RunningAthlete";

describe("runningAthlete()", () => {
  it("should return Invalid input when arr is not an Object or txt is not a string", () => {
    expect(runningAthlete("1", 2)).toBe("Invalid input");
    expect(runningAthlete("1", [])).toBe("Invalid input");
    expect(runningAthlete("1", {})).toBe("Invalid input");
    expect(runningAthlete("1", null)).toBe("Invalid input");
    expect(runningAthlete("1", undefined)).toBe("Invalid input");
    expect(runningAthlete(1, [])).toBe("Invalid input");
    expect(runningAthlete(1, 2)).toBe("Invalid input");
    expect(runningAthlete(1, null)).toBe("Invalid input");
    expect(runningAthlete(1, {})).toBe("Invalid input");
    expect(runningAthlete(1, undefined)).toBe("Invalid input");
    expect(runningAthlete(undefined, undefined)).toBe("Invalid input");
    expect(runningAthlete(undefined, "1")).toBe("Invalid input");
    expect(runningAthlete(undefined, {})).toBe("Invalid input");
    expect(runningAthlete(undefined, [])).toBe("Invalid input");
    expect(runningAthlete(undefined, null)).toBe("Invalid input");
    expect(runningAthlete([1, 2, 3, 4], 1)).toBe("Invalid input");
    expect(runningAthlete([1, 2, 3, 4], {})).toBe("Invalid input");
    expect(runningAthlete([1, 2, 3, 4], [])).toBe("Invalid input");
    expect(runningAthlete([1, 2, 3, 4], null)).toBe("Invalid input");
  });

  it("should returns '' when arr is empty or txt is empty", () => {
    expect(runningAthlete([], "")).toBe("");
  });

  it("should return result when arr and txt is success", () => {
    expect(runningAthlete(["run", "jump", "run", "jump", "run"], "_|_|_")).toBe(
      "_|_|_"
    );
    expect(runningAthlete(["run", "jump", "run", "run", "run"], "_|_|_")).toBe(
      "_|_/_"
    );
    expect(
      runningAthlete(["jump", "jump", "jump", "jump", "jump"], "_|_|_")
    ).toBe("x|x|x");
    expect(runningAthlete(["run", "run", "run", "run", "run"], "_|_|_")).toBe(
      "_/_/_"
    );
  });
});
