module.exports = {
  tags: ['component', 'htmlView'],
  before: function(client, done) {
    this.currentPage = client.maximizeWindow().page.WebViewHtmlViewPage();
    this.currentPage
      .navigate(client.globals.devUrl + 'components/webview.html')
      .waitForElementVisible('body', 60000)
      .customPerform(function() {
        done();
      });
  },
  'C13858882 Props-Name:html, Type: String'() {
    this.currentPage.addHtml('<div><h1>Some static HTML</h1></div>').checkScreenshot('@image');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
