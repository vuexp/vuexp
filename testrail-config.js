var testrailLink = 'https://testrail.comodo.net/testrail/';
var testrailUser = 'nucalqa20@gmail.com';
var testrailPass = '12345678';

module.exports = {
  testrail: {
    host: testrailLink,
    user: testrailUser,
    password: testrailPass,
  },
  status: {
    passed: 1,
    failed: 5,
    skipped: 2,
    retest: 4,
  },
  comment: {
    pass: 'Test Passed',
    fail: 'Test Failed',
  },
  version: null, //version
  elapsed: null, // elapsed
  defects: null, // defects
  custom_step_results: null, // custom_step_results
};
