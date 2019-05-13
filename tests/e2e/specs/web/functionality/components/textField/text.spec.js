module.exports = {
  tags: ['component', 'textfield'],
  before: function(client, done) {
    this.currentPage = client.maximizeWindow().page.textFieldPage();
    this.currentPage
      .navigate('http://localhost:8080/components/textfield.html')
      .waitForElementVisible('body', 60000)
      .customPerform(function() {
        done();
      });
  },
  'Check textfield text'() {
    this.currentPage.setTextToText('textfield-text-test').assert.containsText('@textFieldInputField', 'textfield-text-test');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
