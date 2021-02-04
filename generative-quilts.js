let grid = 80, block = '';

function setup() {
  createCanvas(8 * grid, 8 * grid);
  noLoop();
  noStroke();

  angleMode(DEGREES);
}

function draw() {
  clear();
  randomSeed(seed);

  var blocks = [], blockType, primaryColors = [webColor(), webColor(), webColor(), webColor()], secondaryColors = [webColor(), webColor(), webColor(), webColor()];

  if (document.querySelector('#hst').checked) {
    blocks.push('hst');
  }
  if (document.querySelector('#qst').checked) {
    blocks.push('qst');
  }
  if (document.querySelector('#four_patches').checked) {
    blocks.push('four_patches');
  }
  if (document.querySelector('#nine_patches').checked) {
    blocks.push('nine_patches');
  }
  if (document.querySelector('#flying_geese').checked) {
    blocks.push('flying_geese');
  }
  if (document.querySelector('#square_in_a_square').checked) {
    blocks.push('square_in_a_square');
  }
  if (document.querySelector('#triangle_in_a_square').checked) {
    blocks.push('triangle_in_a_square');
  }

  for (var j = 0; j < width; j += grid) {
    for (var i = 0; i < width; i += grid) {
      blockType = random(blocks);

      if (blockType == 'hst') {
        blockHST(i, j, grid, randomDirection(), primaryColors[gaussianIndex()], secondaryColors[gaussianIndex()]);
      } else if (blockType == 'qst') {
        blockQST(i, j, grid, randomDirection(), primaryColors[gaussianIndex()], secondaryColors[gaussianIndex()]);
      } else if (blockType == 'four_patches') {
        blockFourPatches(i, j, grid, randomDirection(), primaryColors[gaussianIndex()], secondaryColors[gaussianIndex()]);
      } else if (blockType == 'nine_patches') {
        blockNinePatches(i, j, grid, randomDirection(), primaryColors[gaussianIndex()], secondaryColors[gaussianIndex()]);
      } else if (blockType == 'flying_geese') {
        blockFlyingGeese(i, j, grid, randomDirection(), primaryColors[gaussianIndex()], secondaryColors[gaussianIndex()]);
      } else if (blockType == 'square_in_a_square') {
        blockSquareInASquare(i, j, grid, randomDirection(), primaryColors[gaussianIndex()], secondaryColors[gaussianIndex()]);
      } else if (blockType == 'triangle_in_a_square') {
        blockTriangleInASquare(i, j, grid, randomDirection(), primaryColors[gaussianIndex()], secondaryColors[gaussianIndex()]);
      }
    }
  }
}

function randomDirection() {
  return random(['NORTH', 'EAST', 'SOUTH', 'WEST']);
}

function gaussianIndex() {
  return min(3, floor(abs(randomGaussian()) * 4));
}
