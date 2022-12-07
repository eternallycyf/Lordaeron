//@ts-nocheck
const fs = require('fs');
const path = require('path');

const targetFile = path.resolve(__dirname, '../../packages/lordaeron-react/package.json');
const packageJson = fs.readFileSync(targetFile, 'utf8');
const version = JSON.parse(packageJson).version;
const projectName = JSON.parse(packageJson).name;

module.exports = {
  version,
  projectName
}