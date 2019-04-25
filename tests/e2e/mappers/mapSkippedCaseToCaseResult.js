const CaseResult = require('../dtos/caseResult');
const { extractSingleTestRailId, extractCaseDescription, decorateStatus } = require('../mappers/decorators');

function mapSkippedCaseToCaseResult(caseName, runId) {
  let caseResult = new CaseResult(
    runId,
    extractSingleTestRailId(caseName), //TODO may have multiple result
    extractCaseDescription(caseName),
  );
  decorateStatus(caseResult, null);
  return caseResult;
}

module.exports = mapSkippedCaseToCaseResult;
