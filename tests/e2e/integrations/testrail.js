const testRail = require('nightwatch_testrail');
const assert = require('assert');
const { STATUS } = require('../dtos/caseResult');

module.exports = {
  reporter: reporter,
};

function reporter(runId, resultDto, callback) {
  assert.ok(callback);
  assert.ok(resultDto);

  let caseResults = [];
  resultDto.suiteResults.forEach(m => m.caseResults.forEach(n => caseResults.push(n)));
  caseResults.filter(m => m.caseId).forEach(reportCaseResult);
  callback();

  function reportCaseResult(caseResult) {
    assert.ok(caseResult);
    assert.ok(caseResult.status);

    if (caseResult.status === STATUS.SKIPPED) {
      return reportSkippedCaseResult(caseResult);
    }
    if (caseResult.status === STATUS.PASSED) {
      return reportPassedCaseResult(caseResult);
    }
    if (caseResult.status === STATUS.FAILED) {
      return reportFailedCaseResult(caseResult);
    }

    function reportFailedCaseResult(caseResult) {
      assert.ok(caseResult);
      assert.ok(caseResult.runId);
      assert.ok(caseResult.caseId);
      assert.ok(caseResult.errorMessages);
      testRail.report({}, 5, caseResult.failedAssertions.map(errorReportTemplate).join('\n'), caseResult.runId, caseResult.caseId);
    }

    function reportPassedCaseResult(caseResult) {
      assert.ok(caseResult);
      assert.ok(caseResult.runId);
      assert.ok(caseResult.caseId);
      testRail.report({}, 1, `C${caseResult.caseId} - ${caseResult.caseDescription} Passed`, caseResult.runId, caseResult.caseId);
    }

    function reportSkippedCaseResult(caseResult) {
      assert.ok(caseResult);
      assert.ok(caseResult.runId);
      assert.ok(caseResult.caseId);
      assert.ok(caseResult.caseDescription);
      testRail.report({}, 2, `C${caseResult.caseId} - ${caseResult.caseDescription} skipped`, caseResult.runId, caseResult.caseId);
    }

    function errorReportTemplate(assertionResult) {
      return `${assertionResult.message}\n ${assertionResult.failure}`;
    }
  }
}
