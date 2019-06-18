module.exports = {
  tags: ['component', 'alertDialog'],
  before: function(client, done) {
    this.currentPage = client.maximizeWindow().page.AlertDialogPage();
    this.currentPage
      .navigate(client.globals.devUrl + 'components/dialogs/alert-dialog.html')
      .waitForElementVisible('body', 60000)
      .customPerform(function() {
        done();
      });
  },
  'C13842880 Check Alert Dialog Component'() {
    this.currentPage
      .click('@alert_button')
      .click('@alert_ok')
      .assert.containsText('@alert_label', 'OK');
  },
  after: function(client, done) {
    client.end().customPerform(done);
  },
};
