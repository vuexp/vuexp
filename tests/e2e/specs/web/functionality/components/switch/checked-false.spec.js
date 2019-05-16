module.exports = {
  tags: ['component', 'switch'],
  before: function(client, done) {
    this.currentPage = client.maximizeWindow().page.switchPage();
    this.currentPage
      .navigate(client.globals.devUrl + 'components/switcher.html')
      .waitForElementVisible('body', 60000)
      .customPerform(function() {
        done();
      });
  },
  'C13843480 Check Switcher Off '() {
    this.currentPage
      .click('@switch')
      .click('@switch')
      .assert.containsText('@switch_label', 'Switcher Off');
  },
  after: function(client, done) {
    client.end().customPerform(done);
  },
};
