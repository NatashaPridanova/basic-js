const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
 function countCats(backyard) {
  let cats = 0;
  backyard.forEach(innerArr => {
      for (let i = 0; i < innerArr.length; i++) {
          if (innerArr[i] === '^^') { cats++ }
      }
  });
  return cats;
}

module.exports = {
  countCats
};
