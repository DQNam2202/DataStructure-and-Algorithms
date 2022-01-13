// Running Athlete 🏃
// No description.
// Guess the code from test cases.

// Output;
// runningAthlete(["run", "jump", "run", "jump", "run"], "_|_|_") ➞ "_|_|_"
// runningAthlete(["run", "jump", "run", "run", "run"], "_|_|_") ➞ "_|_/_"
// runningAthlete(["jump", "jump", "jump", "jump", "jump"], "_|_|_") ➞ "x|x|x"
// runningAthlete(["run", "run", "run", "run", "run"], "_|_|_") ➞ "_/_/_"

// run , _ -> -
// run , | -> /
// jumb, | -> |
// jumb, _ -> x

export const runningAthlete = (arr, txt) => {
  if (!Array.isArray(arr) || typeof txt !== "string") return "Invalid input";
  if (arr.length === 0 || txt.length === 0) return "";
  let symbolList = [];
  let textList = txt.trim().split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "run" && textList[i] === "_") {
      symbolList.push("_");
    } else if (arr[i] === "run" && textList[i] === "|") {
      symbolList.push("/");
    } else if (arr[i] === "jump" && textList[i] === "|") {
      symbolList.push("|");
    } else if (arr[i] === "jump" && textList[i] === "_") {
      symbolList.push("x");
    }
  }
  return symbolList.join("");
};

// Using map - SwitchCase:
// run , _ -> -
// run , | -> /
// jumb, | -> |
// jumb, _ -> x
const runningAthleteV1 = (arr, txt) => {
  if (!Array.isArray(arr) || typeof txt !== "string") return "Invalid input";
  if (arr.length === 0 || txt.length === 0) return "";
  return [...arr]
    .map((item, idx) => {
      switch (`${item}${txt[idx]}`) {
        case "run_": {
          return "_";
        }
        case "run|": {
          return "|";
        }
        case "jump|": {
          return "|";
        }
        case "jump_": {
          return "x";
        }
      }
    })
    .join("");
};
