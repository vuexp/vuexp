module.exports = {
  tags: ['component', 'webView'],
  before: function(client, done) {
    this.currentPage = client.maximizeWindow().page.WebViewHtmlViewPage();
    this.currentPage
      .navigate(client.globals.devUrl + 'components/webview.html')
      .waitForElementVisible('body', 60000)
      .customPerform(function() {
        done();
      });
  },
  'C13839420 Events - Event : loadStarted'() {
    this.currentPage.assert.containsText('@eventLabel', 'loadStarted').checkScreenshot('@image');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
