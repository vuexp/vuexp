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
  'C13843479 Check Switcher On '() {
    this.currentPage.click('@switch').assert.containsText('@switch_label', 'Switcher On');
  },
  after: function(client, done) {
    client.end().customPerform(done);
  },
};
