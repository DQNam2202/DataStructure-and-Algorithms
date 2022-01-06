import { getVoteCountV1, getVoteCountV2 } from "./01-UpvotesvsDownvotes";

describe("getVoteCountV1()", () => {
  it("should return Invalid input when vote is not a object", () => {
    [1, "1", undefined].forEach((item) => {
      expect(getVoteCountV1(item)).toBe("Invalid input");
    });
  });

  it("should return what vote count should be displayed", () => {
    expect(getVoteCountV1({ upvotes: 13, downvotes: 0 })).toBe(13);
    expect(getVoteCountV1({ upvotes: 2, downvotes: 33 })).toBe(-31);
    expect(getVoteCountV1({ upvotes: 132, downvotes: 132 })).toBe(0);
  });
});
