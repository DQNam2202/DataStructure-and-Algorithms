// Write a function that accepts base (decimal), height (decimal) and shape ("triangle", "parallelogram") as input and calculates the area of that shape.

// Examples
// areaShape(2, 3, "triangle") ➞ 3
// areaShape(8, 6, "parallelogram") ➞ 48
// areaShape(2.9, 1.3, "parallelogram") ➞ 3.77

// Notes
// Area of a triangle is 0.5 * b * h
// Area of a parallelogram is b * h
// Assume triangle and parallelogram are the only inputs for shape.

// Version 01; Using if...else
export const areaShapeV1 = (base, height, area) => {
  if (
    typeof base !== "number" ||
    typeof height !== "number" ||
    typeof area !== "string" ||
    area.length === 0
  )
    return "Invalid input";
  if (area === "triangle") {
    return 0.5 * base * height;
  }
  return base * height;
};
// Version 02; Using Ternary Operator
export const areaShapeV2 = (base, height, area) => {
  if (
    typeof base !== "number" ||
    typeof height !== "number" ||
    typeof area !== "string" ||
    area.length === 0
  )
    return "Invalid input";
  return area === "triangle" ? 0.5 * base * height : base * height;
};
// Version 03: Using Switch...Case
export const areaShapeV3 = (base, height, area) => {
  if (
    typeof base !== "number" ||
    typeof height !== "number" ||
    typeof area !== "string" ||
    area.length === 0
  )
    return "Invalid input";
  let result;
  switch (area) {
    case "triangle": {
      result = 0.5 * base * height;
      break;
    }
    case "parallelogram": {
      result = base * height;
      break;
    }
  }
  return result;
};
