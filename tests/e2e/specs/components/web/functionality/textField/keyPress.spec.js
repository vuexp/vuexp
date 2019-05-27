module.exports = {
  '@disabled': true,
  '@tags': ['component', 'textfield', 'keyPress'],
  before: function(client, done) {
    this.currentPage = client.maximizeWindow().page.textFieldPage();
    this.currentPage
      .navigate('http://localhost:8080/components/textfield.html')
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
