//! 01. Code should concatenate a passed string name with string "Edabit" and store it in a variable called result
// Output:
// nameString("Mubashir") ➞ "MubashirEdabit"
// nameString("Matt") ➞ "MattEdabit"
// nameString("javaScript") ➞ "javaScriptEdabit"

// using +
export const nameStringV1 = (name) => {
  if (typeof name !== "string" || name.length === 0) return false;
  return name + "Edabit";
};

// using concat
export const nameStringV2 = (name) => {
  if (typeof name !== "string" || name.length === 0) return false;
  return name.concat("Edabit");
};

// usign string template
export const nameStringV3 = (name) => {
  if (typeof name !== "string" || name.length === 0) return false;
  return `${name}${"Edabit"}`;
};

// using split()-join();
export const nameStringV4 = (name) => {
  if (typeof name !== "string" || name.length === 0) return false;
  let strList = name.trim().split(" ");
  return [...strList, "Edabit"].join("");
};

// using push
export const nameStringV5 = (name) => {
  if (typeof name !== "string" || name.length === 0) return false;
  let strList = name.trim().split(" ");
  strList.push("Edabit");
  return strList.join("");
};
