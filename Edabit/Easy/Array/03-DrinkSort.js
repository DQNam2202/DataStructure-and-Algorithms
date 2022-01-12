// You will be given an array of drinks, with each drink being an object with two properties: name and price. Create a function that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.

/**
  drinks = [
    {name: "lemonade", price: 50},
    {name: "lime", price: 10}
  ]
  Output: sortDrinkByPrice(drinks) ➞ [{name: "lime", price: 10}, {name: "lemonade", price: 50}]
*/

// Version 01: Sort Drink By Price
export const sortDrinkByPrice = (drinks) => {
  if (!Array.isArray(drinks)) return "Invalid input";
  if (drinks.length === 0) return [];
  return drinks.sort((a, b) => a.price - b.price);
};
/// Version 02: Sort Drink By Price or name
const sortDrinkByName = (drinks) => {
  if (!Array.isArray(drinks) || drinks.length === 0) return "Invalid input";
  return drinks.sort((a, b) =>
    a.price > b.price
      ? 1
      : a.price === b.price
      ? a.name > b.name
        ? 1
        : -1
      : -1
  );
};
// Version 03: Sorting Drink By Name
const sortDrinkByNameV2 = (drinks) => {
  if (!Array.isArray(drinks)) return "Invalid input";
  if (drinks.length === 0) return [];
  return drinks.sort((a, b) => (a.name > b.name ? 1 : -1));
};
