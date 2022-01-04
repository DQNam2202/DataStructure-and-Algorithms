//   animals(2, 3, 5)  -> 36
//   animals(1, 2, 3)  -> 22
//   animals(5, 2, 8)  -> 50
//   animals(5, 2, 0)  -> 18
//   animals(0, 2, 2)  -> 16
//   animals(2, 0, 2)  -> 12
//   animals(5, 0, 0)  -> 10
//   animals(0, 4, 0)  -> 16
//   animals(0, 0, 2)  -> 8
//   animals(0, 0, 0)  -> 0

export const animals = (chickens, cows, pigs) => {
  if (
    typeof chickens !== "number" ||
    typeof cows !== "number" ||
    typeof pigs !== "number"
  )
    return false;
  let sumLeg;
  if (chickens > 0 && cows > 0 && pigs > 0) {
    sumLeg = chickens * 2 + cows * 4 + pigs * 4;
  } else if (chickens == 0 && cows > 0 && pigs > 0) {
    sumLeg = cows * 4 + pigs * 4;
  } else if (chickens > 0 && cows == 0 && pigs > 0) {
    sumLeg = chickens * 2 + pigs * 4;
  } else if (chickens > 0 && cows > 0 && pigs == 0) {
    sumLeg = chickens * 2 + cows * 4;
  } else if (chickens > 0 && cows == 0 && pigs == 0) {
    sumLeg = chickens * 2;
  } else if (chickens == 0 && cows > 0 && pigs == 0) {
    sumLeg = cows * 4;
  } else if (chickens == 0 && cows == 0 && pigs > 0) {
    sumLeg = pigs * 4;
  } else {
    sumLeg = 0;
  }
  return sumLeg;
};
