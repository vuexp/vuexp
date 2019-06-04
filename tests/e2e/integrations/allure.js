const fs = require('fs');
const path = require('path');
const Allure = require('allure-js-commons');
const Runtime = require('allure-js-commons/runtime');

const allureReporter = new Allure();
const runtimeAllure = new Runtime(allureReporter);

function writer(resultDto, callback) {
  allureReporter.setOptions(' -o reports/allure-report' || {});
  resultDto.suiteResults.forEach(writeSuiteResult);
  callback();
}

function writeSuiteResult(suiteResult) {
  allureReporter.startSuite(suiteResult.suiteName, suiteResult.startTime);
  suiteResult.caseResults.forEach(writeCaseResult);

  allureReporter.endSuite(suiteResult.endTime);
}

function writeCaseResult(caseResult) {
  allureReporter.startCase(`${caseResult.caseId} - ${caseResult.caseDescription}`, caseResult.startTime);
  if (caseResult.caseId) {
    runtimeAllure.addLabel('case id', caseResult.caseId);
  }
  if (caseResult.runId) {
    runtimeAllure.addLabel('run id', caseResult.runId);
  }
  if (caseResult.caseDescription) {
    runtimeAllure.description('case id', caseResult.caseId);
  }
  allureReporter.addAttachment('Reported Case Result', JSON.stringify(caseResult), 'application/json');
  caseResult.assertionResults.forEach(m => writeAssertionResult(m, caseResult.startTime, caseResult.endTime));

  allureReporter.endCase(caseResult.status, caseResult.errorMessage, caseResult.endTime);
}

function writeAssertionResult(assertionResult, caseStartTime, caseEndTime) {
  allureReporter.startStep(assertionResult.message, caseStartTime);
  if (assertionResult.status === 'failed') {
    assertionResult.filePaths.forEach(m => {
      let fullFileName = m + '.png';
      if (fs.existsSync(fullFileName)) {
        let fileInfo = path.parse(fullFileName);
        allureReporter.addAttachment(`Visual regression file ${fileInfo.name}:`, fs.readFileSync(fullFileName), 'image/png');
      }
    });
  }

  allureReporter.endStep(assertionResult.status, caseEndTime);
}

module.exports = writer;
