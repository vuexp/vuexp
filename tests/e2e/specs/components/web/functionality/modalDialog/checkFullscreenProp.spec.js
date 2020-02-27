module.exports = {
  tags: ['dialogs', 'modalDialog'],
  before: function(client, done) {
    this.currentPage = client.maximizeWindow().page.modalDialogPage();
    this.currentPage
      .navigate(client.globals.devUrl + 'components/dialogs/modal-base.html')
      .waitForElementVisible('body', 60000)
      .customPerform(function() {
        done();
      });
  },
  'C13896643 - Props/Name :fullScreen , type :Boolean'() {
    this.currentPage
      .checkInitialElements()
      .clickFullScreenSelectbox()
      .clickShowModalButton()
      .checkModalDialogElements()
      .checkScreenshot('@modalDialogArea');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
