// Output:
// greeting("Matt") ➞ "Hello, Matt!"
// greeting("Helen") ➞ "Hello, Helen!"
// greeting("Mubashir") ➞ "Hello, my Love!"

// Version 1: using +
export const greetingV1 = (str) => {
  if (typeof str !== "string" || str.length === 0) return false;
  return str !== "Mubashir" ? "Hello, " + str.trim() + "!" : "Hello, my Love!";
};

// Version 2: using concat
export const greetingV2 = (str) => {
  if (typeof str !== "string" || str.length === 0) return false;
  return str !== "Mubashir"
    ? "Hello, ".concat(str.trim()).concat("!")
    : "Hello, my Love!";
};

// Version 3: using template literal
export const greetingV3 = (str) => {
  if (typeof str !== "string" || str.length === 0) return false;
  return str !== "Mubashir"
    ? `${"Hello, "}${str.trim()}${"!"}`
    : "Hello, my Love!";
};
