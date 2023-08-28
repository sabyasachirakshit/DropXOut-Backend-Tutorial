const sortArrayImportedFunctions = require("./sortarray.js");

const arr = [5, 1, 2, 3, 4];
console.log("This was array before:", arr);
console.log(
  "This is array after sort with ascending:",
  sortArrayImportedFunctions.sortArrayAsc(arr)
);
console.log(
  "This is array after sort with descending:",
  sortArrayImportedFunctions.sortArrayDesc(arr)
);
