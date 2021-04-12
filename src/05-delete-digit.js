/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = String(n);
  const arr = [];
  let strTemp = '';
  for (let i = 0; i < str.length; i++) {
    strTemp = str.slice(0, i) + str.slice(i + 1);
    arr.push(strTemp);
  }
  return Math.max.apply(null, arr);
}

module.exports = deleteDigit;
