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
  'C13840774 Check textfield text'() {
    this.currentPage.setTextToText('textfield-').assert.attributeContains('@textFieldInputField', 'value', 'textfield-');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
