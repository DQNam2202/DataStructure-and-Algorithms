// Create a function that finds the word "bomb" in the given string (not case sensitive). If found, return "Duck!!!", otherwisebomb("There is a bomb.") ➞ "Duck!!!"

// bomb("There is a bomb.") ➞ "Duck!!!"
// bomb("Hey, did you think there is a bomb?") ➞ "Duck!!!"
// bomb("This goes boom!!!") ➞ "There is no bomb, relax."

export const bomb = (str) => {
  if (typeof str !== "string" || str.length === 0) return "Invalid input";
  let wordList = str.trim().toLowerCase().split(" ");
  for (let item of wordList) {
    if (item.includes("bomb")) {
      return "Duck!!!";
    }
  }
  return "There is no bomb, relax.";
};

const findBomb = (str) => {
  if (typeof str !== "string" || str.length === 0) return "Invalid input";
  let wordList = str.trim().toLowerCase().split(" ");
  let idx = [...wordList].find((item) => item === "bomb");
  return idx === undefined ? "There is no bomb, relax." : "Duck!!!";
};

const findBombV2 = (str) => {
  if (typeof str !== "string" || str.length === 0) return "Invalid input";
  let wordList = str.trim().toLowerCase().split(" ");
  let idx = [...wordList].indexOf("bomb");
  return idx > 0 ? "Duck!!!" : "There is no bomb, relax.";
};
