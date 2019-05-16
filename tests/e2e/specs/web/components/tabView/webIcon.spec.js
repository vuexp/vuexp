module.exports = {
  tags: ['component', 'tabView'],
  before: function(client, done) {
    this.currentPage = client.maximizeWindow().page.tabViewPage();
    this.currentPage
      .navigate('http://localhost:8080/components/tabview.html')
      .waitForElementVisible('body', 60000)
      .customPerform(function() {
        done();
      });
  },
  'C13843457 TabViewItem Props:/Name: title, Type: String'() {
    this.currentPage.selectWebIcon().checkScreenshot('@tabView');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
