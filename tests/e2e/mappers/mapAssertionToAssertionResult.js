const AssertionResult = require('../dtos/assertionResult');
const { decorateAssertionData } = require('../mappers/decorators');

function mapAssertionToAssertionResult(assertion) {
  let assertionResult = new AssertionResult();
  assertionResult.failure = assertion.failure;
  assertionResult.stackTrace = assertion.stackTrace;
  assertionResult.fullMsg = assertion.fullMsg;
  decorateAssertionData(assertionResult, assertion);
  return assertionResult;
}

module.exports = mapAssertionToAssertionResult;
