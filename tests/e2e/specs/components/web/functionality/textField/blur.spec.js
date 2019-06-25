module.exports = {
  tags: ['component', 'textfield'],
  before: function(client, done) {
    this.currentPage = client.maximizeWindow().page.textFieldPage();
    this.currentPage
      .navigate(client.globals.devUrl + 'components/textfield.html')
      .waitForElementVisible('body', 60000)
      .customPerform(function() {
        done();
      });
  },
  'C13840785 Event / Name : blur'() {
    this.currentPage
      .click('@textFieldInputField')
      .click('@textInputField')
      .assert.containsText('@eventOutput', 'blur');
  },
  after: function(client, done) {
    client.end().customPerform(done);
  },
};
