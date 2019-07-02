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
      .clickLinkLabel()
      .api.pause(3000)
      .windowHandles(function(result) {
        // Check there are 2 sessions which shows new tab is opened
        this.assert.equal(result.value.length, 2, 'There should be two tabs open.');
      });
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
