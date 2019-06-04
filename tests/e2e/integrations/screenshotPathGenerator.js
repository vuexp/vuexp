const path = require('path');

function generateScreenshotFilePath(nightwatchClient, basePath, fileName) {
  const moduleName = nightwatchClient.currentTest.module;
  return path.join(process.cwd(), basePath, moduleName, fileName);
}

module.exports = generateScreenshotFilePath;
