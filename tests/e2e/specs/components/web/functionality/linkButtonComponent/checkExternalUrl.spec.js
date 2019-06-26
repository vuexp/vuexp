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
    let googleUrl = 'https://www.google.com/';

    this.currentPage
      .checkInitialElements()
      .setExternalUrlText(googleUrl)
      .clickLinkLabel();

    // Handle with new tab
    this.client.windowHandles(function(result) {
      let googleTab = result.value[1]; // New Google tab index
      this.switchWindow(googleTab); // Switch to Google tab
    });
    // Verify new tab is "Google" by taking a screenshot
    this.currentPage.checkScreenshot();
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
