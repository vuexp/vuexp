module.exports = {
  tags: ['component', 'vxpPanel'],
  before: function(client, done) {
    this.currentPage = client.maximizeWindow().page.vxpPanelPage();
    this.currentPage
      .navigate(client.globals.devUrl + 'components/vxp-panel.html')
      .waitForElementVisible('body', 60000)
      .customPerform(function() {
        done();
      });
  },
  'C13975983 - Check > Panel component elements'() {
    this.currentPage.checkInitialElements().checkScreenshot('@vxpPanelArea');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
