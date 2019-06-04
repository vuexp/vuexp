module.exports = {
  tags: ['component', 'tabView'],
  before: function(client, done) {
    this.currentPage = client.maximizeWindow().page.tabViewPage();
    this.currentPage
      .navigate(client.globals.devUrl + 'components/tabview.html')
      .waitForElementVisible('body', 60000)
      .customPerform(function() {
        done();
      });
  },
  'C13843458 Web - TabViewItem Props:/Name: webIcon, Type: String'() {
    this.currentPage.selectWebIcon().checkScreenshot('@tabView');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
