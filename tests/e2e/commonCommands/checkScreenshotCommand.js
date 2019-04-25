const verticalTraversal = require('../utils').verticalTravers;

const FILE_NAME_SEPERATOR = '-';
const PAGE_SELECTOR = 'body';
const nightwatchSettingsFn = require('../nightwatch-vrt-settings');
const { extractSingleTestRailId } = require('../mappers/decorators');

module.exports = function checkScreenshot(vrtSettings, message) {
  return {
    checkScreenshot: function checkScreenshot(elementId) {
      if (elementId) {
        return checkElementScreenshot.call(this, elementId, vrtSettings, message);
      }
      return checkPageScreenshot.call(this, vrtSettings, message);
    },
  };
};

function checkElementScreenshot(elementId, vrtSettings, message) {
  const pageName = this.name;
  const caseName = extractSingleTestRailId(this.api.currentTest.name);
  const alternateCaseName = this.api.currentTest.group + Math.floor(Math.random() * 1000);
  const elementPath = [];
  verticalTraversal(this, m => elementPath.push(m.name));
  elementPath.reverse().push(elementId);
  const fileName = `${caseName ? caseName : alternateCaseName}${FILE_NAME_SEPERATOR}${elementPath.join(FILE_NAME_SEPERATOR)}`;
  this.assert.screenshotIdenticalToBaseline(
    elementId,
    fileName,
    vrtSettings,
    JSON.stringify({
      message: infoMessageTemplate(`${pageName} - ${elementPath.join(FILE_NAME_SEPERATOR)}`, message || ''),
      caseName: caseName ? caseName : alternateCaseName,
      pageName,
      elementPath,
      files: [diffScreenshotPath(this, fileName), latestScreenshotPath(this, fileName)],
    }),
  );
  return this;
}

function checkPageScreenshot(vrtSettings, message) {
  const pageName = this.name;
  const caseName = extractSingleTestRailId(this.api.currentTest.name);
  const alternateCaseName = this.api.currentTest.group + Math.floor(Math.random() * 1000);
  const fileName = `${caseName ? caseName : alternateCaseName}${FILE_NAME_SEPERATOR}${pageName}`;
  this.assert.screenshotIdenticalToBaseline(
    PAGE_SELECTOR,
    fileName,
    vrtSettings,
    JSON.stringify({
      message: infoMessageTemplate(`${pageName}- ${PAGE_SELECTOR}`, message || ''),
      caseName: caseName ? caseName : alternateCaseName,
      pageName,
      files: [diffScreenshotPath(this, fileName), latestScreenshotPath(this, fileName)],
    }),
  );
  return this;
}

function diffScreenshotPath(context, fileName) {
  const nightwatchSettings = nightwatchSettingsFn(context);
  return nightwatchSettings.generate_screenshot_path(context.api, nightwatchSettings.diff_screenshots_path, `${fileName}${nightwatchSettings.diff_suffix}`);
}
function latestScreenshotPath(context, fileName) {
  const nightwatchSettings = nightwatchSettingsFn(context);
  return nightwatchSettings.generate_screenshot_path(context.api, nightwatchSettings.latest_screenshots_path, `${fileName}${nightwatchSettings.latest_suffix}`);
}

function infoMessageTemplate(element, message) {
  return `Visual regression test for: ${element} message: ${message}`;
}
