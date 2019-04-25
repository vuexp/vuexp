class ResultDto {
  constructor() {
    this.suiteResults = [];
  }
  get totalCases() {
    return this.suiteResults.reduce((acc, m) => ((acc += m.totalCases), acc), 0);
  }
  get failedCases() {
    return this.suiteResults.reduce((acc, m) => ((acc += m.failedCases), acc), 0);
  }
  get skippedCases() {
    return this.suiteResults.reduce((acc, m) => ((acc += m.skippedCases), acc), 0);
  }
  get passedCases() {
    return this.suiteResults.reduce((acc, m) => ((acc += m.passedCases), acc), 0);
  }
  get totalAssertions() {
    return this.suiteResults.reduce((acc, m) => ((acc += m.totalAssertionsCount), acc), 0);
  }
  get failedAssertions() {
    return this.suiteResults.reduce((acc, m) => ((acc += m.failedAssertionsCount), acc), 0);
  }
  get passedAssertions() {
    return this.suiteResults.reduce((acc, m) => ((acc += m.passedAssertionsCount), acc), 0);
  }
  get totalElapsedTime() {
    return this.suiteResults.reduce((acc, m) => ((acc += m.elapsedTime), acc));
  }
  get startTime() {
    return this.suiteResults.reduce((acc, m) => (acc < m.elapsedTime ? acc : m.elapsedTime));
  }
  get endTime() {
    return this.suiteResults.reduce((acc, m) => (acc > m.elapsedTime ? acc : m.elapsedTime));
  }
}
module.exports = ResultDto;
