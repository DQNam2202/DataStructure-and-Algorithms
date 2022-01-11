import { largestSwap } from "./07-LargestSwap";

describe("largestSwap", () => {
  it("should return Invalid input when numb is not a number", () => {
    ["1", {}, [], null, undefined].forEach((item) => {
      expect(largestSwap(item)).toBe("Invalid input");
    });
  });

  it("should return it's the largest of two possible digit swaps.", () => {
    expect(largestSwap(14)).toBe(false);
    expect(largestSwap(27)).toBe(false);
    expect(largestSwap(43)).toBe(true);
    expect(largestSwap(53)).toBe(true);
    expect(largestSwap(99)).toBe(true);
  });
});
