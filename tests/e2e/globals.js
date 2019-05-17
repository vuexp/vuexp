const caseResultMapper = require('./mappers/mapResultToResultDto');
const allureWriter = require('./integrations/allure');
const testRailReporter = require('./integrations/testrail').reporter;
const nightwatchVrtSettings = require('./nightwatch-vrt-settings');

const defaultRunId = 108802;
const defaultDevUrl = 'http://localhost:8080/';

//const devUrl = process.env.VUE_DEV_SERVER_URL ? process.env.VUE_DEV_SERVER_URL : defaultDevUrl;
const runId = process.env.TESTRAIL_RUN_ID ? process.env.TESTRAIL_RUN_ID : defaultRunId;
module.exports = {
  asyncHookTimeout: 30000,
  devUrl: defaultDevUrl,
  runId: runId,
  preDefinedData: {},
  visual_regression_settings: nightwatchVrtSettings.apply(this),
  before: function(done) {
    nightwatchVrtConfigBugFix(this);
    done();
  },
  reporter: function(results, callback) {
    const self = this;
    try {
      caseResultMapper.call(self, runId, results, function(err, resultDto) {
        allureWriter.call(self, resultDto, function() {
          testRailReporter.call(self, runId, resultDto, function() {
            callback();
          });
        });
      });
    } catch (err) {
      console.debug(err); // eslint-disable-line no-console
    }
  },
  after: function(done) {
    done();
  },
};

function nightwatchVrtConfigBugFix(context) {
  if (context.test_settings) {
    context.test_settings.visual_regression_settings = nightwatchVrtSettings(context);
  }
}
