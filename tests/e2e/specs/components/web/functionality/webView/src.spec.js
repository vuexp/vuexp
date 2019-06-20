module.exports = {
  tags: ['component', 'webView'],
  before: function(client, done) {
    this.currentPage = client.maximizeWindow().page.WebViewHtmlViewPage();
    this.currentPage
      .navigate(client.globals.devUrl + 'components/vxp-webview.html')
      .waitForElementVisible('body', 60000)
      .customPerform(function() {
        done();
      });
  },
  'C13839419 Props-Name:src, Type: String'() {
    this.currentPage.addSrc('http://nativescript-vue.org/');
    this.client.pause(30000);
    this.currentPage.checkScreenshot('@image');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
