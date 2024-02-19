const fs = require("fs/promises");
const fileName = "myfile.txt";
const fileContent = "Newton School";
const writeFile = async (fileName, fileContent) => {
  // write code here
  // dont change function name
  return await fs.writeFile(fileName, fileContent);
};
writeFile(fileName, fileContent);

module.exports = { writeFile };
