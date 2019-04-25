const ResultDto = require('../dtos/resultDto');
const mapResultModuleToSuiteResult = require('./mapResultModuleToSuiteResult');

module.exports = mapResultToResultDto;

function mapResultToResultDto(runId, results, callback) {
  let resultDto = new ResultDto();
  let suiteResults = Object.entries(results.modules).reduce((acc, m) => acc.concat(mapResultModuleToSuiteResult(m[0], m[1], runId)), []);
  resultDto.suiteResults = suiteResults;

  callback(null, resultDto);
}
