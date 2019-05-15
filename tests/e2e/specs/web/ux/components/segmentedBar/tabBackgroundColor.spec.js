module.exports = {
  tags: ['component', 'segmentedBarBackgroundColor'],
  before: function(client, done) {
    this.currentPage = client.maximizeWindow().page.navigationButtonPage();
    this.currentPage
      .navigate('http://localhost:8080/components/navigation-button.html')
      .waitForElementVisible('body', 60000)
      .customPerform(function() {
        done();
      });
  },
  'C13843434 Props:/Name: selectedBackgroundColor, Type: Color'() {
    this.currentPage.selectBackgroundColor('#00ff00').checkScreenshot('@segmentedBarImage');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
