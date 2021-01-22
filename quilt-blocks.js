// function blockRailFence(x, y, side, primaryColor, secondaryColor, tertiaryColor) {
//   push();
//   noStroke();
//   fill(primaryColor);
//   rect(x, y, side / 3, side);
//
//   fill(secondaryColor);
//   rect(x + side / 3, y, side / 3, side);
//
//   fill(tertiaryColor);
//   rect(x + side * 2 / 3, y, side / 3, side);
//   pop();
// }

function blockHST(x, y, side, primaryColor, secondaryColor) {
  push();
  noStroke();
  fill(primaryColor);
  square(x, y, side);

  fill(secondaryColor);
  triangle(x, y, x, y + side, x + side, y + side);
  pop();
}

function blockQST(x, y, side, primaryColor, secondaryColor) {
  push();
  noStroke();
  fill(primaryColor);
  square(x, y, side);

  fill(secondaryColor);
  triangle(x, y, x + side / 2, y + side / 2, x + side, y);
  triangle(x, y + side, x + side / 2, y + side / 2, x + side, y + side);
  pop();
}

function blockFourPatches(x, y, side, primaryColor, secondaryColor) {
  push();
  noStroke();
  fill(primaryColor);
  square(x, y, side);

  fill(secondaryColor);
  square(x, y + side / 2, side / 2);
  square(x + side / 2, y, side / 2);
  pop();
}

function blockNinePatches(x, y, side, primaryColor, secondaryColor) {
  push();
  noStroke();
  fill(primaryColor);
  square(x, y, side);

  fill(secondaryColor);
  square(x, y, side / 3);
  square(x, y + side * 2 / 3, side / 3);
  square(x + side / 3, y + side / 3, side / 3);
  square(x + side * 2 / 3, y, side / 3);
  square(x + side * 2 / 3, y + side * 2 / 3, side / 3);
  pop();
}

function blockFlyingGeese(x, y, side, primaryColor, secondaryColor) {
  push();
  noStroke();
  fill(primaryColor);
  square(x, y, side);

  fill(secondaryColor);
  triangle(x, y + side / 2, x + side / 2, y, x + side, y + side / 2);
  triangle(x, y + side, x + side / 2, y + side / 2, x + side, y + side);
  pop();
}

function blockSquareInASquare(x, y, side, primaryColor, secondaryColor) {
  push();
  noStroke();
  fill(primaryColor);
  square(x, y, side);

  fill(secondaryColor);
  quad(x, y + side / 2, x + side / 2, y, x + side, y + side / 2, x + side / 2, y + side);
  pop();
}

function blockTriangleInASquare(x, y, side, primaryColor, secondaryColor) {
  push();
  noStroke();
  fill(primaryColor);
  square(x, y, side);

  fill(secondaryColor);
  triangle(x, y + side, x + side / 2, y, x + side, y + side);
  pop();
}

// function blockCornerBeam(x, y, side, primaryColor, secondaryColor) {
//
// }
