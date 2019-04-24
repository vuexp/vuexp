class AssertionResult {
  constructor(message, data, stackTrace, failure, filePaths) {
    this.message = message;
    this.data = data;
    this.stackTrace = stackTrace;
    this.failure = failure;
    this.filePaths = filePaths || [];
  }
  get status() {
    if (this.failure) {
      return 'failed';
    }
    return 'passed';
  }
}

module.exports = AssertionResult;
