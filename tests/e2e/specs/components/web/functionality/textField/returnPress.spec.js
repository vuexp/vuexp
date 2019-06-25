module.exports = {
  '@disabled': true,
  '@tags': ['component', 'textfield'],
  before: function(client, done) {
    this.currentPage = client.maximizeWindow().page.textFieldPage();
    this.currentPage
      .navigate(client.globals.devUrl + 'components/textfield.html')
      .waitForElementVisible('body', 60000)
      .customPerform(function() {
        done();
      });
  },
  'C13840783 Event / Name : returnPress'() {
    this.currentPage
      .click('@textFieldInputField')
      //.setValue('@textFieldInputField', this.api.Keys.ENTER)
      .keys(this.client.Keys.ENTER)
      .assert.containsText('@eventOutput', 'returnPress');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
