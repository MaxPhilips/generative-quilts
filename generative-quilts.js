let grid = 80, block = '';

function setup() {
  createCanvas(8 * grid, 8 * grid);
  noLoop();

  colorMode(HSB);
}

function draw() {
  clear();
  randomSeed(seed);

  for (var i = 0; i < 8 * grid; i += grid) {
    for (var j = 0; j < 8 * grid; j += grid) {
      if (block == 'rail fence') {
        blockRailFence(i, j, grid, webColor(), webColor(), webColor());
      } else if (block == 'hst') {
        blockHST(i, j, grid, webColor(), webColor());
        webColor();
      } else if (block == 'qst') {
        blockQST(i, j, grid, webColor(), webColor());
        webColor();
      }
    }
  }
}

function blockRailFence(x, y, side, primaryColor, secondaryColor, tertiaryColor) {
  push();
  noStroke();
  fill(primaryColor);
  rect(x, y, side / 3, side);

  fill(secondaryColor);
  rect(x + side / 3, y, side / 3, side);

  fill(tertiaryColor);
  rect(x + side * 2 / 3, y, side / 3, side);
  pop();
}

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

}

function blockNinePatches(x, y, side, primaryColor, secondaryColor) {

}

function blockFlyingGeese(x, y, side, primaryColor, secondaryColor) {

}

function blockSquareInASquare(x, y, side, primaryColor, secondaryColor) {

}

function blockTriangleInASquare(x, y, side, primaryColor, secondaryColor) {

}

function blockCornerBeam(x, y, side, primaryColor, secondaryColor) {

}
