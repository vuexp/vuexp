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
  'C13975985 - Check > Panel Header elements'() {
    this.currentPage.checkInitialElements().assert.containsText('@panelTitleSpan', 'Panel');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
