class CaseResult {
  constructor(runId, caseId, caseDescription) {
    this.runId = runId;
    this.caseId = caseId;
    this.caseDescription = caseDescription;
    this.assertionResults = [];
    this.status = module.exports.STATUS.NOT_TESTED;
  }
  get totalAssertionsCount() {
    return this.assertionResults.length;
  }
  get failedAssertionsCount() {
    return this.assertionResults.filter(m => m.failure).length;
  }
  get passedAssertionsCount() {
    return this.assertionResults.filter(m => !m.failure).length;
  }
  get totalAssertions() {
    return this.assertionResults;
  }
  get failedAssertions() {
    return this.assertionResults.filter(m => m.failure);
  }
  get passedAssertions() {
    return this.assertionResults.filter(m => !m.failure);
  }
  get errorMessages() {
    return this.assertionResults.filter(m => m.failure).map(m => m.failure);
  }
  get messages() {
    return this.assertionResults.map(m => m.message);
  }
}
module.exports = CaseResult;
module.exports.STATUS = {
  SKIPPED: 'skipped',
  PASSED: 'passed',
  FAILED: 'failed',
  NOT_TESTED: 'not tested',
};
