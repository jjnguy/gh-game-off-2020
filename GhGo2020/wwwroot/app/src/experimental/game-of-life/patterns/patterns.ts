/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2020 Digitsensitive
 * @description  Game Of Life: Patterns
 * @license      Digitsensitive
 */

/**
 * A selection of patterns for Game of Life
 * https://www.conwaylife.com
 */
export const PATTERNS = {
  BLINKER: [[true, true, true]],
  BLOCK: [
    [true, true],
    [true, true]
  ],
  EATER1: [
    [true, true, false, false],
    [true, false, true, false],
    [false, false, true, false],
    [false, false, true, true]
  ],
  GLIDER: [
    [false, true, false],
    [false, false, true],
    [true, true, true]
  ],
  HERSCHEL: [
    [true, false, false],
    [true, true, true],
    [true, false, true],
    [false, false, true]
  ]
};
