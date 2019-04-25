const { STATUS } = require('./caseResult');

class SuiteResult {
  constructor(caseResults, startTime, elapsedTime, suiteName) {
    this.caseResults = caseResults || [];
    this.startTime = startTime;
    this.elapsedTime = elapsedTime;
    this.suiteName = suiteName;
    this.suiteTags = [];
  }

  get totalCases() {
    return this.caseResults.length;
  }
  get failedCases() {
    return this.caseResults.filter(m => m.status === STATUS.FAILED).length;
  }
  get skippedCases() {
    return this.caseResults.filter(m => m.status === STATUS.SKIPPED).length;
  }
  get passedCases() {
    return this.caseResults.filter(m => m.status === STATUS.PASSED).length;
  }
  get totalAssertions() {
    return this.caseResults.reduce((acc, m) => ((acc += m.totalAssertionsCount.length), acc), 0);
  }
  get failedAssertions() {
    return this.caseResults.reduce((acc, m) => ((acc += m.failedAssertionsCount.length), acc), 0);
  }
  get passedAssertions() {
    return this.caseResults.reduce((acc, m) => ((acc += m.passedAssertionsCount.length), acc), 0);
  }
  get endTime() {
    return this.startTime + this.elapsedTime;
  }
}

module.exports = SuiteResult;
