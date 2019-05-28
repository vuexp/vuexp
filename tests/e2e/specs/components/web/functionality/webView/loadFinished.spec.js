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
  'C13839421 Events - Event : loadFinished'() {
    this.currentPage.loadFinishedPage('http://nativescript-vue.org/');
    this.client.pause(30000);
    this.currentPage.assert.containsText('@eventLabel', 'loadFinished').checkScreenshot('@image');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
