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
  'C13976002 - Check > Panel Header properties'() {
    let testPanelTitle = 'testPanelTitle';

    this.currentPage
      .checkInitialElements()
      .setPanelTitleInputField(testPanelTitle)
      .checkInitialElements()
      .assert.containsText('@panelTitleSpan', testPanelTitle);
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
