module.exports = {
  tags: ['component', 'textfield'],
  before: function(client, done) {
    this.currentPage = client.maximizeWindow().page.switchPage();
    this.currentPage
      .navigate('http://localhost:8080/components/switcher.html')
      .waitForElementVisible('body', 60000)
      .customPerform(function() {
        done();
      });
  },
  'Check Switcher On '() {
    this.currentPage.click('@switch').assert.containsText('@switch_label', 'Switcher On');
  },
  after: function(client, done) {
    client.end().customPerform(done);
  },
};
