module.exports = {
  tags: ['component', 'progress'],
  before: function(client, done) {
    this.currentPage = client.maximizeWindow().page.progressPage();
    this.currentPage
      .navigate(client.globals.devUrl + 'components/progress.html')
      .waitForElementVisible('body', 60000)
      .customPerform(function() {
        done();
      });
  },
  'C13843422 Props:/Name: maxValue, Type: Number'() {
    this.currentPage
      .setTextToMaxValueInput(15)
      .setTextToIncreamentInput(15)
      .icreament()
      .assert.containsText('@prog_value', 'Current Progress: 15')
      .icreament()
      .assert.containsText('@alert_label', 'Incremented value is greater than max value')
      .alert()
      .assert.containsText('@prog_value', 'Current Progress: 15');
  },
  after: function(client, done) {
    client.end().customPerform(done);
  },
};
