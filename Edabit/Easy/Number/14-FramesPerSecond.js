//! 14.Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.
// Output:
// frames(1, 1) ➞ 60
// frames(10, 1) ➞ 600
// frames(10, 25) ➞ 15000

export const frames = (minutes, fps) => {
  const PER_SECOND = 60;
  if (typeof minutes !== "number" || typeof fps !== "number") return false;
  return minutes * PER_SECOND * fps;
};
