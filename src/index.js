
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (typeof matrix !== 'undefined' && matrix.length !== 0) {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i].sort((a, b) => a - b);
      if (i % 2 !== 0) {
        matrix[i].reverse();
      }
    }
  } else {
    return [];
  }

  let arr = matrix.flat()
  return arr;
}
