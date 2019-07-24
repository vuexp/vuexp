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
  'C13975997 - Check > Buttons should be customizable in Panel Header'() {
    this.currentPage
      .checkInitialElements()
      .setFirstPanelIconSelectboxOptions('fa-share-alt')
      .clickFirstAddPanelIconButton()
      .setSecondPanelIconSelectboxOptions('fa-share-square-o');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
