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
  'C13975998 - Check > Panel Header should allow to add maximum 2 buttons'() {
    this.currentPage
      .checkInitialElements()
      .clickFirstAddPanelIconButton()
      .clickSecondAddPanelIconButton()
      .checkAlertDialogElements()
      .assert.containsText('@alertDialogDescription', 'You can add 2 icons')
      .clickAlertDialogOkButton()
      .checkInitialElements();
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
