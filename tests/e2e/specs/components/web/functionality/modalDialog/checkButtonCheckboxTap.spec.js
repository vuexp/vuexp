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
  'C13896646 - Events/Name :tap - Button and Checkbox Tap on Modal Dialog'() {
    this.currentPage
      .checkInitialElements()
      .clickFullScreenSelectbox()
      .clickShowModalButton()
      .checkModalDialogElements()
      .clickModalCheckbox()
      .assert.containsText('@modalCheckboxResultSpan', 'Unchecked') // Verify checkbox has "Unchecked" text
      .clickModalCheckbox()
      .assert.containsText('@modalCheckboxResultSpan', 'Checked') // Verify checkbox has "Checked" text
      .clickModalVxpButton()
      .checkModalButtonResult()
      .assert.containsText('@modalButtonResultSpan', 'Button Pressed') // Verify button has "Button Pressed" text
      .checkScreenshot('@modalDialogArea');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
