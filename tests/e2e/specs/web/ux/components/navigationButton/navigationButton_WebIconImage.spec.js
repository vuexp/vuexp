module.exports = {
  tags: ['component', 'navigationBar'],
  before: function(client, done) {
    this.currentPage = client.maximizeWindow().page.navigationButtonPage();
    this.currentPage
      .navigate('http://localhost:8080/components/navigation-button.html')
      .waitForElementVisible('body', 60000)
      .customPerform(function() {
        done();
      });
  },
  'Check NavigationButton Image'() {
    this.currentPage
      .selectWebIconOption()
      .clickBackButton()
      .checkScreenshot('@actionBar');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
