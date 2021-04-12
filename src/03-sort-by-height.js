/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // throw new Error('Not implemented');
  const sortedArr = [];
  const resultArr = [];
  arr.forEach((element) => {
    if (element !== -1) {
      sortedArr.push(element);
    }
    return sortedArr;
  });
  sortedArr.sort((a, b) => a - b);
  let i = 0;
  arr.forEach((element) => {
    if (element === -1) {
      resultArr.push(element);
    } else {
      resultArr.push(sortedArr[i]);
      i++;
    }
  });
  // alert (resultArr);
  return resultArr;
}

module.exports = sortByHeight;
