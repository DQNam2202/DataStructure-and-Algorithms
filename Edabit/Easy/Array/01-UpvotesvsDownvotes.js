//! 01. Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.
// Output
// getVoteCount({ upvotes: 13, downvotes: 0 }) ➞ 13
// getVoteCount({ upvotes: 2, downvotes: 33 }) ➞ -31
// getVoteCount({ upvotes: 132, downvotes: 132 }) ➞ 0

// using Object,value;
export const getVoteCountV1 = (vote) => {
  if (typeof vote !== "object") return "Invalid input";
  const voteList = Object.values(vote);
  return voteList[0] - voteList[1];
};
