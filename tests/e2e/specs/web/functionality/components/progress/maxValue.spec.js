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
  'Check progress maxValue'() {
    this.currentPage
      .setTextToMaxValueInput(15)
      .setTextToIncreamentInput(15)
      .click('@increament_button')
      .assert.containsText('@prog_value', 'Current Progress: 15')
      .click('@increament_button')
      .assert.containsText('@alert_label', 'Incremented value is greater than max value')
      .click('@alert_ok')
      .assert.containsText('@prog_value', 'Current Progress: 15');
  },
  after: function(client, done) {
    client.end().customPerform(done);
  },
};
