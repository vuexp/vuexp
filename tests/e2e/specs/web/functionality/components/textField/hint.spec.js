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
  'Check textfield hint'() {
    this.currentPage.setTextToHint('textfield-hint-test').assert.attributeContains('@textFieldInputField', 'placeholder', 'textfield-hint-test');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
