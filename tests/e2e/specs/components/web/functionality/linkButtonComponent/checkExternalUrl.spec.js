module.exports = {
  tags: ['component', 'linkButton'],
  before: function(client, done) {
    this.currentPage = client.maximizeWindow().page.linkButtonPage();
    this.currentPage
      .navigate(client.globals.devUrl + 'components/vxp-link.html')
      .waitForElementVisible('body', 60000)
      .customPerform(function() {
        done();
      });
  },
  'C13890239 - Probs:/ Name : External url'() {
    this.currentPage
      .checkInitialElements()
      .setExternalUrlText('https://www.google.com/')
      .clickLinkLabel();

    // Handle with new tab
    this.client.windowHandles(function(result) {
      let googleTab = result.value[1]; // New Google tab index
      this.switchWindow(googleTab); // Switch to Google tab
    });
    this.client.closeWindow(); // Close Google tab
    // Handle with old tab
    this.client.windowHandle(function(result) {
      let oldTab = result.value[0]; // Old tab index
      this.switchWindow(oldTab); // Switch to old tab
    });
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
