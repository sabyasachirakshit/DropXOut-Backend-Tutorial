function sortArrayAsc(arr) {
  return arr.sort();
}

function sortArrayDesc(arr) {
  return arr.sort((a, b) => b - a);
}
module.exports = { sortArrayAsc, sortArrayDesc };
