function blockHST(x, y, side, direction, primaryColor, secondaryColor) {
  push();

  translate(x, y);
  rotateAndTranslate(direction, side);

  fill(primaryColor);
  square(0, 0, side);

  fill(secondaryColor);
  triangle(0, 0, 0, 0 + side, 0 + side, 0 + side);

  pop();
}

function blockQST(x, y, side, direction, primaryColor, secondaryColor) {
  push();

  translate(x, y);
  rotateAndTranslate(direction, side);

  fill(primaryColor);
  square(0, 0, side);

  fill(secondaryColor);
  triangle(0, 0, 0 + side / 2, 0 + side / 2, 0 + side, 0);
  triangle(0, 0 + side, 0 + side / 2, 0 + side / 2, 0 + side, 0 + side);

  pop();
}

function blockFourPatches(x, y, side, direction, primaryColor, secondaryColor) {
  push();

  translate(x, y);
  rotateAndTranslate(direction, side);

  fill(primaryColor);
  square(0, 0, side);

  fill(secondaryColor);
  square(0, 0 + side / 2, side / 2);
  square(0 + side / 2, 0, side / 2);

  pop();
}

function blockNinePatches(x, y, side, direction, primaryColor, secondaryColor) {
  push();

  translate(x, y);
  rotateAndTranslate(direction, side);

  fill(primaryColor);
  square(0, 0, side);

  fill(secondaryColor);
  square(0, 0, side / 3);
  square(0, 0 + side * 2 / 3, side / 3);
  square(0 + side / 3, 0 + side / 3, side / 3);
  square(0 + side * 2 / 3, 0, side / 3);
  square(0 + side * 2 / 3, 0 + side * 2 / 3, side / 3);

  pop();
}

function blockFlyingGeese(x, y, side, direction, primaryColor, secondaryColor) {
  push();

  translate(x, y);
  rotateAndTranslate(direction, side);

  fill(primaryColor);
  square(0, 0, side);

  fill(secondaryColor);
  triangle(0, 0 + side / 2, 0 + side / 2, 0, 0 + side, 0 + side / 2);
  triangle(0, 0 + side, 0 + side / 2, 0 + side / 2, 0 + side, 0 + side);

  pop();
}

function blockSquareInASquare(x, y, side, direction, primaryColor, secondaryColor) {
  push();

  translate(x, y);
  rotateAndTranslate(direction, side);

  fill(primaryColor);
  square(0, 0, side);

  fill(secondaryColor);
  quad(0, 0 + side / 2, 0 + side / 2, 0, 0 + side, 0 + side / 2, 0 + side / 2, 0 + side);

  pop();
}

function blockTriangleInASquare(x, y, side, direction, primaryColor, secondaryColor) {
  push();

  translate(x, y);
  rotateAndTranslate(direction, side);

  fill(primaryColor);
  square(0, 0, side);

  fill(secondaryColor);
  triangle(0, 0 + side, 0 + side / 2, 0, 0 + side, 0 + side);

  pop();
}

function rotateAndTranslate(direction, side) {
  switch(direction) {
    case 'NORTH':
      rotate(0);
      break;
    case 'EAST':
      translate(side, 0);
      rotate(90);
      break;
    case 'SOUTH':
      translate(side, side);
      rotate(180);
      break;
    case 'WEST':
      translate(0, side);
      rotate(270);
      break;
    default:
      console.log('[quilt-blocks:rotateAndTranslate] bad direction');
  }
}
