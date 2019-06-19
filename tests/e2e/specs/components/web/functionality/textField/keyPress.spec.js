module.exports = {
  tags: ['component', 'Textfield'],
  before: function(client, done) {
    this.currentPage = client.maximizeWindow().page.textfieldPage();
    this.currentPage
      .navigate(client.globals.devUrl + 'components/textfield.html')
      .waitForElementVisible('body', 60000)
      .customPerform(function() {
        done();
      });
  },
  'C13840783 Check textfield key Press'() {
    this.currentPage
      .setTextToHint('keyPressTest')
      .setValue('@textFieldInputField', this.api.Keys.ENTER)
      .assert.containsText('@eventOutput', 'returnPress');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
