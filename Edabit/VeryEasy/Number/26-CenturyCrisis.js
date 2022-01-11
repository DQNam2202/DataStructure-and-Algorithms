// Scientists have discovered that in four decades, the world will EXPLODE! It will also take three decades to make a spaceship to travel to a new planet that can hold the entire world population.
// You must calculate the number of people there will be in three decades from now.
// The variable population is the world population now.
// Assume that every month, someone gives birth to more people n.
// Return the number of people there will be when the spaceship is complete.

// Output:
// futurePeople(256, 2) ➞ 976
// futurePeople(3248, 6) ➞ 5408
// futurePeople(5240, 3) ➞ 6320

export const futurePeople = (population, n) => {
  const threeDecades = 3 * 10;
  const monthOfYear = 12;
  if (typeof population !== "number" || typeof n !== "number")
    return "Invalid number";
  const monthOfDecades = n * threeDecades * monthOfYear;
  return population + monthOfDecades;
};
