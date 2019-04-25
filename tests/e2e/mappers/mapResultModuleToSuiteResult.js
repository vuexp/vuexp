const SuiteResult = require('../dtos/suiteResult');
const mapSkippedTestToCaseResult = require('./mapSkippedCaseToCaseResult');
const mapCompletedTestToCaseResult = require('./mapCompletedCaseToCaseResult');

function mapResultModuleToSuiteResult(moduleKey, moduleValue, runId) {
  const startTime = Date.parse(moduleValue.timestamp);
  const elapsedTime = parseFloat(moduleValue.time) * 1000;
  const sideEffectObj = { current: startTime };
  const skippedTests = moduleValue.skipped.map(m => mapSkippedTestToCaseResult(m, runId));
  const completedTests = Object.entries(moduleValue.completed).map(m => mapCompletedTestToCaseResult(m[0], m[1], runId, sideEffectObj));
  const caseResults = [].concat(completedTests).concat(skippedTests);
  return new SuiteResult(caseResults, startTime, elapsedTime, moduleKey);
}

module.exports = mapResultModuleToSuiteResult;
