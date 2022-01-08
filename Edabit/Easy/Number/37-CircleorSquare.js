/**
  *! Given the radius of a circle and the area of a square, return true if the circumference of the circle is greater than the square's perimeter and false if the square's perimeter is greater than the circumference of the circle.

  *? Notes
    + You can use Pi to 2 decimal places (3.14).
    + Circumference of a circle equals 2 * Pi * radius.
    + To find the perimeter of a square using its area, find the square root of area (to get side length) and multiply that by 4.

  *? Output:
    + circle_or_square(16, 625) ➞ True
    + circle_or_square(5, 100) ➞ False
    + circle_or_square(8, 144) ➞ True
*/

export const circleOrSquare = (rad, area) => {
  if (typeof rad !== "number" || typeof area !== "number")
    return "Invalid input";
  const PI = 3.14;
  let circumferenceOfCircle = 2 * rad * PI;
  let sideLength = Math.sqrt(area);
  let perimeterOfSquare = sideLength * 4;
  return circumferenceOfCircle > perimeterOfSquare ? true : false;
};
