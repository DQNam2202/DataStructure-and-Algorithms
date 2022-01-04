/**
 *! Create a function that takes the number of wins, draws and losses and calculates the number of points a football team has obtained so far.
  + wins get 3 points
  + draws get 1 point
  + losses get 0 points
 */
// Output:
// footballPoints(0, 0, 1) -> 0
// footballPoints(5, 0, 2) -> 15
// footballPoints(3, 4, 2) -> 13
// footballPoints(0, 4, 2) -> 4
// footballPoints(0, 0, 0) -> 0
// footballPoints(0, 4, 0) -> 4
// footballPoints(5, 0, 0) -> 15
// footballPoints(-2, -2, -1) -> undefined
// footballPoints(2, 2, -1) -> undefined

export const footballPointsV1 = (wins, draws, losses) => {
  if (
    typeof wins !== "number" ||
    typeof draws !== "number" ||
    typeof losses !== "number"
  )
    return "Invalid number";
  let sum;
  if (wins > 0 && draws > 0 && losses > 0) {
    return (sum = wins * 3 + draws * 1 + losses * 0);
  } else if (wins > 0 && draws > 0 && losses == 0) {
    return (sum = wins * 3 + draws * 1);
  } else if (wins > 0 && draws == 0 && losses >= 0) {
    return (sum = wins * 3);
  } else if (wins == 0 && draws > 0 && losses >= 0) {
    return (sum = draws * 1);
  } else if (wins == 0 && draws == 0 && losses >= 0) {
    return 0;
  } else if (wins < 0 || draws < 0 || losses < 0) {
    return undefined;
  } else {
    return undefined;
  }
};

export const footballPointsV2 = (wins, draws, losses) => {
  if (
    typeof wins !== "number" ||
    typeof draws !== "number" ||
    typeof losses !== "number"
  )
    return "Invalid number";
  let sum;
  if (wins < 0 && draws < 0 && losses < 0) return undefined;
  if (wins < 0 || draws < 0 || losses < 0) return undefined;
  if (wins > 0 && draws > 0 && losses > 0)
    return (sum = wins * 3 + draws * 1 + losses * 0);
  if (wins > 0 && draws == 0 && losses > 0) return (sum = wins * 3);
  if (wins > 0 && draws == 0 && losses == 0) return (sum = wins * 3);
  if (wins > 0 && draws > 0 && losses == 0) return (sum = wins * 3 + draws * 1);
  if (wins == 0 && draws > 0 && losses == 0) return (sum = draws * 1);
  if (wins == 0 && draws > 0 && losses > 0) return (sum = draws * 1);
  if (wins == 0 && draws == 0 && losses > 0) return 0;
  if (wins == 0 && draws == 0 && losses == 0) return 0;
};
