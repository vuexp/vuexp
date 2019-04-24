const assert = require('assert');
const { STATUS } = require('../dtos/caseResult');

function decorateAssertions(caseResult, caseValue, assertionMapper) {
  if (caseResult && caseValue && caseValue.assertions) {
    caseValue.assertions.forEach(m => caseResult.assertionResults.push(assertionMapper(m, decorateAssertionData)));
  }
}

function decorateAssertionData(assertionResult, assertion) {
  try {
    assertionResult.data = JSON.parse(assertion.message);
    assertionResult.message = assertionResult.data.message;
    assertionResult.caseName = assertionResult.data.caseName;
    assertionResult.pageName = assertionResult.data.pageName;
    assertionResult.elementPath = assertionResult.data.elementPath;
    if (assertionResult.data.files && assertionResult.data.files.length) {
      assertionResult.filePaths.push(...assertionResult.data.files);
    }
  } catch (err) {
    if (err instanceof SyntaxError) {
      assertionResult.message = assertion.message;
      return;
    }
    throw err;
  }
}

function decorateStatus(caseResult, caseValue) {
  if (!caseResult) return;
  if (!caseValue) {
    caseResult.status = STATUS.SKIPPED;
    return;
  }
  if (isCaseResultSuccessful(caseValue)) {
    caseResult.status = STATUS.PASSED;
    return;
  }
  caseResult.status = STATUS.FAILED;

  function isCaseResultSuccessful(result) {
    if (result.failed === 0 && result.errors === 0) {
      return true;
    }
    return false;
  }
}

function decorateAssertionStats(caseResult, caseValue) {
  caseResult.errorAssertions = parseInt(caseValue.errors) + parseInt(caseValue.failed);
  caseResult.skippedAssertions = parseInt(caseValue.skipped);
  caseResult.passedAssertions = parseInt(caseValue.passed);
  caseResult.totalAssertions = caseResult.errorAssertions + caseResult.skippedAssertions + caseResult.passedAssertions;
}

function decorateTime(caseResult, startTime, elapsedTime) {
  if (startTime && elapsedTime) {
    caseResult.startTime = startTime;
    caseResult.elapsedTime = elapsedTime;
    caseResult.endTime = startTime + elapsedTime;
  }
}

function extractCaseDescription(description) {
  assert.ok(description);
  const ids = extractTestRailIds(description);
  return ids.reduce((acc, m) => acc.replace(`C${m}`, ''), description).trim();
}

function extractTestRailIds(description) {
  return description
    .split(' ')
    .filter(checkTestRailId)
    .map(m => m.replace('C', ''));
}

function extractSingleTestRailId(description) {
  const ids = description
    .split(' ')
    .filter(checkTestRailId)
    .map(m => m.replace('C', ''));
  assert.ok(ids.length < 2, 'Expecting single id but extracted multiple id. Fix case description to have single id');
  if (ids.length > 0) {
    return ids[0];
  }
  return null;
}

function checkTestRailId(text) {
  return /^(C)([0-9]{6,6}$)/.test(text);
}

module.exports = {
  decorateAssertions: decorateAssertions,
  decorateAssertionData: decorateAssertionData,
  decorateStatus: decorateStatus,
  decorateAssertionStats: decorateAssertionStats,
  decorateTime: decorateTime,
  extractCaseDescription: extractCaseDescription,
  extractSingleTestRailId: extractSingleTestRailId,
};
