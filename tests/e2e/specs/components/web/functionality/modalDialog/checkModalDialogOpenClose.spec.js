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
  'C13896644 - Events/Name :tap - Open/Close Modal Dialog'() {
    this.currentPage
      .checkInitialElements()
      .clickShowModalButton()
      .checkModalDialogElements()
      .api.moveTo('@modalDialogOutsideArea')
      .mouseButtonDown('left')
      .mouseButtonUp('left');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
