const importedAddFunction = require("./add.js");

const sum = importedAddFunction(5, 5);
const sumcopy = importedAddFunction(5, 10);
console.log(sum);
console.log(sumcopy);
console.log("Index file");
