const CaseResult = require('../dtos/caseResult');
const mapAssertionToAssertionResult = require('../mappers/mapAssertionToAssertionResult');

const {
  decorateStatus,
  decorateAssertions,
  //    decorateMessage,
  //    decorateErrors,
  decorateAssertionStats,
  decorateTime,
  extractSingleTestRailId,
  extractCaseDescription,
} = require('../mappers/decorators');

function mapCompletedCaseToCaseResult(caseName, caseValue, runId, sideEffectObj) {
  let caseResult = new CaseResult(
    runId,
    extractSingleTestRailId(caseName), //TODO may have multiple result
    extractCaseDescription(caseName),
  );
  decorateStatus(caseResult, caseValue);
  decorateAssertions(caseResult, caseValue, mapAssertionToAssertionResult);
  //decorateMessage(caseResult, caseValue);
  //decorateErrors(caseResult, caseValue);
  decorateAssertionStats(caseResult, caseValue);

  let startTime = sideEffectObj.current;
  decorateTime(caseResult, startTime, caseValue.timeMs);
  sideEffectObj.current += caseValue.timeMs;

  return caseResult;
}

module.exports = mapCompletedCaseToCaseResult;
