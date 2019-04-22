const defaultRunId = 412;
const defaultDevUrl = 'http://localhost';

const devUrl = process.env.VUE_DEV_SERVER_URL ? process.env.VUE_DEV_SERVER_URL : defaultDevUrl;
const runId = process.env.TESTRAIL_RUN_ID ? process.env.TESTRAIL_RUN_ID : defaultRunId;
module.exports = {
  asyncHookTimeout: 30000,
  devUrl: devUrl,
  runId: runId,
  preDefinedData: {},
  before: function(done) {
    done();
  },
  reporter: function(results, callback) {
    callback();
  },
  after: function(done) {
    done();
  },
};
