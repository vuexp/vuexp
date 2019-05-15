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
  'Check switch is false as a default'() {
    this.currentPage.assert.containsText('@switch_label', 'Switcher Off');
  },
  after: function(client, done) {
    client.end().customPerform(done);
  },
};
